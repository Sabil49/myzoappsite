// StatsSection.js
export default function StatsSection() {
  return (
    <section className="bg-[var(--navy)] py-16">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCell value="3+" label="Apps Shipped" />
          <StatCell value="50+" label="Happy Clients" />
          <StatCell value="4.9/5" label="Client Rating" />
        </div>
      </div>
    </section>
  );
}

function StatCell({ value, label }) {
  return (
    <div className="bg-[var(--navy)] rounded-2xl shadow p-10">
      <div className="text-4xl md:text-5xl font-extrabold text-[var(--acc)] mb-2">{value}</div>
      <div className="text-[var(--muted)] text-lg font-semibold">{label}</div>
    </div>
  );
}
