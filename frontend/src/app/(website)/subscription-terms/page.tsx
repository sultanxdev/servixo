import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { LegalHeader } from "@/components/website/layout/legal-header";

export const metadata: Metadata = {
  title: `Subscription Terms - ${siteConfig.brand.name}`,
  description: "Rules governing Servixo prepaid subscription plans, visit allocations, labor coverage, and material charges.",
};

export default function SubscriptionTermsPage() {
  const { legal, brand, plans } = siteConfig;

  return (
    <div className="w-full bg-surface pb-16 lg:pb-24">
      <LegalHeader
        title="Subscription Terms"
        subtitle="Clear & Transparent Subscription Rules"
        activePath="/subscription-terms/"
      />

      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 pt-8 lg:pt-12">
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-on-surface">
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              1. Subscription Overview
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} offers prepaid home-services subscription plans. A subscription provides customers with a defined number of service visits over a specified validity period.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Each plan has its own subscription price, validity period, included visits, eligible services, and service-specific visit costs. Subscription plans are intended to cover <strong>eligible service labour</strong>. Materials, replacement hardware and spare parts are charged separately.
            </p>
          </section>

          {/* Section 2: Available Plans */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              2. Available Subscription Plans
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              The following table outlines the currently configured indicative plans. Final approved prices and applicable taxes are displayed at checkout:
            </p>

            <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30 text-on-surface font-semibold">
                    <th className="p-3.5">Plan</th>
                    <th className="p-3.5">Price</th>
                    <th className="p-3.5">Validity</th>
                    <th className="p-3.5">Visits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  {plans.items.map((plan) => (
                    <tr key={plan.id} className="hover:bg-surface-container-lowest transition-colors">
                      <td className="p-3.5 font-bold text-on-surface">{plan.name}</td>
                      <td className="p-3.5 text-primary font-bold">{plan.price}</td>
                      <td className="p-3.5 text-on-surface-variant">{plan.validity}</td>
                      <td className="p-3.5 text-secondary font-bold">{plan.visits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-body-sm text-secondary">
              The specific services included in each plan are determined by the eligibility settings displayed at the time of purchase.
            </p>
          </section>

          {/* Section 3: Subscription Activation */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              3. Subscription Activation
            </h2>
            <p className="font-body-md text-on-surface-variant">
              A subscription becomes active immediately after:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Successful server verification of an online payment; or</li>
              <li>Recording and authorised administrative activation of an accepted cash payment.</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              The exact subscription start date and expiry date will be prominently displayed in the customer dashboard.
            </p>
          </section>

          {/* Section 4: Included Services and Labour */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              4. Included Services and Labour
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Eligible service labour is fully covered under the subscription visits. Customers are not charged additional labour fees for standard service tasks covered under their active plan tier.
            </p>
            <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 text-sm space-y-1.5">
              <p className="font-bold text-on-surface">Subscription benefits do NOT automatically cover:</p>
              <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                <li>Spare parts (e.g. compressors, motors, valves)</li>
                <li>Replacement components (e.g. switch plates, taps, piping)</li>
                <li>Plumbing fittings and sealants</li>
                <li>Electrical components and fixtures</li>
                <li>Appliance replacement modules or refrigerants</li>
                <li>Specialized cleaning consumables</li>
                <li>Other chargeable job-specific physical materials</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Materials and Additional Costs */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              5. Materials and Additional Costs
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              All required materials are charged separately at their <strong>actual purchase cost</strong>. The assigned professional prepares an itemised estimate containing:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Material name</li>
              <li>Quantity required</li>
              <li>Unit purchase cost</li>
              <li>Total estimated amount</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              The customer must approve the estimate before chargeable materials are purchased or installed. Material costs are strictly separate from subscription plan prices and may be paid online or in cash. Material charges do not consume subscription visits.
            </p>
          </section>

          {/* Section 6: Material Estimate Rejection & Visit Safeguard */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              6. Material Estimate Rejection Safeguard
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Customers are free to reject any material estimate submitted by a technician. When rejected materials are necessary to complete the requested service:
            </p>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-2 text-sm">
              <ul className="list-disc pl-5 space-y-1 text-on-surface-variant">
                <li>The professional cannot proceed with the required material-dependent repair.</li>
                <li>The job is recorded as unable to proceed due to rejected materials.</li>
                <li><strong className="text-primary font-bold">No subscription visit is deducted</strong> for that incomplete job.</li>
                <li>The material charge is not collected.</li>
              </ul>
            </div>
            <p className="font-body-sm text-on-surface-variant">
              A revised estimate must be submitted and approved before proceeding with any additional chargeable materials.
            </p>
          </section>

          {/* Section 7: Visit Allocation and Deduction */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              7. Visit Allocation and Deduction
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Each subscription includes a fixed number of visits. Different services may have different configured visit costs (e.g. Standard repair = 1 visit; Multi-hour intensive service = 2 visits). The applicable visit cost is clearly visible before the customer confirms the booking.
            </p>
            <div className="p-4 bg-surface-container rounded-xl border border-outline-variant/30 text-xs sm:text-sm text-on-surface space-y-1">
              <p className="font-bold">A visit is deducted ONLY when all the following conditions are met:</p>
              <ol className="list-decimal pl-5 space-y-0.5 text-on-surface-variant">
                <li>The booking is assigned to an approved professional.</li>
                <li>The professional performs the eligible work on site.</li>
                <li>The job is formally marked as Completed.</li>
                <li>The platform successfully and transactionally records the visit deduction.</li>
              </ol>
            </div>
            <p className="font-body-sm text-secondary">
              A completed job is processed once to prevent any duplicate visit deductions.
            </p>
          </section>

          {/* Section 8: Subscription Validity */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              8. Subscription Validity
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Each subscription remains valid for its stated period (e.g. 6 or 12 months) from the activation date. The validity dates are visible in the customer dashboard. The exact treatment of unused visits at expiry is governed by the approved subscription expiry policy.
            </p>
          </section>

          {/* Section 9: Booking Conditions */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              9. Booking Conditions
            </h2>
            <p className="font-body-md text-on-surface-variant">To schedule a visit, a customer must have:</p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>An active, non-expired subscription.</li>
              <li>At least the required number of remaining visits for the requested service.</li>
              <li>An eligible service under that plan tier.</li>
              <li>A serviceable postal PIN code.</li>
              <li>An available booking time slot.</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              Professional assignment is managed by {brand.name} administrators.
            </p>
          </section>

          {/* Section 10: Payment */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              10. Subscription Payment
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Subscriptions can be purchased using supported payment methods. Online subscription payments must be verified by the server before activation. Cash subscription payments require authorised administrative recording and activation.
            </p>
          </section>

          {/* Section 11: Renewal */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              11. Renewal
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Automatic recurring subscription renewal is not enabled in the current platform version. Customers may purchase another plan when their current plan expires or visits are depleted.
            </p>
          </section>

          {/* Section 12: Cancellation and Refunds */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              12. Cancellation and Refunds
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Subscription cancellation and refund eligibility are governed by the approved platform refund policy. Unused visit refund rules and cancellation windows are specified at purchase.
            </p>
          </section>

          {/* Section 13: Subscription Support */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              13. Subscription Support
            </h2>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-1.5 text-sm">
              <p><strong className="text-on-surface">Email:</strong> {legal.supportEmail}</p>
              <p><strong className="text-on-surface">Website:</strong> {legal.websiteUrl}</p>
            </div>
            <p className="font-body-sm text-on-surface-variant">
              {brand.name} reserves the right to update subscription details and eligibility rules for future purchases, subject to applicable law and existing customer commitments.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

