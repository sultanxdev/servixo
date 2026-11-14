import crypto from "node:crypto";

interface RazorpayConfig {
  keyId: string;
  keySecret: string;
  webhookSecret: string;
}

/**
 * Razorpay integration service.
 * Uses HTTPS REST API for Cloudflare Workers / Node.js portability.
 */
export class RazorpayService {
  private readonly baseUrl = "https://api.razorpay.com/v1";
  private readonly config: RazorpayConfig;

  constructor(config: RazorpayConfig) {
    this.config = config;
  }

  private getAuthHeader(): string {
    const credentials = Buffer.from(
      `${this.config.keyId}:${this.config.keySecret}`,
    ).toString("base64");
    return `Basic ${credentials}`;
  }

  /**
   * Create a Razorpay order.
   */
  async createOrder(params: {
    amount: number; // in paise
    currency?: string;
    receipt: string;
    notes?: Record<string, string>;
  }): Promise<Record<string, unknown>> {
    const response = await fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.getAuthHeader(),
      },
      body: JSON.stringify({
        amount: params.amount,
        currency: params.currency ?? "INR",
        receipt: params.receipt,
        notes: params.notes,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Razorpay order creation failed: ${JSON.stringify(error)}`);
    }

    return response.json() as Promise<Record<string, unknown>>;
  }

  /**
   * Fetch a payment by ID.
   */
  async fetchPayment(paymentId: string): Promise<Record<string, unknown>> {
    const response = await fetch(`${this.baseUrl}/payments/${paymentId}`, {
      headers: {
        Authorization: this.getAuthHeader(),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch payment: ${paymentId}`);
    }

    return response.json() as Promise<Record<string, unknown>>;
  }

  /**
   * Verify Razorpay payment signature.
   * MUST be called before activating any subscription.
   */
  verifyPaymentSignature(params: {
    orderId: string;
    paymentId: string;
    signature: string;
  }): boolean {
    const body = `${params.orderId}|${params.paymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", this.config.keySecret)
      .update(body)
      .digest("hex");
    return expectedSignature === params.signature;
  }

  /**
   * Verify webhook HMAC signature.
   * Uses the raw request body to prevent tampering.
   */
  verifyWebhookSignature(rawBody: string, signature: string): boolean {
    const expectedSignature = crypto
      .createHmac("sha256", this.config.webhookSecret)
      .update(rawBody)
      .digest("hex");
    return expectedSignature === signature;
  }
}

