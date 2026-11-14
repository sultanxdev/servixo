import type { UserRole } from "@servixo/contracts";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        email: string;
        role: UserRole;
        emailVerified: boolean;
        image?: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
      session?: {
        id: string;
        userId: string;
        token: string;
        expiresAt: Date;
      };
      validatedQuery?: unknown;
      validatedParams?: unknown;
    }
  }
}

export {};

