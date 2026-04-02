// HeroSection.js
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActive((prev) => (prev + 1) % 3);
    }
    if (isRightSwipe) {
      setActive((prev) => (prev - 1 + 3) % 3);
    }
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to get mathematically precise 3D coverflow transforms
  const getPhoneStyle = (i) => {
    const total = 3;
    const offset = ((i - active + total) % total);
    // Center
    if (offset === 0) {
      return {
        zIndex: 30,
        opacity: 1,
        pointerEvents: 'auto',
        filter: 'none',
        transform: 'translateX(-50%) translateZ(0px) rotateY(0deg) scale(1)',
        boxShadow: '0 12px 48px 0 rgba(45,224,167,0.25), 0 0 0 2px var(--acc)',
        left: '50%',
        top: 0,
      };
    }
    // Left
    if (offset === 1) {
      return {
        zIndex: 10,
        opacity: 0.55,
        pointerEvents: 'none',
        filter: 'blur(2px)',
        transform: 'translateX(-120%) translateZ(-120px) rotateY(-38deg) scale(0.92)',
        left: '50%',
        top: 0,
      };
    }
    // Right
    return {
      zIndex: 10,
      opacity: 0.55,
      pointerEvents: 'none',
      filter: 'blur(2px)',
      transform: 'translateX(20%) translateZ(-120px) rotateY(38deg) scale(0.92)',
      left: '50%',
      top: 0,
    };
  };

  return (
    <section id="hero" className="relative min-h-[400px] flex items-center justify-start bg-[var(--navy)] overflow-hidden">
      {/* Grid background removed as per request */}
      <div className="wrap relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-14 items-center pt-12 px-0 pb-20">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight mb-4 text-white">
            Your Idea,<br />
            <span className="text-[var(--acc)]">Beautifully</span><br />
            Shipped as an App
          </h1>
          <p className="text-lg text-[var(--muted)] mb-8 max-w-md">We design and develop high-performance iOS & Android apps that look stunning, scale effortlessly and drive real business growth.</p>
          <div className="flex gap-4 mb-8 flex-wrap">
            <a className="bg-[var(--acc)] hover:bg-[var(--acc-dark)] text-white font-bold px-7 py-4 rounded-xl shadow transition text-base" href="#pricing">Start Your App</a>
            <a className="border border-[var(--acc)] text-[var(--acc)] font-bold px-7 py-4 rounded-xl transition text-base hover:bg-[var(--acc-pale)]" href="#portfolio">See Our Work</a>
          </div>
          {/* <div className="flex items-center gap-5 mt-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[var(--acc)] flex items-center justify-center text-white font-bold border-2 border-white">J</div>
              <div className="w-8 h-8 rounded-full bg-[var(--acc-dark)] flex items-center justify-center text-white font-bold border-2 border-white">S</div>
              <div className="w-8 h-8 rounded-full bg-[var(--acc-light)] flex items-center justify-center text-white font-bold border-2 border-white">M</div>
              <div className="w-8 h-8 rounded-full bg-[var(--acc-alt)] flex items-center justify-center text-white font-bold border-2 border-white">A</div>
            </div>
            <div>
              <div className="text-[var(--acc)] font-bold text-base">★★★★★</div>
              <div className="text-[var(--muted)]"><strong>50+ clients</strong> trust us to build their apps</div>
            </div>
          </div> */}
        </div>
        {/* Right: Phone visual placeholder */}
        
        {/* VISUAL: 3D Phone Carousel */}
      <div className="relative py-12 flex items-center justify-center h-[560px] [perspective:1800px] overflow-visible">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_58%_50%,rgba(45,224,167,0.36)_0%,transparent_72%)] blur-[2px]"></div>
        <div
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
          id="cstage"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={
                `${ i === 0 ? 'bg-[#1a1c2a]' : 'bg-white'} absolute w-[232px] h-[472px] rounded-[44px] border border-white/15 overflow-hidden cursor-pointer [transform-style:preserve-3d] transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.18,1)] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_70px_130px_rgba(0,0,0,0.75),0_0_90px_rgba(45,224,167,0.22)]`
              }
              data-i={i}
              onClick={() => setActive(i)}
              style={{
                ...getPhoneStyle(i),
                transitionProperty: 'transform, opacity, box-shadow, filter',
              }}
            >
              {/* Phone content based on index */}
              {i === 0 && (
                <>
                  {/* <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[92px] h-[30px] bg-black rounded-[22px] flex items-center justify-center gap-[9px] z-20">
                    <div className="w-[38px] h-[7px] bg-gray-600 rounded-[4px]"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#222,#000)] border-[1.5px] border-gray-600"></div>
                  </div> */}
                  <img src="/ss1.jpg" alt="App Screenshot 1" className="absolute w-full h-[424px] object-contain z-10" />
                  {/* <div className="absolute inset-0 flex flex-col overflow-hidden">
                    <div className="w-full h-full bg-[linear-gradient(158deg,#0b1629_0%,#060d1c_100%)] p-[48px_17px_16px] flex flex-col gap-[11px]">
                      <div className="flex justify-between items-center flex-shrink-0">
                        <span className="text-[11px] font-semibold text-white/78 font-['DM_Sans']">9:41</span>
                        <div className="flex items-center gap-[5px]">
                          <svg width="15" height="10" fill="none" viewBox="0 0 15 10"><rect x="0" y="3" width="2.5" height="7" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="4" y="2" width="2.5" height="8" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="8" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="12" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.2)"/></svg>
                          <svg width="16" height="10" fill="none" viewBox="0 0 16 10"><rect x=".5" y=".5" width="12" height="9" rx="2" stroke="rgba(255,255,255,.45)"/><rect x="13.5" y="3" width="2" height="4" rx="1" fill="rgba(255,255,255,.4)"/><rect x="2" y="2" width="8" height="6" rx="1" fill="rgba(255,255,255,.78)"/></svg>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div><div className="text-[10px] text-white/35 font-['DM_Sans']">Good morning,</div><div className="text-[15px] font-bold text-white font-['Bricolage_Grotesque'] mt-[1px]">Alex Johnson</div></div>
                        <div className="w-[34px] h-[34px] rounded-full bg-[linear-gradient(135deg,#6366F1,#4F46E5)] flex items-center justify-center text-[12px] font-bold text-white font-['Bricolage_Grotesque'] flex-shrink-0">AJ</div>
                      </div>
                      <div className="rounded-[22px] p-[18px] flex-shrink-0 relative overflow-hidden bg-[linear-gradient(135deg,#4F46E5_0%,#7C3AED_55%,#9333EA_100%)] shadow-[0_14px_44px_rgba(79,70,229,0.45)]">
                        <div className="absolute -top-[35%] -right-[5%] w-[170px] h-[170px] rounded-full bg-white/7"></div>
                        <div className="text-[9px] text-white/52 uppercase tracking-[0.1em] font-['DM_Sans'] mb-[3px] relative z-10">Total Balance</div>
                        <div className="text-[26px] font-bold text-white font-['Bricolage_Grotesque'] leading-none relative z-10">$24,853.40</div>
                        <div className="flex justify-between items-center mt-[14px] relative z-10">
                          <span className="text-[10px] text-white/58 font-['DM_Sans']">Monthly change <em className="not-italic font-bold text-[#34D399]">+8.2%</em></span>
                          <span className="bg-white/14 rounded-[8px] px-[10px] py-[4px] text-[9px] text-white/8 font-['DM_Sans']">Visa ••4891</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-[9px] flex-shrink-0">
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="text-[8px] text-white/36 uppercase tracking-[0.07em] font-['DM_Sans'] mb-[3px]">Income</div>
                          <div className="text-[15px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">$6,240</div>
                          <div className="text-[9px] font-['DM_Sans'] mt-[2px] text-[#34D399]">↑ +12%</div>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="text-[8px] text-white/36 uppercase tracking-[0.07em] font-['DM_Sans'] mb-[3px]">Expenses</div>
                          <div className="text-[15px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">$1,890</div>
                          <div className="text-[9px] font-['DM_Sans'] mt-[2px] text-[#F87171]">↓ −3%</div>
                        </div>
                      </div>
                      <div className="bg-white/4 border border-white/7 rounded-[15px] p-[12px] flex-1 min-h-0">
                        <div className="text-[9px] text-white/36 font-['DM_Sans'] mb-[8px]">Spending — Last 7 days</div>
                        <svg className="w-full h-[44px]" viewBox="0 0 190 44" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="spg" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366F1" stopOpacity=".42"/>
                              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          <path d="M0,40 C16,40 18,30 36,27 C54,24 56,12 72,10 C88,8 90,22 106,19 C122,16 124,6 140,4 C156,2 158,16 174,13 C180,11 184,18 190,15" stroke="#6366F1" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                          <path d="M0,40 C16,40 18,30 36,27 C54,24 56,12 72,10 C88,8 90,22 106,19 C122,16 124,6 140,4 C156,2 158,16 174,13 C180,11 184,18 190,15 L190,44 L0,44Z" fill="url(#spg)"/>
                          <circle cx="190" cy="15" r="3.5" fill="#6366F1"/>
                          <circle cx="190" cy="15" r="7" fill="rgba(99,102,241,.22)"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[8px] flex-shrink-0">
                        <div className="flex items-center gap-[10px]">
                          <div className="w-[31px] h-[31px] rounded-[11px] flex items-center justify-center flex-shrink-0 bg-[rgba(251,146,60,0.12)]">
                            <svg stroke="#FB923C" viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-[2]">
                              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-semibold text-white/8 font-['DM_Sans']">Amazon Purchase</div>
                            <div className="text-[8px] text-white/3 font-['DM_Sans']">Today, 2:30 PM</div>
                          </div>
                          <div className="text-[11px] font-bold font-['Bricolage_Grotesque'] text-[#F87171]">−$129.00</div>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <div className="w-[31px] h-[31px] rounded-[11px] flex items-center justify-center flex-shrink-0 bg-[rgba(52,211,153,0.12)]">
                            <svg stroke="#34D399" viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-[2]">
                              <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 5 5 12"/>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] font-semibold text-white/8 font-['DM_Sans']">Salary Deposit</div>
                            <div className="text-[8px] text-white/3 font-['DM_Sans']">Yesterday, 9:00 AM</div>
                          </div>
                          <div className="text-[11px] font-bold font-['Bricolage_Grotesque'] text-[#34D399]">+$4,200</div>
                        </div>
                      </div>
                      <div className="flex justify-around items-center bg-white/4 border border-white/7 rounded-[19px] p-[12px_8px_10px] flex-shrink-0">
                        <div className="flex flex-col items-center gap-[3px]">
                          <svg stroke="#6366F1" viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-[2]">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="w-[4px] h-[4px] bg-[#6366F1] rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center gap-[3px]">
                          <svg stroke="rgba(255,255,255,0.28)" viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-[2]">
                            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col items-center gap-[3px]">
                          <svg stroke="rgba(255,255,255,0.28)" viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-[2]">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                          </svg>
                        </div>
                        <div className="flex flex-col items-center gap-[3px]">
                          <svg stroke="rgba(255,255,255,0.28)" viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-[2]">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round"/><circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </>
              )}
              {i === 1 && (
                <>
                  {/* <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[92px] h-[30px] bg-black rounded-[22px] flex items-center justify-center gap-[9px] z-20">
                    <div className="w-[38px] h-[7px] bg-gray-600 rounded-[4px]"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#222,#000)] border-[1.5px] border-gray-600"></div>
                  </div> */}
                  <img src="/ss2.jpg" alt="App Screenshot 2" className="absolute w-full h-[424px] object-contain z-10" />                  {/* <div className="absolute inset-0 flex flex-col overflow-hidden">
                    <div className="w-full h-full bg-[linear-gradient(158deg,#061c18_0%,#040e0b_100%)] p-[48px_17px_16px] flex flex-col gap-[10px]">
                      <div className="flex justify-between items-center flex-shrink-0">
                        <span className="text-[11px] font-semibold text-white/78 font-['DM_Sans']">9:41</span>
                        <div className="flex items-center gap-[5px]">
                          <svg width="15" height="10" fill="none" viewBox="0 0 15 10"><rect x="0" y="3" width="2.5" height="7" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="4" y="2" width="2.5" height="8" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="8" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="12" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.2)"/></svg>
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-shrink-0">
                        <div><div className="text-[16px] font-bold text-white font-['Bricolage_Grotesque']">FitTracker</div><div className="text-[9px] text-white/32 font-['DM_Sans'] mt-[1px]">Today's overview</div></div>
                        <div className="bg-[rgba(52,211,153,0.12)] border border-[rgba(52,211,153,0.28)] rounded-[8px] p-[4px_11px] text-[9px] text-[#34D399] font-bold font-['DM_Sans']">Active</div>
                      </div>
                      <div className="flex justify-center flex-shrink-0 p-[6px_0_0]">
                        <div className="relative w-[96px] h-[96px]">
                          <svg viewBox="0 0 96 96" className="w-full h-full">
                            <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="8"/>
                            <circle cx="48" cy="48" r="40" fill="none" stroke="url(#rgrad)" strokeWidth="8" strokeDasharray="178 251" strokeLinecap="round"/>
                            <defs><linearGradient id="rgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient></defs>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-[20px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">82%</div>
                            <div className="text-[8px] text-white/38 font-['DM_Sans']">Daily Goal</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-[8px] flex-shrink-0">
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="w-[26px] h-[26px] rounded-[8px] flex items-center justify-center mb-[7px] bg-[rgba(251,146,60,0.12)]">
                            <svg stroke="#FB923C" viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-[2.2]">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-[14px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">648</div>
                          <div className="text-[8px] text-white/33 font-['DM_Sans'] mt-[2px]">Calories</div>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="w-[26px] h-[26px] rounded-[8px] flex items-center justify-center mb-[7px] bg-[rgba(52,211,153,0.12)]">
                            <svg stroke="#34D399" viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-[2.2]">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-[14px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">8,240</div>
                          <div className="text-[8px] text-white/33 font-['DM_Sans'] mt-[2px]">Steps</div>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="w-[26px] h-[26px] rounded-[8px] flex items-center justify-center mb-[7px] bg-[rgba(244,63,94,0.1)]">
                            <svg stroke="#F43F5E" viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-[2.2]">
                              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-[14px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">72 BPM</div>
                          <div className="text-[8px] text-white/33 font-['DM_Sans'] mt-[2px]">Heart Rate</div>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-[15px] p-[12px]">
                          <div className="w-[26px] h-[26px] rounded-[8px] flex items-center justify-center mb-[7px] bg-[rgba(99,102,241,0.1)]">
                            <svg stroke="#818CF8" viewBox="0 0 24 24" className="w-[12px] h-[12px] fill-none stroke-[2.2]">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="text-[14px] font-bold text-white font-['Bricolage_Grotesque'] leading-none">7h 20m</div>
                          <div className="text-[8px] text-white/33 font-['DM_Sans'] mt-[2px]">Sleep</div>
                        </div>
                      </div>
                      <div className="bg-white/4 border border-white/7 rounded-[15px] p-[12px] flex-1">
                        <div className="text-[9px] text-white/36 font-['DM_Sans'] mb-[9px]">Weekly Activity</div>
                        <div className="flex items-end gap-[5px] h-[46px]">
                          <div className="flex-1 rounded-t-[4px] h-[50%] bg-[rgba(52,211,153,0.28)]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[72%] bg-[rgba(52,211,153,0.4)]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[44%] bg-[rgba(52,211,153,0.28)]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[90%] bg-[#34D399]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[62%] bg-[rgba(52,211,153,0.38)]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[38%] bg-[rgba(52,211,153,0.25)]"></div>
                          <div className="flex-1 rounded-t-[4px] h-[77%] bg-[rgba(52,211,153,0.45)]"></div>
                        </div>
                      </div>
                      <div className="bg-[rgba(52,211,153,0.07)] border border-[rgba(52,211,153,0.18)] rounded-[13px] p-[11px] flex items-center gap-[10px] flex-shrink-0">
                        <div className="w-[7px] h-[7px] bg-[#34D399] rounded-full flex-shrink-0 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]"></div>
                        <div>
                          <div className="text-[10px] font-bold text-[#34D399] font-['DM_Sans']">Morning Run Complete</div>
                          <div className="text-[8px] text-[rgba(52,211,153,0.52)] font-['DM_Sans']">5.4 km · 32 min · 420 kcal</div>
                        </div>
                        <div className="text-[9px] text-white/38 font-['DM_Sans'] ml-auto">07:14</div>
                      </div>
                    </div>
                  </div> */}
                </>
              )}
              {i === 2 && (
                <>
                  {/* <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[92px] h-[30px] bg-black rounded-[22px] flex items-center justify-center gap-[9px] z-20">
                    <div className="w-[38px] h-[7px] bg-gray-600 rounded-[4px]"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#222,#000)] border-[1.5px] border-gray-600"></div>
                  </div> */}
                  <img src="/ss3.jpg" alt="App Screenshot 3" className="absolute w-full h-[424px] object-contain z-10" />                  {/* <div className="absolute inset-0 flex flex-col overflow-hidden">
                    <div className="w-full h-full bg-[linear-gradient(158deg,#180c2c_0%,#0d0618_100%)] p-[48px_17px_16px] flex flex-col gap-[10px]">
                      <div className="flex justify-between items-center flex-shrink-0">
                        <span className="text-[11px] font-semibold text-white/78 font-['DM_Sans']">9:41</span>
                        <div className="flex items-center gap-[5px]">
                          <svg width="15" height="10" fill="none" viewBox="0 0 15 10"><rect x="0" y="3" width="2.5" height="7" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="4" y="2" width="2.5" height="8" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="8" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.65)"/><rect x="12" y="0" width="2.5" height="10" rx=".8" fill="rgba(255,255,255,.2)"/></svg>
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-shrink-0">
                        <div className="text-[16px] font-bold text-white font-['Bricolage_Grotesque']">ShopZen</div>
                        <div className="w-[34px] h-[34px] bg-[rgba(147,51,234,0.15)] rounded-[11px] flex items-center justify-center relative">
                          <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-[#9333EA] fill-none stroke-[2]">
                            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="absolute -top-[5px] -right-[5px] w-[16px] h-[16px] bg-[#9333EA] rounded-full text-[7px] font-bold text-white font-['Bricolage_Grotesque'] flex items-center justify-center border-[2px] border-[#180c2c]">3</div>
                        </div>
                      </div>
                      <div className="bg-[linear-gradient(135deg,rgba(147,51,234,0.14),rgba(99,102,241,0.08))] border border-[rgba(147,51,234,0.22)] rounded-[20px] p-[15px] flex gap-[13px] items-center flex-shrink-0">
                        <div className="w-[60px] h-[60px] bg-[linear-gradient(135deg,#9333EA,#6366F1)] rounded-[16px] flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="w-[28px] h-[28px] stroke-white fill-none stroke-[1.5]">
                            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-[8px] text-[rgba(192,132,252,0.8)] font-bold uppercase tracking-[0.08em] font-['DM_Sans'] mb-[3px]">Electronics</div>
                          <div className="text-[13px] font-bold text-white font-['Bricolage_Grotesque'] mb-[4px]">Pro Display XDR</div>
                          <div className="flex items-center gap-[5px]">
                            <span className="text-[16px] font-bold text-[#C084FC] font-['Bricolage_Grotesque']">$649</span>
                            <span className="text-[10px] text-white/3 line-through font-['DM_Sans']">$899</span>
                          </div>
                        </div>
                        <div className="bg-[#9333EA] rounded-[11px] p-[8px_13px] text-[10px] font-bold text-white font-['Bricolage_Grotesque'] flex-shrink-0 whitespace-nowrap">Add</div>
                      </div>
                      <div className="flex gap-[7px] flex-shrink-0 overflow-hidden">
                        <div className="bg-[rgba(147,51,234,0.22)] border border-[rgba(147,51,234,0.45)] rounded-[10px] p-[6px_12px] text-[10px] font-semibold text-[#C084FC] font-['DM_Sans'] whitespace-nowrap">All</div>
                        <div className="bg-white/5 border border-white/8 rounded-[10px] p-[6px_12px] text-[10px] font-semibold text-white/48 font-['DM_Sans'] whitespace-nowrap">Tech</div>
                        <div className="bg-white/5 border border-white/8 rounded-[10px] p-[6px_12px] text-[10px] font-semibold text-white/48 font-['DM_Sans'] whitespace-nowrap">Fashion</div>
                        <div className="bg-white/5 border border-white/8 rounded-[10px] p-[6px_12px] text-[10px] font-semibold text-white/48 font-['DM_Sans'] whitespace-nowrap">Home</div>
                      </div>
                      <div className="grid grid-cols-2 gap-[8px] flex-1 min-h-0">
                        <div className="bg-white/4 border border-white/7 rounded-[15px] p-[11px] flex flex-col">
                          <div className="h-[54px] rounded-[10px] flex items-center justify-center mb-[8px] bg-[rgba(147,51,234,0.1)]">
                            <svg stroke="#9333EA" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-[1.8]">
                              <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5"/>
                            </svg>
                          </div>
                          <div className="text-[9px] font-semibold text-white/68 font-['DM_Sans'] mb-[3px]">iPhone 15 Pro</div>
                          <div className="text-[12px] font-bold text-[#C084FC] font-['Bricolage_Grotesque']">$999</div>
                        </div>
                        <div className="bg-white/4 border border-white/7 rounded-[15px] p-[11px] flex flex-col">
                          <div className="h-[54px] rounded-[10px] flex items-center justify-center mb-[8px] bg-[rgba(99,102,241,0.1)]">
                            <svg stroke="#6366F1" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-[1.8]">
                              <path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
                            </svg>
                          </div>
                          <div className="text-[9px] font-semibold text-white/68 font-['DM_Sans'] mb-[3px]">AirPods Pro</div>
                          <div className="text-[12px] font-bold text-[#C084FC] font-['Bricolage_Grotesque']">$249</div>
                        </div>
                        <div className="bg-white/4 border border-white/7 rounded-[15px] p-[11px] flex flex-col">
                          <div className="h-[54px] rounded-[10px] flex items-center justify-center mb-[8px] bg-[rgba(52,211,153,0.08)]">
                            <svg stroke="#34D399" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-[1.8]">
                              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                            </svg>
                          </div>
                          <div className="text-[9px] font-semibold text-white/68 font-['DM_Sans'] mb-[3px]">Smart Watch</div>
                          <div className="text-[12px] font-bold text-[#C084FC] font-['Bricolage_Grotesque']">$399</div>
                        </div>
                        <div className="bg-white/4 border border-white/7 rounded-[15px] p-[11px] flex flex-col">
                          <div className="h-[54px] rounded-[10px] flex items-center justify-center mb-[8px] bg-[rgba(251,191,36,0.07)]">
                            <svg stroke="#FBBF24" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-none stroke-[1.8]">
                              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                            </svg>
                          </div>
                          <div className="text-[9px] font-semibold text-white/68 font-['DM_Sans'] mb-[3px]">MacBook Air</div>
                          <div className="text-[12px] font-bold text-[#C084FC] font-['Bricolage_Grotesque']">$1,099</div>
                        </div>
                      </div>
                      <div className="bg-[linear-gradient(135deg,#7C3AED,#9333EA)] rounded-[16px] p-[13px_17px] flex items-center justify-between flex-shrink-0">
                        <div>
                          <div className="text-[9px] text-white/58 font-['DM_Sans']">Cart Total (3 items)</div>
                          <div className="text-[15px] font-bold text-white font-['Bricolage_Grotesque']">$1,897.00</div>
                        </div>
                        <div className="bg-white/16 rounded-[10px] p-[7px_14px] text-[10px] font-bold text-white font-['Bricolage_Grotesque']">Checkout →</div>
                      </div>
                    </div>
                  </div> */}
                </>
              )}
            </div>
          ))}
        </div>
        {/* /cstage */}

        {/* Floating notifications */}
        {/* <div className="absolute z-20 bg-[rgba(8,15,38,0.86)] backdrop-blur-[22px] saturate-[1.6] border border-white/10 rounded-[17px] p-[12px_16px] flex items-center gap-[12px] shadow-[0_20px_56px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)] whitespace-nowrap left-[-12px] top-[19%] [animation:fn1_4.2s_ease-in-out_infinite]">
          {/* <div className="w-[36px] h-[36px] rounded-[12px] flex items-center justify-center flex-shrink-0 bg-[rgba(52,211,153,0.14)]">
            <svg stroke="#34D399" viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-none stroke-[2]">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> 
           <div>
            <div className="text-[11px] font-bold text-white font-['Bricolage_Grotesque']">Payment Received</div>
            <div className="text-[10px] text-white/4 font-['DM_Sans'] mt-[1px]">$4,200 via Stripe</div>
          </div> 
        </div>*/}
        {/* <div className="absolute z-20 bg-[rgba(8,15,38,0.86)] backdrop-blur-[22px] saturate-[1.6] border border-white/10 rounded-[17px] p-[12px_16px] flex items-center gap-[12px] shadow-[0_20px_56px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)] whitespace-nowrap right-[-12px] bottom-[24%] [animation:fn2_5.1s_ease-in-out_infinite]">
          <div className="w-[36px] h-[36px] rounded-[12px] flex items-center justify-center flex-shrink-0 bg-[rgba(99,102,241,0.18)]">
            <svg stroke="#818CF8" viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-none stroke-[2]">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-bold text-white font-['Bricolage_Grotesque]">+2,847 Installs</div>
            <div className="text-[10px] text-white/4 font-['DM_Sans'] mt-[1px]">This week ↑ 34%</div>
          </div>
        </div> */}

        {/* Dots */}
        {/* <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 flex gap-[7px] z-30">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`cursor-pointer transition-all duration-300 ease ${i === active ? 'w-[22px] h-[6px] rounded-[3px] bg-[#6366F1]' : 'w-[6px] h-[6px] rounded-full bg-white/22'}`}
              onClick={() => setActive(i)}
            ></div>
          ))}
        </div> */}

        {/* Tech badges */}
        {/* <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 flex gap-[8px] z-25">
          <div className="bg-[rgba(8,15,38,0.88)] backdrop-blur-[16px] border border-white/10 rounded-[12px] p-[7px_14px] flex items-center gap-[8px] shadow-[0_4px_20px_rgba(8,15,38,0.12)] transition-[border-color_0.22s,transform_0.22s] hover:border-[rgba(99,102,241,0.42)] hover:-translate-y-[2px]">
            <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]">
              <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" fill="#54C5F8"/><path d="M6 15.7l8.314 8.3h7.372L13.97 15.7H6z" fill="#01579B" opacity=".5"/><path d="M6 15.7l4.157 4.15L13.97 24h3.716L6 15.7z" fill="#29B6F6"/>
            </svg>
            <span className="text-[11px] font-semibold text-white/62 font-['DM_Sans']">Flutter</span>
          </div>
          <div className="bg-[rgba(8,15,38,0.88)] backdrop-blur-[16px] border border-white/10 rounded-[12px] p-[7px_14px] flex items-center gap-[8px] shadow-[0_4px_20px_rgba(8,15,38,0.12)] transition-[border-color_0.22s,transform_0.22s] hover:border-[rgba(99,102,241,0.42)] hover:-translate-y-[2px]">
            <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]">
              <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.3"/><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 12 12)"/>
            </svg>
            <span className="text-[11px] font-semibold text-white/62 font-['DM_Sans']">React Native</span>
          </div>
          <div className="bg-[rgba(8,15,38,0.88)] backdrop-blur-[16px] border border-white/10 rounded-[12px] p-[7px_14px] flex items-center gap-[8px] shadow-[0_4px_20px_rgba(8,15,38,0.12)] transition-[border-color_0.22s,transform_0.22s] hover:border-[rgba(99,102,241,0.42)] hover:-translate-y-[2px]">
            <svg viewBox="0 0 24 24" stroke="rgba(255,255,255,.5)" fill="none" className="w-[14px] h-[14px]">
              <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M12 8v8" strokeLinecap="round"/>
            </svg>
            <span className="text-[11px] font-semibold text-white/62 font-['DM_Sans']">Swift / Kotlin</span>
          </div>
        </div> */}

      </div>
      </div>
    </section>
  );
}
