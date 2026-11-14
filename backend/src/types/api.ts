import type { UserRole, BookingStatus, SubscriptionStatus, PaymentStatus } from "./index.js";

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
