import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { LegalHeader } from "@/components/website/layout/legal-header";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.brand.name}`,
  description: "Learn how Servixo collects, uses, stores, processes, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const { legal, brand } = siteConfig;

  return (
    <div className="w-full bg-surface pb-16 lg:pb-24">
      <LegalHeader
        title="Privacy Policy"
        subtitle="Servixo — Your Home. Your Services. All in One Plan."
        activePath="/privacy-policy/"
      />

      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 pt-8 lg:pt-12">
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-on-surface">
          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              1. Introduction
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} respects the privacy of its customers, service professionals and website visitors.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              This Privacy Policy explains how {brand.name} collects, uses, stores, processes and protects personal information when individuals access our website, register an account, purchase subscriptions or use our home-service platform.
            </p>

            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-2 text-sm">
              <p className="font-bold text-on-surface">{brand.name} is operated by:</p>
              <ul className="space-y-1 text-on-surface-variant list-disc pl-5">
                <li><strong className="text-on-surface">Legal Entity:</strong> {legal.entityName}</li>
                <li><strong className="text-on-surface">Registered Address:</strong> {legal.registeredAddress}</li>
                <li><strong className="text-on-surface">Website:</strong> {legal.websiteUrl}</li>
                <li><strong className="text-on-surface">Privacy Contact:</strong> {legal.privacyEmail}</li>
              </ul>
            </div>
            <p className="font-body-sm text-secondary">
              This policy applies to Customers, Professionals, Administrators and website visitors.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-6">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              2. Information We Collect
            </h2>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">A. Customer Information</h3>
              <p className="font-body-md text-on-surface-variant">When customers register or use {brand.name}, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Login credentials</li>
                <li>Residential and service addresses</li>
                <li>PIN code, city and state</li>
                <li>Saved service addresses</li>
                <li>Account preferences</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">B. Professional Information</h3>
              <p className="font-body-md text-on-surface-variant">For professionals registering with {brand.name}, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Residential address</li>
                <li>Professional skills and experience</li>
                <li>Service categories</li>
                <li>Service PIN codes</li>
                <li>Uploaded identity and verification documents</li>
                <li>Application and approval status</li>
                <li>Job history</li>
                <li>Earnings and payout records</li>
              </ul>
              <div className="p-3 bg-surface-container rounded-lg text-xs text-secondary font-medium">
                Note: Access to professional documents is restricted strictly to authorised personnel.
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">C. Booking Information</h3>
              <p className="font-body-md text-on-surface-variant">We collect information required to operate the service platform:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Booking reference</li>
                <li>Selected service</li>
                <li>Booking date and time</li>
                <li>Customer service address</li>
                <li>Assigned professional</li>
                <li>Booking status</li>
                <li>Service completion records</li>
                <li>Visit deduction records</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">D. Subscription Information</h3>
              <p className="font-body-md text-on-surface-variant">We maintain records including:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Subscription plan</li>
                <li>Subscription purchase date</li>
                <li>Subscription start and expiry dates</li>
                <li>Subscription price</li>
                <li>Included visits</li>
                <li>Used visits</li>
                <li>Remaining visits</li>
                <li>Subscription status</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">E. Payment Information</h3>
              <p className="font-body-md text-on-surface-variant">We may store:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Payment reference number</li>
                <li>Gateway transaction ID</li>
                <li>Payment amount</li>
                <li>Payment date</li>
                <li>Payment method</li>
                <li>Payment verification status</li>
                <li>Cash collection records</li>
                <li>Receipts and transaction references</li>
              </ul>
              <p className="font-body-sm text-on-surface-variant italic">
                Online payment credentials, such as card security codes and UPI PINs, are not stored by {brand.name}. Payment processing is handled through authorised third-party payment providers.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">F. Material and Service Estimate Information</h3>
              <p className="font-body-md text-on-surface-variant">Since {brand.name} charges separately for materials and spare parts, we may store:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Material name</li>
                <li>Material description</li>
                <li>Quantity</li>
                <li>Actual material cost</li>
                <li>Professional-submitted estimate</li>
                <li>Customer approval or rejection</li>
                <li>Final material usage</li>
                <li>Material payment status</li>
                <li>Supporting receipts where applicable</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">G. Technical Information</h3>
              <p className="font-body-md text-on-surface-variant">Depending on the features and services used, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Login activity</li>
                <li>Security logs</li>
                <li>Application usage information</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Why We Collect Information */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              3. Why We Collect Information
            </h2>
            <p className="font-body-md text-on-surface-variant">
              {brand.name} uses personal information for the following specific operational purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-1.5 font-body-sm text-on-surface-variant">
              <li>Creating and managing customer and professional accounts.</li>
              <li>Verifying user identity and professional applications.</li>
              <li>Checking service availability by PIN code.</li>
              <li>Managing subscription purchases and visit balances.</li>
              <li>Creating and managing service bookings.</li>
              <li>Assigning approved professionals to bookings.</li>
              <li>Managing material estimates and customer approvals.</li>
              <li>Processing and recording payments.</li>
              <li>Managing professional earnings and payouts.</li>
              <li>Providing customer support.</li>
              <li>Protecting the platform from unauthorised access and misuse.</li>
              <li>Meeting applicable legal and accounting requirements.</li>
            </ol>
            <p className="font-body-sm text-on-surface-variant">
              We do not use information for unrelated purposes without an appropriate legal basis.
            </p>
          </section>

          {/* Section 4: How Information Is Shared */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              4. How Information Is Shared
            </h2>
            <p className="font-body-md text-on-surface-variant">
              {brand.name} may share relevant information with:
            </p>

            <div className="space-y-3 pl-2">
              <div>
                <h4 className="font-bold text-on-surface text-sm">Assigned Professionals</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Professionals receive the customer and job information necessary to complete their assigned service, including the service address and relevant booking details.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-on-surface text-sm">Payment Providers</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Payment-related information is shared with authorised payment gateway providers to process and verify transactions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-on-surface text-sm">Technology Service Providers</h4>
                <p className="font-body-sm text-on-surface-variant">
                  We may use third-party providers for database and application hosting, file and document storage, transactional email, SMS and notifications, and security and application monitoring. Actual provider names and processing locations will be disclosed once finalized.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-on-surface text-sm">Legal Authorities</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Information may be disclosed when required by applicable law, a valid legal process or an authorised government request.
                </p>
              </div>
            </div>

            <div className="p-3 bg-secondary-container/40 rounded-lg text-secondary font-semibold text-xs">
              {brand.name} does not sell personal information to third parties.
            </div>
          </section>

          {/* Section 5: User Data Storage */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              5. User Data Storage
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} stores information electronically in its application databases and associated storage systems, including account profiles, customer addresses, professional profiles and documents, booking records, subscription visit ledgers, payment transaction references, material estimates and approvals, and audit logs.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Sensitive documents and account credentials are subject to access restrictions and security controls. Passwords are stored using secure one-way hashing algorithms (such as Argon2id or bcrypt) and never as readable plaintext.
            </p>

            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-2 text-sm">
              <p className="font-bold text-on-surface">Infrastructure details to be published upon final deployment:</p>
              <ul className="space-y-1 text-on-surface-variant list-disc pl-5">
                <li><strong className="text-on-surface">Database hosting provider:</strong> {legal.databaseProvider}</li>
                <li><strong className="text-on-surface">Application hosting provider:</strong> {legal.hostingProvider}</li>
                <li><strong className="text-on-surface">File storage provider:</strong> {legal.fileStorageProvider}</li>
                <li><strong className="text-on-surface">Primary storage region:</strong> {legal.primaryStorageRegion}</li>
                <li><strong className="text-on-surface">Backup storage region:</strong> {legal.backupStorageRegion}</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Data Security */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              6. Data Security
            </h2>
            <p className="font-body-md text-on-surface-variant">
              {brand.name} takes technical and organisational measures to protect personal information:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Secure HTTPS communication</li>
              <li>Role-based access controls</li>
              <li>Restricted access to professional verification documents</li>
              <li>Secure password hashing</li>
              <li>Protection of stored documents in private storage</li>
              <li>Database access restrictions</li>
              <li>Security monitoring</li>
              <li>Backup and recovery procedures</li>
              <li>Administrative access logs</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant italic">
              Access to personal information is limited to authorised individuals who need it for legitimate operational purposes. No online system can guarantee absolute security.
            </p>
          </section>

          {/* Section 7: Data Retention */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              7. Data Retention
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} retains personal information only for as long as necessary for the relevant service, operational, legal and accounting purposes.
            </p>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Retention duration depends on account activity, subscription records, booking history, payment and accounting requirements, professional verification records, and applicable legal obligations. Where information is no longer required and there is no legal reason to retain it, it will be deleted or anonymised in accordance with our retention schedule.
            </p>
          </section>

          {/* Section 8: User Privacy Rights */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              8. User Privacy Rights
            </h2>
            <p className="font-body-md text-on-surface-variant">Subject to applicable law, users may request:</p>
            <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
              <li>Access to information associated with their accounts.</li>
              <li>Correction of inaccurate personal information.</li>
              <li>Deletion of personal information where permitted.</li>
              <li>Withdrawal of consent where consent is the basis of processing.</li>
              <li>Information about how their data is used.</li>
              <li>Assistance with privacy-related complaints.</li>
            </ul>
            <p className="font-body-sm text-on-surface-variant">
              Some transaction and accounting records may need to be retained where required by law.
            </p>
          </section>

          {/* Section 9: Cookies and Website Technologies */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              9. Cookies and Website Technologies
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} may use cookies or similar technologies for login sessions, website functionality, security, preference management, and performance measurement. Users may control cookies through their browser settings, subject to essential functionality requirements.
            </p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              10. Children&apos;s Privacy
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name}&apos;s customer and professional registration services are intended for adults. We do not knowingly design registration for children under 18 years of age.
            </p>
          </section>

          {/* Section 11: Policy Updates */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              11. Policy Updates
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} may update this Privacy Policy when its services, technology, legal requirements or business processes change. The latest version will be published on the official website with its updated revision date.
            </p>
          </section>

          {/* Section 12: Contact and Privacy Complaints */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              12. Contact and Privacy Complaints
            </h2>
            <p className="font-body-md text-on-surface-variant">
              For privacy-related questions, data access requests or complaints, contact our Grievance Desk:
            </p>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-1.5 text-sm">
              <p><strong className="text-on-surface">Email:</strong> {legal.privacyEmail}</p>
              <p><strong className="text-on-surface">Legal Entity:</strong> {legal.entityName}</p>
              <p><strong className="text-on-surface">Address:</strong> {legal.registeredAddress}</p>
              <p><strong className="text-on-surface">Grievance Contact:</strong> {legal.grievanceContact}</p>
            </div>
            <p className="font-body-sm text-on-surface-variant">
              We review and respond to requests through our applicable grievance-handling process.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

