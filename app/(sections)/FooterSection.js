// FooterSection.js
export default function FooterSection() {
  return (
    <footer className="bg-[var(--navy)] text-white py-12">
      <div className="wrap grid md:grid-cols-4 gap-10 items-start !mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.png" alt="myzoapp logo" className="w-10 h-10" />
            <span className="font-extrabold text-xl text-[var(--acc)]">myzoapp</span>
          </div>
          <p className="text-[var(--muted)] text-sm mb-4">Building world-class apps for startups and enterprises. Let's create something extraordinary together.</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-[var(--acc)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2de0a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.98 4.07 3.01A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--acc)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2de0a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="17"/><line x1="12" y1="14" x2="12" y2="17"/><line x1="8" y1="11" x2="8" y2="17"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--acc)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2de0a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"/><path d="M12 12v4"/><path d="M10 16h4"/></svg></a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--acc)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2de0a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg></a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">Services</div>
          <ul className="space-y-1 text-[#7bb7b7] text-sm">
            <li><a href="#">iOS Development</a></li>
            <li><a href="#">Android Development</a></li>
            <li><a href="#">React Native</a></li>
            <li><a href="#">Flutter Apps</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Company</div>
          <ul className="space-y-1 text-[#7bb7b7] text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Legal</div>
          <ul className="space-y-1 text-[#7bb7b7] text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">NDA Template</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-col md:flex-row justify-between items-center mt-10 pt-6 text-[#7bb7b7] text-sm">
        <div>© 2026 myzoapp. All rights reserved.</div>
        <div>+91-7011563185</div>
      </div>
    </footer>
  );
}
