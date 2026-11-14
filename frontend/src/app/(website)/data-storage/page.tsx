import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { LegalHeader } from "@/components/website/layout/legal-header";

export const metadata: Metadata = {
  title: `Data Storage & Security - ${siteConfig.brand.name}`,
  description: "Understand where your information is stored, how it is encrypted and protected, and who can access it.",
};

export default function DataStoragePage() {
  const { legal, brand } = siteConfig;

  return (
    <div className="w-full bg-surface pb-16 lg:pb-24">
      <LegalHeader
        title="Data Storage & Security"
        subtitle="Your Information. Managed Responsibly."
        activePath="/data-storage/"
      />

      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 pt-8 lg:pt-12">
        <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-on-surface">
          {/* Section 1: Approach */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              1. Our Approach to Data Security
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} stores information strictly required to operate customer accounts, professional applications, subscriptions, home-service bookings, payments and business operations.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We aim to collect only information necessary to provide and improve our services, avoiding extraneous or unrelated data gathering.
            </p>
          </section>

          {/* Section 2: What Information Do We Store? */}
          <section className="space-y-6">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              2. What Information Do We Store?
            </h2>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Customer Data</h3>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Customer name</li>
                <li>Email address</li>
                <li>Mobile number</li>
                <li>Account credentials (hashed)</li>
                <li>Home and service addresses</li>
                <li>PIN codes</li>
                <li>Subscription details</li>
                <li>Service booking history</li>
                <li>Visit usage records</li>
                <li>Material estimate approvals</li>
                <li>Payment references</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Professional Data</h3>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Professional name</li>
                <li>Contact details</li>
                <li>Profile information</li>
                <li>Skills and service categories</li>
                <li>Service PIN codes</li>
                <li>Uploaded verification documents</li>
                <li>Application status</li>
                <li>Assigned jobs</li>
                <li>Completed jobs</li>
                <li>Earnings and payout history</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Business and Transaction Data</h3>
              <ul className="list-disc pl-6 space-y-1 font-body-sm text-on-surface-variant">
                <li>Subscription purchases</li>
                <li>Payment transaction references</li>
                <li>Cash payment records</li>
                <li>Booking status history</li>
                <li>Material estimates, quantities and actual costs</li>
                <li>Customer approval records</li>
                <li>Visit deduction records</li>
                <li>Administrative activity audit records</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Where Is Your Information Stored? */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              3. Where Is Your Information Stored?
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} uses digital application databases and private file storage systems to maintain its operational records. The infrastructure specifications are outlined below:
            </p>

            <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30 text-on-surface font-semibold">
                    <th className="p-3.5">Infrastructure Component</th>
                    <th className="p-3.5">Provider / Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Application Hosting</td>
                    <td className="p-3.5 text-on-surface-variant">{legal.hostingProvider}</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Main Database</td>
                    <td className="p-3.5 text-on-surface-variant">{legal.databaseProvider}</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Document Storage (Private)</td>
                    <td className="p-3.5 text-on-surface-variant">{legal.fileStorageProvider}</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Backup Storage</td>
                    <td className="p-3.5 text-on-surface-variant">{legal.backupProvider}</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Primary Storage Region</td>
                    <td className="p-3.5 text-secondary font-medium">{legal.primaryStorageRegion}</td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-3.5 font-bold text-on-surface">Backup Region</td>
                    <td className="p-3.5 text-secondary font-medium">{legal.backupStorageRegion}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-body-sm text-on-surface-variant">
              {brand.name} will disclose the actual finalized storage locations and relevant third-party processors in accordance with applicable Indian legal requirements.
            </p>
          </section>

          {/* Section 4: How Is User Information Protected? */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              4. How Is User Information Protected?
            </h2>
            <p className="font-body-md text-on-surface-variant">Our technical security controls include:</p>
            <ul className="list-disc pl-6 space-y-1.5 font-body-sm text-on-surface-variant">
              <li>Encrypted communication across all sessions using TLS/HTTPS.</li>
              <li>Secure password hashing (Argon2id / bcrypt) — passwords are never stored in readable plaintext.</li>
              <li>Restricted database access limited by IP firewalls and private virtual networks.</li>
              <li>Role-based account authorization enforced at the API and database levels.</li>
              <li>Private object storage for uploaded identity and certification documents.</li>
              <li>Immutable administrative access and modification audit logs.</li>
              <li>Protected, encrypted off-site database backups.</li>
              <li>Proactive monitoring for abnormal traffic and suspicious authorization attempts.</li>
            </ul>
            <div className="p-4 bg-surface-container rounded-xl border border-outline-variant/30 text-xs sm:text-sm text-on-surface font-medium">
              We never store users&apos; readable passwords, credit/debit card security codes (CVV), or UPI PINs.
            </div>
          </section>

          {/* Section 5: Who Can Access Your Data? */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              5. Who Can Access Your Data?
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Access is strictly segregated according to platform role:
            </p>

            <div className="space-y-3 pl-2">
              <div>
                <h4 className="font-bold text-on-surface text-sm">Customers</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Can access only their own profile, addresses, subscriptions, payment receipts, bookings, material estimates and approvals, and remaining visit ledger.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-on-surface text-sm">Professionals</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Can access their own professional profile, submitted credentials, approved trade categories, and relevant customer and address details for jobs currently assigned to them.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-on-surface text-sm">Administrators</h4>
                <p className="font-body-sm text-on-surface-variant">
                  Authorised operations staff can access records necessary for platform coordination, including customer management, professional verification, booking allocations, payment verification, and payouts. Administrative actions are logged for accountability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Payment Data Protection */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              6. Payment Data Protection
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} maintains only the transaction metadata needed for verification and statutory accounting (transaction reference IDs, gateway identifiers, amounts, timestamps, payment status, and cash receipt references). All card data, netbanking credentials and UPI processing are handled directly on PCI-DSS certified gateway environments.
            </p>
          </section>

          {/* Section 7: Uploaded Document Protection */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              7. Uploaded Document Protection
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Professional verification documents are stored separately from public website assets in private, non-public object storage buckets. Document retrieval requires authenticated, time-limited signed URLs generated solely for authorised review personnel.
            </p>
          </section>

          {/* Section 8: Data Retention and Deletion */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              8. Data Retention and Deletion
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} retains operational data for the duration required to provide services, administer subscriptions, maintain accounting records, and satisfy legal compliance obligations. When data is no longer necessary, it is permanently deleted or anonymised in accordance with our retention policy.
            </p>
          </section>

          {/* Section 9: Security Incidents */}
          <section className="space-y-3">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              9. Data Security Incidents
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {brand.name} maintains monitoring and incident response procedures to detect, evaluate, and contain potential data security events. In the event of a verified breach impacting user data, notifications will be provided to affected users and regulatory authorities as required by applicable Indian law.
            </p>
          </section>

          {/* Section 10: Privacy Questions */}
          <section className="space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface border-b border-outline-variant/30 pb-3">
              10. Security &amp; Privacy Inquiries
            </h2>
            <div className="bg-surface-container-low rounded-xl p-4 sm:p-5 border border-outline-variant/30 space-y-1.5 text-sm">
              <p><strong className="text-on-surface">Email:</strong> {legal.privacyEmail}</p>
              <p><strong className="text-on-surface">Legal Entity:</strong> {legal.entityName}</p>
              <p><strong className="text-on-surface">Registered Address:</strong> {legal.registeredAddress}</p>
            </div>
            <p className="font-body-sm text-secondary">
              Users are encouraged to promptly report any suspected unauthorized access or vulnerabilities to our security desk.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

