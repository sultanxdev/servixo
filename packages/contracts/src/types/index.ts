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

