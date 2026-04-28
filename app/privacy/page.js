export const metadata = {
  title: 'Privacy Policy | myzoapp',
  description: 'Privacy Policy for the MyzoPurse mobile application by myzoapp.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
          Privacy policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          This Privacy Policy applies to the MyzoPurse mobile application developed by myzoapp.
        </p>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Information We Collect</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              MyzoPurse does not collect personal data directly from users. However, basic non-personal information such as device type, usage data, or analytics may be collected to improve app performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How We Use Information</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We use this information to:
            </p>
            <ul className="mt-4 space-y-2 pl-6 text-base leading-8 text-slate-600 list-disc">
              <li>Improve app functionality and user experience</li>
              <li>Monitor performance and fix issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Third-Party Services</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The app may use trusted third-party services (such as analytics or backend services) that may collect limited data in accordance with their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Data Security</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We take reasonable measures to protect user data and ensure it is handled securely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">User Rights</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Users can choose not to provide any personal information. If you have concerns, you may contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Changes to This Policy</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p className="mt-3 text-base font-medium text-slate-900">md.sabeel10@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  )
}
