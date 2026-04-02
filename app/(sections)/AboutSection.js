// AboutSection.js
import HowWeWorkVisual from './HowWeWorkVisual';

export default function AboutSection({ id }) {
  return (
    <section id={id || "about"} className="bg-[var(--lt-bg)] py-12">
      <div className="wrap flex flex-col md:flex-row items-center gap-12">
        {/* Left: Process SVG/image */}
        <div className="flex-1 flex justify-center">
          <HowWeWorkVisual />
        </div>
        {/* Right: Content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--acc-pale)] text-[var(--acc-dark)] font-bold text-xs mb-4 border border-[var(--acc-mid)]">
            ● WHY MYZOAPP
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)] mb-4">
            High-Caliber <span className="text-[var(--acc)]">App</span> Development at Your Fingertips
          </h2>
          <p className="text-[var(--ink-2)] text-lg mb-8">We're not just developers — we're product partners. From concept to launch, our seasoned team delivers apps that outperform expectations and drive measurable business growth.</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-[var(--acc-pale)] rounded-full flex items-center justify-center text-[var(--acc)] text-base font-bold">✓</span>
              <span className="text-[var(--ink)]">Agile sprints with weekly demos & full transparency</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-[var(--acc-pale)] rounded-full flex items-center justify-center text-[var(--acc)] text-base font-bold">✓</span>
              <span className="text-[var(--ink)]">Dedicated project manager on every engagement</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-[var(--acc-pale)] rounded-full flex items-center justify-center text-[var(--acc)] text-base font-bold">✓</span>
              <span className="text-[var(--ink)]">NDA-protected — full source code delivered to you</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-[var(--acc-pale)] rounded-full flex items-center justify-center text-[var(--acc)] text-base font-bold">✓</span>
              <span className="text-[var(--ink)]">Proven track record across 30+ industries globally</span>
            </li>
          </ul>
          <a href="#pricing" className="inline-block bg-[var(--acc)] hover:bg-[var(--acc-dark)] text-white font-bold px-8 py-4 rounded-xl shadow transition text-base">Get Started →</a>
        </div>
      </div>
    </section>
  );
}
