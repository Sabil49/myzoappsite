export const metadata = {
  title: 'Privacy Policy | Anil Sweets Corner',
  description: 'Privacy Policy for the Anil Sweets Corner mobile application.',
}

const sectionClassName = 'text-2xl font-semibold text-slate-900'
const paragraphClassName = 'mt-4 text-base leading-8 text-slate-600'
const listClassName =
  'mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-600'

export default function AnilSweetsCornerPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
          Privacy policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy for Anil Sweets Corner
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Last Updated: June 2026
        </p>

        <section className="mt-12 space-y-10">
          <div>
            <p className="text-base leading-8 text-slate-600">
              Anil Sweets Corner (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your information
              when you use the Anil Sweets Corner mobile application.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Information We Collect</h2>
            <p className={paragraphClassName}>
              We may collect the following information:
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Personal Information
              </h3>
              <ul className={listClassName}>
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Delivery address</li>
                <li>Account login information</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Order Information
              </h3>
              <ul className={listClassName}>
                <li>Products ordered</li>
                <li>Order history</li>
                <li>Transaction details</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Device Information
              </h3>
              <ul className={listClassName}>
                <li>Device type</li>
                <li>Operating system</li>
                <li>App version</li>
                <li>Diagnostic and crash information</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className={sectionClassName}>How We Use Your Information</h2>
            <p className={paragraphClassName}>We use your information to:</p>
            <ul className={listClassName}>
              <li>Create and manage your account</li>
              <li>Process and fulfill orders</li>
              <li>Provide customer support</li>
              <li>Send order updates and notifications</li>
              <li>Improve app functionality and user experience</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className={sectionClassName}>Payments</h2>
            <p className={paragraphClassName}>
              Payments may be processed through third-party payment providers.
              We do not store complete payment card information on our servers.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Data Sharing</h2>
            <p className={paragraphClassName}>
              We do not sell your personal information.
            </p>
            <p className={paragraphClassName}>We may share information with:</p>
            <ul className={listClassName}>
              <li>Payment service providers</li>
              <li>Delivery and logistics partners</li>
              <li>Service providers that help operate our application</li>
              <li>Government authorities when required by law</li>
            </ul>
          </div>

          <div>
            <h2 className={sectionClassName}>Data Security</h2>
            <p className={paragraphClassName}>
              We implement reasonable security measures to protect your
              information from unauthorized access, disclosure, or misuse.
              However, no method of electronic transmission or storage is
              completely secure.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Data Retention</h2>
            <p className={paragraphClassName}>
              We retain your information only as long as necessary to provide
              our services, comply with legal obligations, resolve disputes,
              and enforce agreements.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Children&apos;s Privacy</h2>
            <p className={paragraphClassName}>
              Our application is not directed to children under 13 years of
              age. We do not knowingly collect personal information from
              children.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Your Rights</h2>
            <p className={paragraphClassName}>
              Depending on your location, you may have the right to:
            </p>
            <ul className={listClassName}>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          <div>
            <h2 className={sectionClassName}>Third-Party Services</h2>
            <p className={paragraphClassName}>
              The application may use third-party services such as:
            </p>
            <ul className={listClassName}>
              <li>Firebase</li>
              <li>Payment providers</li>
              <li>Analytics services</li>
            </ul>
            <p className={paragraphClassName}>
              These services may collect information according to their own
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>
              Changes to This Privacy Policy
            </h2>
            <p className={paragraphClassName}>
              We may update this Privacy Policy from time to time. Any changes
              will be posted within the application and on our website.
            </p>
          </div>

          <div>
            <h2 className={sectionClassName}>Contact Us</h2>
            <p className={paragraphClassName}>
              If you have any questions regarding this Privacy Policy, please
              contact us:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-8 text-slate-600">
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@myzoapp.com"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  support@myzoapp.com
                </a>
              </li>
              <li>
                <strong>Company:</strong> Anil Sweets Corner
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
