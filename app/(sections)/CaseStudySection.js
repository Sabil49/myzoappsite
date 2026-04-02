// CaseStudySection.js
export default function CaseStudySection({ id }) {
  return (
    <section id={id || "casestudies"} className="bg-[var(--navy)] py-24">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--acc-pale)] text-[var(--acc-dark)] font-bold text-xs mb-4 border border-[var(--acc-mid)]">
            ● CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Recent <span className="text-[var(--acc)]">Projects</span>
          </h2>
          <p className="text-[var(--ink-2)] text-lg mb-8">See how we've helped businesses grow with custom apps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* JustSecurity antivirus */}
          <div className="bg-[#123c3d] rounded-2xl p-8 shadow-lg">
            <div className="w-full h-48 bg-[var(--acc-pale)] rounded-lg mb-6 flex items-center justify-center">
              {/* Antivirus Icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4L30 8v8c0 8-5.5 13.5-12 16C11.5 29.5 6 24 6 16V8l12-4z" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
                <path d="M18 12v8" stroke="#2de0a7" strokeWidth="2"/>
                <circle cx="18" cy="22" r="2" fill="#2de0a7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">JustSecurity Antivirus</h3>
            <p className="text-[var(--muted)] mb-4">Advanced mobile antivirus app providing real-time protection, malware scanning, and privacy tools for Android devices.</p>
            <div className="text-[var(--acc)] font-semibold">100K+ protected devices</div>
          </div>
          {/* Myzo handbags ecommerce app */}
          <div className="bg-[#123c3d] rounded-2xl p-8 shadow-lg">
            <div className="w-full h-48 bg-[var(--acc-pale)] rounded-lg mb-6 flex items-center justify-center">
              {/* Handbag Icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="14" width="20" height="12" rx="4" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
                <path d="M12 14V10a6 6 0 0112 0v4" stroke="#2de0a7" strokeWidth="2"/>
                <circle cx="18" cy="22" r="2" fill="#2de0a7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Myzo Handbags Ecommerce</h3>
            <p className="text-[var(--muted)] mb-4">A modern e-commerce platform for luxury handbags with seamless shopping, secure payments, and fast delivery.</p>
            <div className="text-[var(--acc)] font-semibold">+150% sales increase</div>
          </div>
          {/* Substracker subscription tracker */}
          <div className="bg-[#123c3d] rounded-2xl p-8 shadow-lg">
            <div className="w-full h-48 bg-[var(--acc-pale)] rounded-lg mb-6 flex items-center justify-center">
              {/* Subscription Tracker Icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="10" width="20" height="16" rx="4" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
                <rect x="12" y="16" width="12" height="2" fill="#2de0a7"/>
                <rect x="12" y="20" width="8" height="2" fill="#2de0a7"/>
                <circle cx="24" cy="21" r="2" fill="#2de0a7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Substracker Subscription Tracker</h3>
            <p className="text-[var(--muted)] mb-4">Track, manage, and optimize all your subscriptions in one place with reminders and analytics.</p>
            <div className="text-[var(--acc)] font-semibold">10K+ subscriptions managed</div>
          </div>
        </div>
      </div>
    </section>
  );
}