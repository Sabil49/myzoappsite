// PricingSection.js
export default function PricingSection({ id }) {
  return (
    <section id={id || "pricing"} className="bg-[var(--navy)] py-24">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--acc-pale)] text-[var(--acc)] font-bold text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--acc)] animate-pulse"></span>Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">
            Simple, Honest <span className="text-[var(--acc)]">Plans</span>
          </h2>
          <p className="text-[var(--ink-2)] text-base max-w-xl mx-auto">No hidden fees. No surprises. Book a call to get a precise quote.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard plan="Basic" price="$2,500" features={["Simple iOS/Android App", "Basic UI/UX Design", "1 Month Support", "Core Features"]} />
          <PricingCard plan="Standard" price="$7,500" features={["Full-Featured App", "Custom UI/UX", "3 Months Support", "API Integration", "Analytics"]} popular />
          <PricingCard plan="Premium" price="$15,000" features={["Advanced App", "Premium Design", "6 Months Support", "Custom Features", "Priority Support"]} />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, price, features, popular }) {
  return (
    <div className={`bg-[var(--navy)] rounded-2xl shadow-lg p-8 border-2 ${popular ? 'border-[var(--acc)] scale-105' : 'border-[var(--acc)]'} transition-all hover:shadow-2xl`}>
      {popular && <div className="bg-[var(--acc)] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>}
      <div className="text-2xl font-extrabold text-white mb-2">{plan}</div>
      <div className="text-3xl font-bold text-[var(--acc)] mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[var(--acc)] rounded-full flex items-center justify-center text-white text-xs">✓</div>
            <span className="text-[var(--muted)]">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-bold transition-all ${popular ? 'bg-[var(--acc)] text-white hover:bg-[var(--acc-dark)]' : 'bg-[var(--acc-pale)] text-[var(--acc)] hover:bg-[var(--acc)] hover:text-white'}`}>
        Get Started
      </button>
    </div>
  );
}
