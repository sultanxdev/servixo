import {
  pgTable, uuid, text, integer, boolean, timestamp, date, time,
  uniqueIndex, index, pgEnum,
} from "drizzle-orm/pg-core";
import { user } from "./auth.js";

// ── Enums ──
export const verificationStatusEnum = pgEnum("verification_status", [
  "pending", "under_review", "approved", "rejected",
]);
export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "pending_payment", "active", "expired", "cancelled",
]);
export const paymentStatusEnum = pgEnum("payment_status", [
  "pending", "authorized", "captured", "failed", "refunded",
]);
export const bookingStatusEnum = pgEnum("booking_status", [
  "pending", "confirmed", "assigned", "in_progress", "completed", "cancelled",
]);
export const payoutStatusEnum = pgEnum("payout_status", [
  "pending", "processing", "completed", "failed",
]);
export const documentTypeEnum = pgEnum("document_type", [
  "aadhaar", "pan", "certification", "police_clearance", "other",
]);

// ── 1. Professional Profiles ──
export const professionalProfiles = pgTable("professional_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique().references(() => user.id, { onDelete: "cascade" }),
  phone: text("phone"),
  bio: text("bio"),
  experienceYears: integer("experience_years"),
  verificationStatus: verificationStatusEnum("verification_status").notNull().default("pending"),
  isAvailable: boolean("is_available").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ── 2. Professional Documents ──
export const professionalDocuments = pgTable("professional_documents", {
  id: uuid("id").defaultRandom().primaryKey(),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "cascade" }),
  documentType: documentTypeEnum("document_type").notNull(),
  documentUrl: text("document_url").notNull(),
  fileName: text("file_name").notNull(),
  isVerified: boolean("is_verified").notNull().default(false),
  uploadedAt: timestamp("uploaded_at").notNull().defaultNow(),
});

