// ServicesSection.js
export default function ServicesSection({ id }) {
  return (
    <section id={id || "services"} className="bg-[var(--navy)] py-24">
      <div className="wrap">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--acc-pale)] text-[var(--acc)] font-bold text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--acc)] animate-pulse"></span>What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-3">
            <span className="text-[#fff]">Cutting-Edge</span> <span className="text-[var(--acc)]">App Development</span> <span className="text-[#fff]">Services</span>
          </h2>
          <p className="text-[#7bb7b7] text-base max-w-xl mx-auto">End-to-end services combining strategy, design and engineering to ship apps users love.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard title="iOS App Development" desc="Native Swift & SwiftUI apps built for performance, elegance and App Store success." icon="📱" />
          <ServiceCard title="Android App Development" desc="Kotlin-powered Android apps with seamless UX across all devices and screen sizes." icon="🤖" />
          <ServiceCard title="Cross-Platform Apps" desc="React Native & Flutter apps delivering native-quality experiences on both platforms." icon="🔗" />
          <ServiceCard title="UI/UX Design" desc="Pixel-perfect designs with intuitive flows that keep users engaged and returning." icon="🎨" />
          <ServiceCard title="App Maintenance & Support" desc="Ongoing updates, performance monitoring and dedicated support post-launch." icon="🛠️" />
          <ServiceCard title="App Store Optimization" desc="ASO strategies to maximize visibility, installs and organic growth on app stores." icon="🚀" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon }) {
  // Choose relevant SVG icon based on title
  let svgIcon = null;
  if (title.includes('iOS')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="3" width="22" height="30" rx="4" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <circle cx="18" cy="29" r="1.5" fill="#2de0a7"/>
      </svg>
    );
  } else if (title.includes('Android')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="8" width="22" height="20" rx="4" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <circle cx="13" cy="13" r="1" fill="#2de0a7"/>
        <circle cx="23" cy="13" r="1" fill="#2de0a7"/>
        <rect x="15" y="25" width="6" height="2" rx="1" fill="#2de0a7"/>
      </svg>
    );
  } else if (title.includes('Cross-Platform')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="15" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <path d="M18 6v24M6 18h24" stroke="#2de0a7" strokeWidth="2"/>
      </svg>
    );
  } else if (title.includes('UI/UX')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="24" height="16" rx="4" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <circle cx="12" cy="18" r="2" fill="#2de0a7"/>
        <circle cx="24" cy="18" r="2" fill="#2de0a7"/>
      </svg>
    );
  } else if (title.includes('Maintenance')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="15" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <path d="M18 11v7l5 5" stroke="#2de0a7" strokeWidth="2"/>
      </svg>
    );
  } else if (title.includes('App Store')) {
    svgIcon = (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="20" height="20" rx="5" stroke="#2de0a7" strokeWidth="2" fill="#123c3d"/>
        <polygon points="18,13 24,23 12,23" fill="#2de0a7"/>
      </svg>
    );
  }
  return (
    <div className="bg-[#123c3d] rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-transparent hover:border-[#2de0a7] transition-all">
      <div className="text-3xl mb-4 flex items-center justify-center">
        {svgIcon}
      </div>
      <div className="text-lg font-bold text-white mb-2">{title}</div>
      <div className="text-[#7bb7b7] text-sm">{desc}</div>
    </div>
  );
}
