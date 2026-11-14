import { z } from "zod";
import { BOOKING_STATUSES } from "../types/index.js";

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  role: z.enum(["customer", "professional"] as const),
});

// PIN code schema
export const pinCodeSchema = z.object({
  pincode: z
    .string()
    .length(6, "PIN code must be exactly 6 digits")
    .regex(/^\d{6}$/, "PIN code must contain only digits"),
});

// Pagination schema
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

// ID param schema
export const idParamSchema = z.object({
  id: z.string().uuid("Invalid ID format"),
});

// Service schemas
export const createServiceSchema = z.object({
  categoryId: z.string().uuid(),
  name: z.string().min(2).max(200),
  description: z.string().max(2000).optional(),
  basePrice: z.number().int().positive("Price must be positive (in paise)"),
  estimatedDuration: z.number().int().positive("Duration must be positive (in minutes)"),
  isActive: z.boolean().default(true),
});

// Plan schemas
export const createPlanSchema = z.object({
  name: z.string().min(2).max(200),
  description: z.string().max(2000).optional(),
  price: z.number().int().positive("Price must be positive (in paise)"),
  durationDays: z.number().int().positive(),
  isActive: z.boolean().default(true),
});

// Booking schemas
export const createBookingSchema = z.object({
  serviceId: z.string().uuid(),
  subscriptionId: z.string().uuid(),
  scheduledDate: z.string().date("Invalid date format"),
  scheduledTime: z.string().regex(/^\d{2}:\d{2}$/, "Time must be in HH:MM format"),
  addressId: z.string().uuid(),
  notes: z.string().max(1000).optional(),
});

export const updateBookingStatusSchema = z.object({
  status: z.enum(BOOKING_STATUSES),
  reason: z.string().max(500).optional(),
});

// Export types inferred from schemas
export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type PinCodeInput = z.infer<typeof pinCodeSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type CreatePlanInput = z.infer<typeof createPlanSchema>;
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
export type UpdateBookingStatusInput = z.infer<typeof updateBookingStatusSchema>;
