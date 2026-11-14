import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { LegalHeader } from "@/components/website/layout/legal-header";

export const metadata: Metadata = {
  title: `Terms & Conditions - ${siteConfig.brand.name}`,
  description: "Terms and conditions governing the use of the Servixo home services platform for customers and professionals.",
};

export default function TermsAndConditionsPage() {
  const { legal, brand } = siteConfig;

  return (
    <div className="w-full bg-surface pb-16 lg:pb-24">
      <LegalHeader
        title="Terms & Conditions"
        subtitle="Servixo — Website and Platform Terms"
        activePath="/terms-and-conditions/"
      />

      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 pt-8 lg:pt-12">
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-on-surface">
          {/* Section 1: Acceptance */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              1. Acceptance of Terms
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              By accessing or using the {brand.name} website or application, creating an account, purchasing a subscription or booking a service, you agree to be bound by these Terms &amp; Conditions.
            </p>
            <p className="font-body-sm text-secondary font-medium">
              If you do not agree to these terms, please do not access or use the platform.
            </p>
          </section>

          {/* Section 2: About Servixo */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              2. About {brand.name}
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} is a home-services subscription and booking platform that enables customers to access eligible home services through prepaid subscription plans. The platform connects customers with approved service professionals and supports booking, subscription management, service allocation, material estimates and payment records.
            </p>
          </section>

          {/* Section 3: Eligibility and Registration */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              3. Eligibility and Registration
            </h2>
            <p className="font-body-md text-on-surface-variant">To use {brand.name}:</p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Customers must be at least 18 years old.</li>
              <li>Professionals must provide accurate registration information and trade credentials.</li>
              <li>Users must provide valid contact details.</li>
              <li>Users must maintain the security of their account credentials.</li>
              <li>Users must not impersonate another person or provide misleading information.</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              {brand.name} may restrict or suspend accounts involved in fraudulent activity, misuse or violations of these terms.
            </p>
          </section>

          {/* Section 4: Home Services */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              4. Home Services
            </h2>
            <p className="font-body-md text-on-surface-variant">
              {brand.name} offers home-service categories including:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Home Cleaning</li>
              <li>Plumbing Repairs</li>
              <li>Electrical Repairs</li>
              <li>Appliance Services</li>
              <li>Home Maintenance</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              Available services vary by location, PIN code, professional availability and active subscription eligibility. A service displayed on the website is not guaranteed to be operational in every locality.
            </p>
          </section>

          {/* Section 5: Subscription and Service Labour */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              5. Subscription and Service Labour
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Customers purchase subscription plans that provide a specified number of eligible service visits for a defined validity period.
            </p>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-2 text-sm">
              <p className="font-bold text-on-surface">For eligible services:</p>
              <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                <li>Technician labour is included in the subscription.</li>
                <li>Customers do not pay an additional service labour charge for covered work.</li>
                <li>Each service has a configured visit cost clearly displayed before booking confirmation.</li>
              </ul>
            </div>
            <div className="p-3 bg-secondary-container/40 rounded-lg text-secondary font-semibold text-xs">
              Important: Spare parts, replacement components, materials and applicable consumables are not included in the subscription.
            </div>
          </section>

          {/* Section 6: Materials and Spare Parts */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              6. Materials and Spare Parts
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Materials and spare parts are charged separately at their <strong>actual purchase cost</strong>. {brand.name} does not add a material markup under the current pricing model.
            </p>

            <div className="space-y-2 text-sm">
              <p className="font-bold text-on-surface">The material charging process works as follows:</p>
              <ol className="list-decimal pl-6 space-y-1.5 font-body-sm text-on-surface-variant">
                <li>The professional inspects the service requirement on-site.</li>
                <li>The professional prepares an itemised material estimate (materials, quantities, actual unit costs).</li>
                <li>The customer reviews the material quantities and costs.</li>
                <li>The customer approves or rejects the estimate.</li>
                <li>Approved materials may be purchased or used for the service.</li>
                <li>Final material usage and payment records are maintained by {brand.name}.</li>
              </ol>
            </div>

            <p className="font-body-sm text-on-surface-variant">
              Any change in material quantity or cost requires further customer approval before the additional materials are used.
            </p>

            <div className="p-4 bg-surface-container rounded-xl border border-outline-variant/30 text-xs sm:text-sm text-on-surface leading-relaxed">
              <strong>Non-Deduction Guarantee on Rejected Estimates:</strong> If the customer rejects materials necessary to complete the requested work, the job cannot proceed using those materials and <strong>no subscription visit will be deducted</strong> for that incomplete job.
            </div>
          </section>

          {/* Section 7: Payment Methods */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              7. Payment Methods
            </h2>
            <p className="font-body-md text-on-surface-variant">
              {brand.name} supports the following payment methods for applicable charges:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Online payment through the available payment gateway.</li>
              <li>Cash payment recorded through authorised {brand.name} administration.</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              Customers should retain payment references or receipts. A subscription becomes active only after successful online payment verification or authorised cash-payment activation. Material payments are recorded separately from subscription payments.
            </p>
          </section>

          {/* Section 8: Booking and Professional Assignment */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              8. Booking and Professional Assignment
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Customers can select an eligible service, address, available date, and available time slot.
            </p>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              {brand.name} administrators manually assign approved professionals to bookings based on required service trade skills, PIN code coverage, professional verification approval status, and operational availability. Booking does not guarantee that a specific named professional will be assigned.
            </p>
          </section>

          {/* Section 9: Service Completion and Visit Deduction */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              9. Service Completion and Visit Deduction
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              A subscription visit is deducted <strong>only after the assigned professional marks the job as completed</strong>. The visit deduction is based on the configured visit cost for that specific service (e.g. Standard service: 1 visit; Certain configured higher-intensity services: 2 visits).
            </p>
            <p className="font-body-sm text-on-surface-variant">
              A completed job is processed only once for visit deduction to prevent duplicate deductions. Where necessary materials are rejected and the job cannot proceed, no visit is deducted.
            </p>
          </section>

          {/* Section 10: Customer Responsibilities */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              10. Customer Responsibilities
            </h2>
            <p className="font-body-md text-on-surface-variant">Customers agree to:</p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Provide correct booking and address information.</li>
              <li>Ensure safe, reasonable access to the service location.</li>
              <li>Be available during the confirmed booking window.</li>
              <li>Communicate relevant service requirements clearly.</li>
              <li>Review material estimates before giving approval.</li>
              <li>Make prompt payment for approved materials.</li>
              <li>Treat assigned service professionals respectfully.</li>
            </ul>
            <p className="font-body-sm text-secondary">
              Customers should not request professionals to undertake unsafe or unrelated work through the platform.
            </p>
          </section>

          {/* Section 11: Professional Responsibilities */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              11. Professional Responsibilities
            </h2>
            <p className="font-body-md text-on-surface-variant">Professionals are expected to:</p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Maintain accurate registration and verification information.</li>
              <li>Follow their approved service trade categories.</li>
              <li>Complete assigned jobs professionally and conscientiously.</li>
              <li>Maintain accurate job status records.</li>
              <li>Submit itemised material estimates with actual costs.</li>
              <li>Obtain customer approval before using chargeable materials.</li>
              <li>Follow applicable trade safety requirements.</li>
            </ul>
          </section>

          {/* Section 12: Service Availability */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              12. Service Availability
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} services are subject to geographic availability and operational capacity. The availability checker uses the customer&apos;s PIN code and configured service coverage to determine whether a service can be booked. {brand.name} reserves the right to update available service categories and coverage zones.
            </p>
          </section>

          {/* Section 13: Cancellation, Rescheduling and Refunds */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              13. Cancellation, Rescheduling and Refunds
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Cancellation and rescheduling requests must be submitted through the customer account or support helpdesk. The specific cancellation window, applicable charges, refund eligibility and treatment of unused visits are governed by the separately published Cancellation and Refund Policy.
            </p>
          </section>

          {/* Section 14: Account Suspension */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              14. Account Suspension
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} may restrict or suspend an account in cases involving fraud, false registration details, payment misuse, abusive behaviour, unauthorised access, or repeated violations of platform policies. Where appropriate, users will be informed of the reason and available dispute resolution process.
            </p>
          </section>

          {/* Section 15: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              15. Limitation of Liability
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} takes reasonable steps to operate its platform and coordinate services. However, the platform may experience interruptions due to technical maintenance, external service providers, telecommunications issues or circumstances outside reasonable control. Nothing in these terms excludes liability that cannot lawfully be excluded under Indian law.
            </p>
          </section>

          {/* Section 16: Privacy and Data Protection */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              16. Privacy and Data Protection
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Use of {brand.name} is also subject to the {brand.name} Privacy Policy and Data Storage &amp; Security guidelines, which explain how personal information is collected, processed, stored, and protected.
            </p>
          </section>

          {/* Section 17: Changes to Terms */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              17. Changes to These Terms
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} may revise these terms when services, policies or legal requirements change. Updated terms will be published on the official website with an updated revision date.
            </p>
          </section>

          {/* Section 18: Governing Law */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              18. Governing Law &amp; Jurisdiction
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India. Courts in {legal.governingState} shall have jurisdiction over any disputes arising under or in relation to these terms.
            </p>
          </section>

          {/* Section 19: Contact Information */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              19. Contact Information
            </h2>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-1.5 text-sm">
              <p><strong className="text-on-surface">Legal Entity:</strong> {legal.entityName}</p>
              <p><strong className="text-on-surface">Email:</strong> {legal.supportEmail}</p>
              <p><strong className="text-on-surface">Address:</strong> {legal.registeredAddress}</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

