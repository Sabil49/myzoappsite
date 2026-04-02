// Navbar.js
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[var(--navy)] border-b border-[var(--acc)] shadow-sm">
      <div className="wrap flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="myzoapp logo" className="h-8 w-auto" />
          <span className="text-[var(--acc)] font-extrabold text-lg tracking-tight">myzoapp</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#howwework" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">How We Work</a>
          <a href="#services" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">Services</a>
          <a href="#portfolio" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">Portfolio</a>
          <a href="#process" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">Process</a>
          <a href="#reviews" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">Reviews</a>
          <a href="#pricing" className="text-[var(--muted)] font-medium hover:text-[var(--acc)] transition">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[var(--muted)] text-sm font-medium hidden md:inline">+91-7011563185</span>
          <a href="https://t.co/ymdodcivvo" target="_blank" rel="noopener noreferrer" className="bg-[var(--acc)] hover:bg-[var(--acc-dark)] text-white font-bold px-5 py-2 rounded-lg shadow transition">Book a Call</a>
          {/* <a href="#pricing" className="bg-[#2de0a7] hover:bg-[#1cb5e0] text-white font-bold px-5 py-2 rounded-lg shadow transition">Get a Quote</a> */}
        </div>
      </div>
    </nav>
  );
}
