// VideoTestimonialSection.js
export default function VideoTestimonialSection({ id }) {
  return (
    <section id={id || "testimonials"} className="bg-[var(--lt-bg)] py-12">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--acc-pale)] text-[var(--acc-dark)] font-bold text-xs mb-4 border border-[var(--acc-mid)]">
            ● VIDEO TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)] mb-4">
            What Our <span className="text-[var(--acc)]">Clients</span> Say
          </h2>
          <p className="text-[var(--ink-2)] text-lg mb-8">Watch real clients share their experience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--acc)] bg-black flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Coming Soon</span>
          </div>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--acc)] bg-black flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Coming Soon</span>
          </div>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--acc)] bg-black flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}