// ── 3. Addresses ──
export const addresses = pgTable("addresses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  label: text("label").notNull().default("Home"),
  line1: text("line1").notNull(),
  line2: text("line2"),
  city: text("city").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode").notNull(),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ── 4. Service Categories ──
export const serviceCategories = pgTable("service_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  imageUrl: text("image_url"),
  isActive: boolean("is_active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ── 5. Services ──
export const services = pgTable("services", {
  id: uuid("id").defaultRandom().primaryKey(),
  categoryId: uuid("category_id").notNull().references(() => serviceCategories.id, { onDelete: "restrict" }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  basePrice: integer("base_price").notNull(), // in paise
  estimatedDuration: integer("estimated_duration").notNull(), // in minutes
  imageUrl: text("image_url"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ── 6. Professional Services ──
export const professionalServices = pgTable("professional_services", {
  id: uuid("id").defaultRandom().primaryKey(),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "cascade" }),
  serviceId: uuid("service_id").notNull().references(() => services.id, { onDelete: "cascade" }),
  customPrice: integer("custom_price"), // override in paise, nullable
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => [
  uniqueIndex("uq_professional_service").on(table.professionalId, table.serviceId),
]);

// ── 7. Serviceable Pincodes ──
export const serviceablePincodes = pgTable("serviceable_pincodes", {
  id: uuid("id").defaultRandom().primaryKey(),
  pincode: text("pincode").notNull().unique(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ── 8. Professional Service Areas ──
export const professionalServiceAreas = pgTable("professional_service_areas", {
  id: uuid("id").defaultRandom().primaryKey(),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "cascade" }),
  pincodeId: uuid("pincode_id").notNull().references(() => serviceablePincodes.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => [
  uniqueIndex("uq_professional_pincode").on(table.professionalId, table.pincodeId),
]);

// ── 9. Plans ──
export const plans = pgTable("plans", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  price: integer("price").notNull(), // in paise
  durationDays: integer("duration_days").notNull(),
  maxVisits: integer("max_visits").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ── 10. Plan Services ──
export const planServices = pgTable("plan_services", {
  id: uuid("id").defaultRandom().primaryKey(),
  planId: uuid("plan_id").notNull().references(() => plans.id, { onDelete: "cascade" }),
  serviceId: uuid("service_id").notNull().references(() => services.id, { onDelete: "cascade" }),
  visitAllocation: integer("visit_allocation").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => [
  uniqueIndex("uq_plan_service").on(table.planId, table.serviceId),
]);

// ── 11. Subscriptions ──
export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "restrict" }),
  planId: uuid("plan_id").notNull().references(() => plans.id, { onDelete: "restrict" }),
  status: subscriptionStatusEnum("status").notNull().default("pending_payment"),
  startDate: date("start_date"),
  endDate: date("end_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
  index("idx_subscription_user").on(table.userId),
  index("idx_subscription_status").on(table.status),
]);

// ── 12. Payments ──
export const payments = pgTable("payments", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "restrict" }),
  subscriptionId: uuid("subscription_id").references(() => subscriptions.id, { onDelete: "set null" }),
  razorpayOrderId: text("razorpay_order_id").unique(),
  razorpayPaymentId: text("razorpay_payment_id").unique(),
  razorpaySignature: text("razorpay_signature"),
  amount: integer("amount").notNull(), // in paise
  currency: text("currency").notNull().default("INR"),
  status: paymentStatusEnum("status").notNull().default("pending"),
  method: text("method"),
  failureReason: text("failure_reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
  index("idx_payment_user").on(table.userId),
  index("idx_payment_status").on(table.status),
  index("idx_payment_razorpay_order").on(table.razorpayOrderId),
]);

// ── 13. Razorpay Webhook Events ──
export const razorpayWebhookEvents = pgTable("razorpay_webhook_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventId: text("event_id").notNull().unique(),
  eventType: text("event_type").notNull(),
  payload: text("payload").notNull(), // JSON stringified
  processed: boolean("processed").notNull().default(false),
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ── 14. Subscription Visit Ledger ──
export const subscriptionVisitLedger = pgTable("subscription_visit_ledger", {
  id: uuid("id").defaultRandom().primaryKey(),
  subscriptionId: uuid("subscription_id").notNull().references(() => subscriptions.id, { onDelete: "restrict" }),
  serviceId: uuid("service_id").notNull().references(() => services.id, { onDelete: "restrict" }),
  totalCredits: integer("total_credits").notNull(),
  usedCredits: integer("used_credits").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
  uniqueIndex("uq_sub_service_ledger").on(table.subscriptionId, table.serviceId),
]);

// ── 15. Bookings ──
export const bookings = pgTable("bookings", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "restrict" }),
  serviceId: uuid("service_id").notNull().references(() => services.id, { onDelete: "restrict" }),
  subscriptionId: uuid("subscription_id").notNull().references(() => subscriptions.id, { onDelete: "restrict" }),
  addressId: uuid("address_id").notNull().references(() => addresses.id, { onDelete: "restrict" }),
  status: bookingStatusEnum("status").notNull().default("pending"),
  scheduledDate: date("scheduled_date").notNull(),
  scheduledTime: time("scheduled_time").notNull(),
  notes: text("notes"),
  completedAt: timestamp("completed_at"),
  cancelledAt: timestamp("cancelled_at"),
  cancellationReason: text("cancellation_reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
  index("idx_booking_user").on(table.userId),
  index("idx_booking_status").on(table.status),
  index("idx_booking_date").on(table.scheduledDate),
]);

// ── 16. Booking Assignments ──
export const bookingAssignments = pgTable("booking_assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  bookingId: uuid("booking_id").notNull().references(() => bookings.id, { onDelete: "cascade" }),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "restrict" }),
  assignedAt: timestamp("assigned_at").notNull().defaultNow(),
  acceptedAt: timestamp("accepted_at"),
  rejectedAt: timestamp("rejected_at"),
  rejectionReason: text("rejection_reason"),
}, (table) => [
  index("idx_assignment_booking").on(table.bookingId),
  index("idx_assignment_professional").on(table.professionalId),
]);

// ── 17. Booking Status History ──
export const bookingStatusHistory = pgTable("booking_status_history", {
  id: uuid("id").defaultRandom().primaryKey(),
  bookingId: uuid("booking_id").notNull().references(() => bookings.id, { onDelete: "cascade" }),
  fromStatus: bookingStatusEnum("from_status"),
  toStatus: bookingStatusEnum("to_status").notNull(),
  changedBy: text("changed_by").notNull().references(() => user.id),
  reason: text("reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ── 18. Professional Earnings ──
export const professionalEarnings = pgTable("professional_earnings", {
  id: uuid("id").defaultRandom().primaryKey(),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "restrict" }),
  bookingId: uuid("booking_id").notNull().references(() => bookings.id, { onDelete: "restrict" }),
  amount: integer("amount").notNull(), // in paise
  isPaid: boolean("is_paid").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ── 19. Payouts ──
export const payouts = pgTable("payouts", {
  id: uuid("id").defaultRandom().primaryKey(),
  professionalId: uuid("professional_id").notNull().references(() => professionalProfiles.id, { onDelete: "restrict" }),
  amount: integer("amount").notNull(), // in paise
  status: payoutStatusEnum("status").notNull().default("pending"),
  transactionRef: text("transaction_ref"),
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
  index("idx_payout_professional").on(table.professionalId),
  index("idx_payout_status").on(table.status),
]);
