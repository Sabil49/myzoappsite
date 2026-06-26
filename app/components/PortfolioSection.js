const projects = [
  { name: "MyzoPurse", category: "Personal Finance", description: "A clear money management app for tracking balances, spending, and everyday financial activity.", tags: ["Wallet", "Analytics", "Mobile UI"], image: "/portfolio-myzopurse.png", url: "https://myzopurse.vercel.app/" },
  { name: "Substracker", category: "Subscription Management", description: "A focused tracker for recurring payments, renewal reminders, and monthly subscription costs.", tags: ["Reminders", "Insights", "Billing"], image: "/portfolio-substracker.png", url: "https://substrackerpremium.vercel.app/" },
  { name: "Anil Sweets", category: "Food Ordering", description: "A warm ordering experience for discovering sweets, building a cart, and placing an order.", tags: ["Catalogue", "Cart", "Ordering"], image: "/portfolio-anil-sweets.png", url: "https://anilsweets.vercel.app/" },
];

export default function PortfolioSection({ id }) {
  return (
    <section id={id || "portfolio"} className="bg-[var(--navy)] py-24">
      <div className="wrap">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--acc-mid)] bg-[var(--acc-pale)] px-4 py-2 text-xs font-bold text-[var(--acc-dark)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--acc)]" />PORTFOLIO</div>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--ink)] md:text-4xl">Apps built to feel <span className="text-[var(--acc)]">useful from day one</span></h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">Three portfolio demos exploring finance, subscription management, and local commerce through focused mobile experiences.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live demo`} className="group block overflow-hidden rounded-2xl border border-white/[.07] bg-[#123c3d] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[var(--acc)]/35 hover:shadow-2xl">
              <div className="relative flex h-56 items-end justify-center overflow-hidden bg-gradient-to-b from-[var(--acc-pale)] to-[#bceee2] px-6 pt-7">
                <div className="absolute left-5 top-4 rounded-full border border-[#0a443b]/10 bg-white/70 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#155c52] backdrop-blur">Portfolio demo</div>
                <img src={project.image} alt={`${project.name} app screenshot`} className="h-[196px] w-auto rounded-t-[24px] object-contain shadow-2xl transition duration-300 group-hover:-translate-y-1" />
              </div>
              <div className="p-7">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--acc)]">{project.category}</div>
                <h3 className="mb-3 text-xl font-bold text-white">{project.name}</h3>
                <p className="mb-5 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                <div className="flex items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1 text-[10px] font-semibold text-white/65">{tag}</span>)}</div><span className="shrink-0 text-xs font-bold text-[var(--acc)]">View live ↗</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
