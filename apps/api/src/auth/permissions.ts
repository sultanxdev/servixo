import type { UserRole } from "@servixo/contracts";

export type Permission =
  | "bookings:create"
  | "bookings:read:own"
  | "bookings:cancel:own"
  | "subscriptions:read:own"
  | "subscriptions:create"
  | "addresses:manage:own"
  | "profile:read:own"
  | "profile:update:own"
  | "jobs:read:assigned"
  | "jobs:update:assigned"
  | "earnings:read:own"
  | "professional-profile:manage:own"
  | "documents:manage:own"
  | "service-areas:manage:own"
  | "users:manage"
  | "services:manage"
  | "plans:manage"
  | "subscriptions:manage"
  | "bookings:manage"
  | "professionals:manage"
  | "pincodes:manage"
  | "payments:manage"
  | "payouts:manage"
  | "earnings:manage";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  customer: [
    "bookings:create",
    "bookings:read:own",
    "bookings:cancel:own",
    "subscriptions:read:own",
    "subscriptions:create",
    "addresses:manage:own",
    "profile:read:own",
    "profile:update:own",
  ],
  professional: [
    "jobs:read:assigned",
    "jobs:update:assigned",
    "profile:read:own",
    "profile:update:own",
    "earnings:read:own",
    "professional-profile:manage:own",
    "documents:manage:own",
    "service-areas:manage:own",
  ],
  admin: [
    "users:manage",
    "services:manage",
    "plans:manage",
    "subscriptions:manage",
    "bookings:manage",
    "professionals:manage",
    "pincodes:manage",
    "payments:manage",
    "payouts:manage",
    "earnings:manage",
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p));
}
