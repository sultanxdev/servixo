// User roles
export const USER_ROLES = ["customer", "professional", "admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];

// Booking statuses
export const BOOKING_STATUSES = [
  "pending",
  "confirmed",
  "assigned",
  "in_progress",
  "completed",
  "cancelled",
] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

// Subscription statuses
export const SUBSCRIPTION_STATUSES = [
  "pending_payment",
  "active",
  "expired",
  "cancelled",
] as const;
export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number];

// Payment statuses
export const PAYMENT_STATUSES = [
  "pending",
  "authorized",
  "captured",
  "failed",
  "refunded",
] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

// Professional verification statuses
export const VERIFICATION_STATUSES = [
  "pending",
  "under_review",
  "approved",
  "rejected",
] as const;
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];

// Payout statuses
export const PAYOUT_STATUSES = [
  "pending",
  "processing",
  "completed",
  "failed",
] as const;
export type PayoutStatus = (typeof PAYOUT_STATUSES)[number];

// API Response types
export interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Array<{
    field?: string;
    message: string;
  }>;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiSuccessResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Auth
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  role: Exclude<UserRole, "admin">;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role: UserRole;
  emailVerified: boolean;
  createdAt: string;
}

// Services
export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
}

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string | null;
  basePrice: number; // in paise
  estimatedDuration: number; // in minutes
  imageUrl: string | null;
  isActive: boolean;
}

// Plans
export interface Plan {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number; // in paise
  durationDays: number;
  isActive: boolean;
}

// PIN Code
export interface PinCodeCheckRequest {
  pincode: string;
}

export interface PinCodeCheckResponse {
  available: boolean;
  pincode: string;
  city?: string;
  state?: string;
}

// Bookings
export interface BookingSummary {
  id: string;
  serviceId: string;
  serviceName: string;
  status: BookingStatus;
  scheduledDate: string;
  scheduledTime: string;
  createdAt: string;
}

// Subscriptions
export interface SubscriptionSummary {
  id: string;
  planId: string;
  planName: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string;
  remainingVisits: number;
}

// Health check
export interface HealthCheckResponse {
  status: "ok" | "degraded" | "error";
  timestamp: string;
  version: string;
  environment: string;
}

export * from "./schemas.js";
