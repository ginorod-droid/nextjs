"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAVY   = "#202A54";
const GREEN  = "#2C9143";
const BLUE   = "#1179EC";
const YELLOW = "#F6D200";
const K = "#0a0a0a";
const W = "#ffffff";
const P = "'Poppins', sans-serif";
const I = "'Inter', sans-serif";

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.cssText += `opacity:0;transform:translateY(24px);transition:opacity .6s ease ${delay}s,transform .6s ease ${delay}s`;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "none"; ob.disconnect(); } }, { threshold: 0.08 });
    ob.observe(el); return () => ob.disconnect();
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ fontFamily: I, background: W, color: K, overflowX: "hidden" }}>
      <style>{`
        .hp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
        .hp-listings { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .hp-triple { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
        .hp-hardmoney { display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center; margin-top: 8px; }
        .hp-about { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-nav-links { display: flex; gap: 36px; align-items: center; }
        .hp-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .hp-mobile-menu { display: none; }
        @media (max-width: 768px) {
          .hp-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-listings { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hp-triple { grid-template-columns: 1fr !important; }
          .hp-hardmoney { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-about { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-contact { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-nav-links { display: none; }
          .hp-hamburger { display: block; }
          .hp-mobile-menu { display: flex; flex-direction: column; gap: 0; position: absolute; top: 100%; left: 0; right: 0; background: #202A54; border-top: 1px solid rgba(255,255,255,0.1); padding: 8px 0; z-index: 99; }
          .hp-mobile-menu a { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); text-decoration: none; padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .hp-mobile-menu a:last-child { border-bottom: none; color: #F6D200; }
        }
      `}</style>

      {/* ── 4-COLOR BRAND STRIPE ── */}
      <div style={{ height: 5, display: "flex", position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 5, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(32,42,84,0.97)" : NAVY,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all .3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: P, fontWeight: 800, fontSize: 17, letterSpacing: "0.06em", textTransform: "uppercase", color: W }}>
              ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
            </span>
          </a>
          <div className="hp-nav-links">
            {[["#opportunities","Listings"],["#services","Services"],["#about","About"]].map(([h,l]) => (
              <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
            ))}
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
              style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "12px 24px", textDecoration: "none" }}>
              Book a Call
            </a>
          </div>
          <button className="hp-hamburger" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
              {mobileMenu ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
            </svg>
          </button>
        </div>
        {mobileMenu && (
          <div className="hp-mobile-menu">
            <a href="#opportunities" onClick={() => setMobileMenu(false)}>Listings</a>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            <a href="/pueblo-parcel" onClick={() => setMobileMenu(false)}>Pueblo Parcel</a>
            <a href="/letsblaze" onClick={() => setMobileMenu(false)}>Let&apos;s Blaze</a>
            <a href="/bridge-loans" onClick={() => setMobileMenu(false)}>Bridge Loans</a>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener">Book a Call</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: NAVY, overflow: "hidden", paddingTop: 81 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 0.35 }} priority />
        </div>
        {/* Yellow vertical accent */}
        <div style={{ position: "absolute", left: 40, top: "20%", bottom: "20%", width: 3, background: YELLOW, opacity: 0.8 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px", width: "100%" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: W, marginBottom: 32 }}>
              Acoma Capital Partners · Nationwide
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(56px,9vw,110px)", lineHeight: 0.95, color: W, marginBottom: 48, letterSpacing: "-0.02em" }}>
              Capital<br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px rgba(255,255,255,0.45)` } as React.CSSProperties}>That</span>{" "}
              Moves.<br />
              Deals{" "}
              <span style={{ color: YELLOW }}>That</span><br />
              Close.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: 480, marginBottom: 52 }}>
              Real estate acquisitions, investment sales, and hard money financing for operators and investors across the Nation.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                Book a Call →
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 40px", textDecoration: "none" }}>
                Buyer Questionnaire →
              </a>
              <a href="#opportunities" style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "18px 40px", textDecoration: "none" }}>
                View Listings
              </a>
            </div>
          </FadeUp>
        </div>

        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontFamily: P, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: NAVY, borderTop: `3px solid ${YELLOW}`, borderBottom: `3px solid ${YELLOW}`, overflow: "hidden", padding: "22px 0", position: "relative", maxWidth: "100%" }}>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @-webkit-keyframes ticker {
            0% { -webkit-transform: translateX(0); }
            100% { -webkit-transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            min-width: 200%;
            animation: ticker 30s linear infinite;
            -webkit-animation: ticker 30s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          .ticker-track:hover { animation-play-state: paused; -webkit-animation-play-state: paused; }
        `}</style>
        <div className="ticker-track">
          {[...Array(2)].map((_,set) => (
            <div key={set} style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {[
                { text: "Commercial Acquisitions", color: GREEN },
                { text: "Investment Sales", color: YELLOW },
                { text: "Business Opportunity Sales", color: BLUE },
                { text: "Hard Money Financing", color: GREEN },
                { text: "Baker District · Denver, CO", color: YELLOW },
                { text: "Pueblo, CO · I-25 Exit 104", color: BLUE },
                { text: "Nationwide", color: GREEN },
                { text: "Cannabis Industry Transactions", color: YELLOW },
                { text: "Capital Solutions", color: BLUE },
                { text: "Direct Lender Brokerage", color: GREEN },
              ].map((item, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
                  <span style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", padding: "0 48px" }}>
                    {item.text}
                  </span>
                  <span style={{ color: item.color, fontSize: 16, flexShrink: 0 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-two-col">

            {/* Image side + CTA block */}
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
                  <Image src="/services.jpeg" alt="CRE Services" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${GREEN}`, zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: 60, right: -16, width: 80, height: 80, background: YELLOW, zIndex: -1 }} />
                {/* CTA under image */}
                <div style={{ background: NAVY, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 700, fontSize: 15, color: W, marginBottom: 4, lineHeight: 1.4 }}>Need your property sold?<br />Need your business sold?</p>
                    <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Connect directly — no intake form required.</p>
                  </div>
                  <a href="mailto:ginorod@acomacapitalpartners.com"
                    style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "13px 24px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
                    Contact Us →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Text side */}
            <div>
              <FadeUp>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                  01 / Services
                </p>
                <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                  We help you find the right places to buy — and know when it&apos;s time to sell.
                </h2>
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 20 }}>
                  Acoma handles commercial acquisitions, investment sales, and deal structuring for clients who need a team that understands both the asset and the capital side.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Commercial Acquisitions","Investment Sales","Business Opportunity Sales","Site Selection","Development Opportunities","Portfolio Strategy"].map((s,i) => (
                  <FadeUp key={i} delay={i*0.06}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: i % 2 === 0 ? "#f4f6f9" : W, borderLeft: `4px solid ${GREEN}` }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: P, fontWeight: 600, fontSize: 14, color: NAVY, letterSpacing: "0.02em" }}>{s}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPPORTUNITIES ── */}
      <section id="opportunities" style={{ padding: "120px 0", background: "#f4f6f9", borderTop: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
              02 / Active Listings
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 0 }}>
                Two active opportunities<br/>available now.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: "#888", maxWidth: 320, lineHeight: 1.7 }}>
                Commercial land in Pueblo and a Denver cannabis license.
              </p>
            </div>
          </FadeUp>
          <div className="hp-listings">

            {/* Card 1 — Pueblo */}
            <FadeUp delay={0.1}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${GREEN}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: GREEN, padding: "5px 12px" }}>
                      Commercial Land · Pueblo, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    10-Acre Parcel<br />I-25 Exit 104
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Pinon Ridge Commercial Center · Pueblo, Colorado</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>$2,500,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["10 Acres","B-3 Zoning","I-25 Access","$250K/Acre"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Adjacent to TravelCenters of America and Love&apos;s Travel Stop. Direct interstate access, B-3 zoning, no rezoning required. $114M CDOT interchange upgrade underway.
                  </p>
                  <a href="/pueblo-parcel" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: GREEN, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 — Let's Blaze */}
            <FadeUp delay={0.18}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${BLUE}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: BLUE, padding: "5px 12px" }}>
                      Medical License · Denver, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    Let&apos;s Blaze Medical<br />Dispensary
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>120 S. Kalamath St. · Baker District, Denver, CO</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>Call for Pricing</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Medical License","Social Equity","Zero Violations","Transferable"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Active, transferable medical dispensary license in Denver&apos;s Baker District. Denver has stopped issuing new retail cannabis licenses — making this asset genuinely irreplaceable.
                  </p>
                  <a href="/letsblaze" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: BLUE, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── TRIPLE CTA ── */}
      <section style={{ background: NAVY, padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", color: W, textAlign: "center", letterSpacing: "-0.025em", marginBottom: 8 }}>
              Ready to Move Forward?
            </h2>
            <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: 52 }}>
              Three ways to connect — choose what works for you.
            </p>
          </FadeUp>
          <div className="hp-triple">
            {([
              { href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true", bg: GREEN, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "📅", micro: "Schedule", title: "Book a Call", body: "Get on the calendar with Gino directly. No middlemen.", external: true },
              { href: "https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform", bg: YELLOW, titleColor: NAVY, bodyColor: "rgba(32,42,84,0.65)", labelColor: "rgba(32,42,84,0.5)", icon: "📋", micro: "Buyers", title: "Buyer Questionnaire", body: "Tell us what you're looking for and we'll match you to the right opportunity.", external: true },
              { href: "mailto:ginorod@acomacapitalpartners.com", bg: BLUE, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "✉️", micro: "Direct", title: "Send a Message", body: "Email Gino directly at ginorod@acomacapitalpartners.com", external: false },
            ] as { href: string; bg: string; titleColor: string; bodyColor: string; labelColor: string; icon: string; micro: string; title: string; body: string; external: boolean }[]).map((c, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "48px 36px", background: c.bg, textDecoration: "none", textAlign: "center" }}>
                  <div style={{ fontSize: 40, lineHeight: 1 }}>{c.icon}</div>
                  <div style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: c.labelColor }}>{c.micro}</div>
                  <div style={{ fontFamily: P, fontWeight: 800, fontSize: 22, color: c.titleColor, lineHeight: 1.2 }}>{c.title}</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: c.bodyColor, lineHeight: 1.65 }}>{c.body}</div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARD MONEY ── */}
      <section id="hardmoney" style={{ background: GREEN, padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* Section label */}
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: YELLOW, flexShrink: 0 }} />
              03 / Capital Services
            </p>
          </FadeUp>

          {/* Two-col: text left, image right — with generous gap */}
          <div className="hp-hardmoney">
            <FadeUp>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.0, color: W, marginBottom: 36, letterSpacing: "-0.02em" }}>
                Bridge Loans for Operators Who Move Fast.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                Hard money loans backed by the property — not your credit score. When the bank takes too long, we close in 5 days. $100K to $20M. Approved in 24 hours.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 48 }}>
                Capital that moves at the speed of a deal — not the speed of a committee.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                <a href="/bridge-loans" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                  Explore Bridge Loans →
                </a>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.4)", color: W, padding: "18px 40px", textDecoration: "none" }}>
                  Book a Call →
                </a>
              </div>
              <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 0 }}>
                Call directly: <a href="tel:7207721327" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontWeight: 600 }}>(720) 772-1327</a>
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 540, overflow: "hidden" }}>
                  <Image src="/hardmoney.jpeg" alt="Bridge Loans" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: YELLOW }} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-about">
          <FadeUp>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 580, overflow: "hidden" }}>
                <Image src="/about.jpeg" alt="Denver Colorado" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 4, background: GREEN }} />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                04 / About
              </p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                Acoma Capital Partners
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 24 }}>
                Acoma Capital Partners is a Colorado-based commercial real estate and business brokerage firm. We help business owners, investors, and operators buy, sell, finance, and optimize commercial assets and businesses.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#888", marginBottom: 56 }}>
                With extensive experience in commercial real estate, cannabis industry transactions, capital solutions, and business intelligence, our team focuses on helping clients identify opportunities, reduce risk, and make better business decisions.
              </p>
            </FadeUp>
          </div>
          </div>{/* closes hp-about */}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0", background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-contact">
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>Let&apos;s Work Together</p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Let&apos;s talk<br />about your deal.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: 52 }}>
                Whether you&apos;re acquiring, selling, or need capital to close — reach out directly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 36px", textDecoration: "none" }}>
                  Book a Call →
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Buyer Questionnaire →
                </a>
                <a href="tel:7207721327"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  (720) 772-1327
                </a>
                <a href="mailto:ginorod@acomacapitalpartners.com"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Send an Email →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: 80 }}>
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Direct Contact</p>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 22, color: W, marginBottom: 8 }}>Gino Rodrigues</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Founder, Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Denver, Colorado</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "28px 0" }} />
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Currently Offering</p>
                <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                  <a href="/pueblo-parcel" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>10-Acre Commercial Parcel · Pueblo, CO</a><br />
                  Let&apos;s Blaze Medical Dispensary · Denver, CO<br />
                  <a href="/bridge-loans" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>CRE Hard Money Loans · Nationwide</a>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ height: 5, display: "flex" }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>
      <footer style={{ background: NAVY, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 0 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontFamily: P, fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: W, marginBottom: 4 }}>
                ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
              </p>
              <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Denver, Colorado</p>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["#opportunities","Listings"],["#services","Services"],["#about","About"],["#contact","Contact"]].map(([h,l]) => (
                <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:7207721327" style={{ fontFamily: P, fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "block", marginBottom: 4 }}>(720) 772-1327</a>
              <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Acoma Capital Partners, Inc.</p>
            <p style={{ fontFamily: I, fontSize: 11, color: "rgba(255,255,255,0.25)", maxWidth: 900, textAlign: "left", lineHeight: 1.7 }}>
              The business opportunities presented on this page are official listings offered pursuant to Acoma Capital Partners, Inc.’s Colorado real estate license. This is not a solicitation. All business opportunity sales are conducted in compliance with applicable Colorado real estate statutes and regulations governing the sale of business opportunities. All information is drawn from sources believed to be reliable and is provided without warranty. Prospective buyers are responsible for conducting independent due diligence, including review of all applicable licenses, financial records, lease terms, and regulatory standing prior to entering any transaction. This business opportunity sale is not an invitation to invest in any security or investment contract. Pricing and deal terms are available to qualified buyers upon request. Acoma Capital Partners, Inc. — A Colorado Real Estate Company | License # EC.100052724
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAVY   = "#202A54";
const GREEN  = "#2C9143";
const BLUE   = "#1179EC";
const YELLOW = "#F6D200";
const K = "#0a0a0a";
const W = "#ffffff";
const P = "'Poppins', sans-serif";
const I = "'Inter', sans-serif";

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.cssText += `opacity:0;transform:translateY(24px);transition:opacity .6s ease ${delay}s,transform .6s ease ${delay}s`;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "none"; ob.disconnect(); } }, { threshold: 0.08 });
    ob.observe(el); return () => ob.disconnect();
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ fontFamily: I, background: W, color: K, overflowX: "hidden" }}>
      <style>{`
        .hp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
        .hp-listings { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .hp-triple { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
        .hp-hardmoney { display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center; margin-top: 8px; }
        .hp-about { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-nav-links { display: flex; gap: 36px; align-items: center; }
        .hp-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .hp-mobile-menu { display: none; }
        @media (max-width: 768px) {
          .hp-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-listings { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hp-triple { grid-template-columns: 1fr !important; }
          .hp-hardmoney { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-about { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-contact { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-nav-links { display: none; }
          .hp-hamburger { display: block; }
          .hp-mobile-menu { display: flex; flex-direction: column; gap: 0; position: absolute; top: 100%; left: 0; right: 0; background: #202A54; border-top: 1px solid rgba(255,255,255,0.1); padding: 8px 0; z-index: 99; }
          .hp-mobile-menu a { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); text-decoration: none; padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .hp-mobile-menu a:last-child { border-bottom: none; color: #F6D200; }
        }
      `}</style>

      {/* ── 4-COLOR BRAND STRIPE ── */}
      <div style={{ height: 5, display: "flex", position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 5, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(32,42,84,0.97)" : NAVY,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all .3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: P, fontWeight: 800, fontSize: 17, letterSpacing: "0.06em", textTransform: "uppercase", color: W }}>
              ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
            </span>
          </a>
          <div className="hp-nav-links">
            {[["#opportunities","Listings"],["#services","Services"],["#about","About"]].map(([h,l]) => (
              <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
            ))}
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
              style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "12px 24px", textDecoration: "none" }}>
              Book a Call
            </a>
          </div>
          <button className="hp-hamburger" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
              {mobileMenu ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
            </svg>
          </button>
        </div>
        {mobileMenu && (
          <div className="hp-mobile-menu">
            <a href="#opportunities" onClick={() => setMobileMenu(false)}>Listings</a>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            <a href="/pueblo-parcel" onClick={() => setMobileMenu(false)}>Pueblo Parcel</a>
            <a href="/letsblaze" onClick={() => setMobileMenu(false)}>Let&apos;s Blaze</a>
            <a href="/bridge-loans" onClick={() => setMobileMenu(false)}>Bridge Loans</a>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener">Book a Call</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: NAVY, overflow: "hidden", paddingTop: 81 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 0.35 }} priority />
        </div>
        {/* Yellow vertical accent */}
        <div style={{ position: "absolute", left: 40, top: "20%", bottom: "20%", width: 3, background: YELLOW, opacity: 0.8 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px", width: "100%" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: W, marginBottom: 32 }}>
              Acoma Capital Partners · Nationwide
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(56px,9vw,110px)", lineHeight: 0.95, color: W, marginBottom: 48, letterSpacing: "-0.02em" }}>
              Capital<br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px rgba(255,255,255,0.45)` } as React.CSSProperties}>That</span>{" "}
              Moves.<br />
              Deals{" "}
              <span style={{ color: YELLOW }}>That</span><br />
              Close.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: 480, marginBottom: 52 }}>
              Real estate acquisitions, investment sales, and hard money financing for operators and investors across the Nation.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                Book a Call →
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 40px", textDecoration: "none" }}>
                Buyer Questionnaire →
              </a>
              <a href="#opportunities" style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "18px 40px", textDecoration: "none" }}>
                View Listings
              </a>
            </div>
          </FadeUp>
        </div>

        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontFamily: P, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: NAVY, borderTop: `3px solid ${YELLOW}`, borderBottom: `3px solid ${YELLOW}`, overflow: "hidden", padding: "22px 0", position: "relative", maxWidth: "100%" }}>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @-webkit-keyframes ticker {
            0% { -webkit-transform: translateX(0); }
            100% { -webkit-transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            min-width: 200%;
            animation: ticker 30s linear infinite;
            -webkit-animation: ticker 30s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          .ticker-track:hover { animation-play-state: paused; -webkit-animation-play-state: paused; }
        `}</style>
        <div className="ticker-track">
          {[...Array(2)].map((_,set) => (
            <div key={set} style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {[
                { text: "Commercial Acquisitions", color: GREEN },
                { text: "Investment Sales", color: YELLOW },
                { text: "Business Opportunity Sales", color: BLUE },
                { text: "Hard Money Financing", color: GREEN },
                { text: "Baker District · Denver, CO", color: YELLOW },
                { text: "Pueblo, CO · I-25 Exit 104", color: BLUE },
                { text: "Nationwide", color: GREEN },
                { text: "Cannabis Industry Transactions", color: YELLOW },
                { text: "Capital Solutions", color: BLUE },
                { text: "Direct Lender Brokerage", color: GREEN },
              ].map((item, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
                  <span style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", padding: "0 48px" }}>
                    {item.text}
                  </span>
                  <span style={{ color: item.color, fontSize: 16, flexShrink: 0 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-two-col">

            {/* Image side + CTA block */}
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
                  <Image src="/services.jpeg" alt="CRE Services" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${GREEN}`, zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: 60, right: -16, width: 80, height: 80, background: YELLOW, zIndex: -1 }} />
                {/* CTA under image */}
                <div style={{ background: NAVY, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 700, fontSize: 15, color: W, marginBottom: 4, lineHeight: 1.4 }}>Need your property sold?<br />Need your business sold?</p>
                    <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Connect directly — no intake form required.</p>
                  </div>
                  <a href="mailto:ginorod@acomacapitalpartners.com"
                    style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "13px 24px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
                    Contact Us →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Text side */}
            <div>
              <FadeUp>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                  01 / Services
                </p>
                <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                  We help you find the right places to buy — and know when it&apos;s time to sell.
                </h2>
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 20 }}>
                  Acoma handles commercial acquisitions, investment sales, and deal structuring for clients who need a team that understands both the asset and the capital side.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Commercial Acquisitions","Investment Sales","Business Opportunity Sales","Site Selection","Development Opportunities","Portfolio Strategy"].map((s,i) => (
                  <FadeUp key={i} delay={i*0.06}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: i % 2 === 0 ? "#f4f6f9" : W, borderLeft: `4px solid ${GREEN}` }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: P, fontWeight: 600, fontSize: 14, color: NAVY, letterSpacing: "0.02em" }}>{s}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPPORTUNITIES ── */}
      <section id="opportunities" style={{ padding: "120px 0", background: "#f4f6f9", borderTop: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
              02 / Active Listings
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 0 }}>
                Two active opportunities<br/>available now.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: "#888", maxWidth: 320, lineHeight: 1.7 }}>
                Commercial land in Pueblo and a Denver cannabis license.
              </p>
            </div>
          </FadeUp>
          <div className="hp-listings">

            {/* Card 1 — Pueblo */}
            <FadeUp delay={0.1}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${GREEN}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: GREEN, padding: "5px 12px" }}>
                      Commercial Land · Pueblo, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    10-Acre Parcel<br />I-25 Exit 104
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Pinon Ridge Commercial Center · Pueblo, Colorado</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>$2,500,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["10 Acres","B-3 Zoning","I-25 Access","$250K/Acre"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Adjacent to TravelCenters of America and Love&apos;s Travel Stop. Direct interstate access, B-3 zoning, no rezoning required. $114M CDOT interchange upgrade underway.
                  </p>
                  <a href="/pueblo-parcel" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: GREEN, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 — Let's Blaze */}
            <FadeUp delay={0.18}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${BLUE}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: BLUE, padding: "5px 12px" }}>
                      Medical License · Denver, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    Let&apos;s Blaze Medical<br />Dispensary
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>120 S. Kalamath St. · Baker District, Denver, CO</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>Call for Pricing</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Medical License","Social Equity","Zero Violations","Transferable"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Active, transferable medical dispensary license in Denver&apos;s Baker District. Denver has stopped issuing new retail cannabis licenses — making this asset genuinely irreplaceable.
                  </p>
                  <a href="/letsblaze" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: BLUE, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── TRIPLE CTA ── */}
      <section style={{ background: NAVY, padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", color: W, textAlign: "center", letterSpacing: "-0.025em", marginBottom: 8 }}>
              Ready to Move Forward?
            </h2>
            <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: 52 }}>
              Three ways to connect — choose what works for you.
            </p>
          </FadeUp>
          <div className="hp-triple">
            {([
              { href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true", bg: GREEN, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "📅", micro: "Schedule", title: "Book a Call", body: "Get on the calendar with Gino directly. No middlemen.", external: true },
              { href: "https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform", bg: YELLOW, titleColor: NAVY, bodyColor: "rgba(32,42,84,0.65)", labelColor: "rgba(32,42,84,0.5)", icon: "📋", micro: "Buyers", title: "Buyer Questionnaire", body: "Tell us what you're looking for and we'll match you to the right opportunity.", external: true },
              { href: "mailto:ginorod@acomacapitalpartners.com", bg: BLUE, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "✉️", micro: "Direct", title: "Send a Message", body: "Email Gino directly at ginorod@acomacapitalpartners.com", external: false },
            ] as { href: string; bg: string; titleColor: string; bodyColor: string; labelColor: string; icon: string; micro: string; title: string; body: string; external: boolean }[]).map((c, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "48px 36px", background: c.bg, textDecoration: "none", textAlign: "center" }}>
                  <div style={{ fontSize: 40, lineHeight: 1 }}>{c.icon}</div>
                  <div style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: c.labelColor }}>{c.micro}</div>
                  <div style={{ fontFamily: P, fontWeight: 800, fontSize: 22, color: c.titleColor, lineHeight: 1.2 }}>{c.title}</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: c.bodyColor, lineHeight: 1.65 }}>{c.body}</div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARD MONEY ── */}
      <section id="hardmoney" style={{ background: GREEN, padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* Section label */}
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: YELLOW, flexShrink: 0 }} />
              03 / Capital Services
            </p>
          </FadeUp>

          {/* Two-col: text left, image right — with generous gap */}
          <div className="hp-hardmoney">
            <FadeUp>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.0, color: W, marginBottom: 36, letterSpacing: "-0.02em" }}>
                Bridge Loans for Operators Who Move Fast.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                Hard money loans backed by the property — not your credit score. When the bank takes too long, we close in 5 days. $100K to $20M. Approved in 24 hours.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 48 }}>
                Capital that moves at the speed of a deal — not the speed of a committee.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                <a href="/bridge-loans" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                  Explore Bridge Loans →
                </a>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.4)", color: W, padding: "18px 40px", textDecoration: "none" }}>
                  Book a Call →
                </a>
              </div>
              <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 0 }}>
                Call directly: <a href="tel:7207721327" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontWeight: 600 }}>(720) 772-1327</a>
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 540, overflow: "hidden" }}>
                  <Image src="/hardmoney.jpeg" alt="Bridge Loans" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: YELLOW }} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-about">
          <FadeUp>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 580, overflow: "hidden" }}>
                <Image src="/about.jpeg" alt="Denver Colorado" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 4, background: GREEN }} />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                04 / About
              </p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                Acoma Capital Partners
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 24 }}>
                Acoma Capital Partners is a Colorado-based commercial real estate and business brokerage firm. We help business owners, investors, and operators buy, sell, finance, and optimize commercial assets and businesses.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#888", marginBottom: 56 }}>
                With extensive experience in commercial real estate, cannabis industry transactions, capital solutions, and business intelligence, our team focuses on helping clients identify opportunities, reduce risk, and make better business decisions.
              </p>
            </FadeUp>
          </div>
          </div>{/* closes hp-about */}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0", background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-contact">
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>Let&apos;s Work Together</p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Let&apos;s talk<br />about your deal.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: 52 }}>
                Whether you&apos;re acquiring, selling, or need capital to close — reach out directly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 36px", textDecoration: "none" }}>
                  Book a Call →
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Buyer Questionnaire →
                </a>
                <a href="tel:7207721327"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  (720) 772-1327
                </a>
                <a href="mailto:ginorod@acomacapitalpartners.com"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Send an Email →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: 80 }}>
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Direct Contact</p>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 22, color: W, marginBottom: 8 }}>Gino Rodrigues</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Founder, Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Denver, Colorado</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "28px 0" }} />
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Currently Offering</p>
                <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                  <a href="/pueblo-parcel" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>10-Acre Commercial Parcel · Pueblo, CO</a><br />
                  Let&apos;s Blaze Medical Dispensary · Denver, CO<br />
                  <a href="/bridge-loans" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>CRE Hard Money Loans · Nationwide</a>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ height: 5, display: "flex" }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>
      <footer style={{ background: NAVY, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 0 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontFamily: P, fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: W, marginBottom: 4 }}>
                ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
              </p>
              <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Denver, Colorado</p>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["#opportunities","Listings"],["#services","Services"],["#about","About"],["#contact","Contact"]].map(([h,l]) => (
                <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:7207721327" style={{ fontFamily: P, fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "block", marginBottom: 4 }}>(720) 772-1327</a>
              <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Acoma Capital Partners, Inc.</p>
            <p style={{ fontFamily: I, fontSize: 11, color: "rgba(255,255,255,0.25)", maxWidth: 900, textAlign: "left", lineHeight: 1.7 }}>
              The business opportunities presented on this page are official listings offered pursuant to Acoma Capital Partners, Inc.’s Colorado real estate license. This is not a solicitation. All business opportunity sales are conducted in compliance with applicable Colorado real estate statutes and regulations governing the sale of business opportunities. All information is drawn from sources believed to be reliable and is provided without warranty. Prospective buyers are responsible for conducting independent due diligence, including review of all applicable licenses, financial records, lease terms, and regulatory standing prior to entering any transaction. This business opportunity sale is not an invitation to invest in any security or investment contract. Pricing and deal terms are available to qualified buyers upon request. Acoma Capital Partners, Inc. — A Colorado Real Estate Company | License # EC.100052724
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAVY   = "#202A54";
const GREEN  = "#2C9143";
const BLUE   = "#1179EC";
const YELLOW = "#F6D200";
const K = "#0a0a0a";
const W = "#ffffff";
const P = "'Poppins', sans-serif";
const I = "'Inter', sans-serif";

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.cssText += `opacity:0;transform:translateY(24px);transition:opacity .6s ease ${delay}s,transform .6s ease ${delay}s`;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "none"; ob.disconnect(); } }, { threshold: 0.08 });
    ob.observe(el); return () => ob.disconnect();
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ fontFamily: I, background: W, color: K, overflowX: "hidden" }}>
      <style>{`
        .hp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
        .hp-listings { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .hp-triple { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
        .hp-hardmoney { display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center; margin-top: 8px; }
        .hp-about { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-nav-links { display: flex; gap: 36px; align-items: center; }
        .hp-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .hp-mobile-menu { display: none; }
        @media (max-width: 768px) {
          .hp-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-listings { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hp-triple { grid-template-columns: 1fr !important; }
          .hp-hardmoney { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-about { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-contact { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hp-nav-links { display: none; }
          .hp-hamburger { display: block; }
          .hp-mobile-menu { display: flex; flex-direction: column; gap: 0; position: absolute; top: 100%; left: 0; right: 0; background: #202A54; border-top: 1px solid rgba(255,255,255,0.1); padding: 8px 0; z-index: 99; }
          .hp-mobile-menu a { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); text-decoration: none; padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .hp-mobile-menu a:last-child { border-bottom: none; color: #F6D200; }
        }
      `}</style>

      {/* ── 4-COLOR BRAND STRIPE ── */}
      <div style={{ height: 5, display: "flex", position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 5, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(32,42,84,0.97)" : NAVY,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all .3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76, position: "relative" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: P, fontWeight: 800, fontSize: 17, letterSpacing: "0.06em", textTransform: "uppercase", color: W }}>
              ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
            </span>
          </a>
          <div className="hp-nav-links">
            {[["#opportunities","Listings"],["#services","Services"],["#about","About"]].map(([h,l]) => (
              <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
            ))}
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
              style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "12px 24px", textDecoration: "none" }}>
              Book a Call
            </a>
          </div>
          <button className="hp-hamburger" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
              {mobileMenu ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
            </svg>
          </button>
        </div>
        {mobileMenu && (
          <div className="hp-mobile-menu">
            <a href="#opportunities" onClick={() => setMobileMenu(false)}>Listings</a>
            <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            <a href="/pueblo-parcel" onClick={() => setMobileMenu(false)}>Pueblo Parcel</a>
            <a href="/letsblaze" onClick={() => setMobileMenu(false)}>Let&apos;s Blaze</a>
            <a href="/bridge-loans" onClick={() => setMobileMenu(false)}>Bridge Loans</a>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener">Book a Call</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: NAVY, overflow: "hidden", paddingTop: 81 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 0.35 }} priority />
        </div>
        {/* Yellow vertical accent */}
        <div style={{ position: "absolute", left: 40, top: "20%", bottom: "20%", width: 3, background: YELLOW, opacity: 0.8 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px", width: "100%" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: W, marginBottom: 32 }}>
              Acoma Capital Partners · Nationwide
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(56px,9vw,110px)", lineHeight: 0.95, color: W, marginBottom: 48, letterSpacing: "-0.02em" }}>
              Capital<br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px rgba(255,255,255,0.45)` } as React.CSSProperties}>That</span>{" "}
              Moves.<br />
              Deals{" "}
              <span style={{ color: YELLOW }}>That</span><br />
              Close.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: 480, marginBottom: 52 }}>
              Real estate acquisitions, investment sales, and hard money financing for operators and investors across the Nation.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                Book a Call →
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 40px", textDecoration: "none" }}>
                Buyer Questionnaire →
              </a>
              <a href="#opportunities" style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "18px 40px", textDecoration: "none" }}>
                View Listings
              </a>
            </div>
          </FadeUp>
        </div>

        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontFamily: P, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: NAVY, borderTop: `3px solid ${YELLOW}`, borderBottom: `3px solid ${YELLOW}`, overflow: "hidden", padding: "22px 0", position: "relative", maxWidth: "100%" }}>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @-webkit-keyframes ticker {
            0% { -webkit-transform: translateX(0); }
            100% { -webkit-transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            min-width: 200%;
            animation: ticker 30s linear infinite;
            -webkit-animation: ticker 30s linear infinite;
            will-change: transform;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          .ticker-track:hover { animation-play-state: paused; -webkit-animation-play-state: paused; }
        `}</style>
        <div className="ticker-track">
          {[...Array(2)].map((_,set) => (
            <div key={set} style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {[
                { text: "Commercial Acquisitions", color: GREEN },
                { text: "Investment Sales", color: YELLOW },
                { text: "Business Opportunity Sales", color: BLUE },
                { text: "Hard Money Financing", color: GREEN },
                { text: "Baker District · Denver, CO", color: YELLOW },
                { text: "Pueblo, CO · I-25 Exit 104", color: BLUE },
                { text: "Nationwide", color: GREEN },
                { text: "Cannabis Industry Transactions", color: YELLOW },
                { text: "Capital Solutions", color: BLUE },
                { text: "Direct Lender Brokerage", color: GREEN },
              ].map((item, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
                  <span style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", padding: "0 48px" }}>
                    {item.text}
                  </span>
                  <span style={{ color: item.color, fontSize: 16, flexShrink: 0 }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-two-col">

            {/* Image side + CTA block */}
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
                  <Image src="/services.jpeg" alt="CRE Services" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${GREEN}`, zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: 60, right: -16, width: 80, height: 80, background: YELLOW, zIndex: -1 }} />
                {/* CTA under image */}
                <div style={{ background: NAVY, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 700, fontSize: 15, color: W, marginBottom: 4, lineHeight: 1.4 }}>Need your property sold?<br />Need your business sold?</p>
                    <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Connect directly — no intake form required.</p>
                  </div>
                  <a href="mailto:ginorod@acomacapitalpartners.com"
                    style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "13px 24px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
                    Contact Us →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Text side */}
            <div>
              <FadeUp>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                  01 / Services
                </p>
                <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                  We help you find the right places to buy — and know when it&apos;s time to sell.
                </h2>
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 20 }}>
                  Acoma handles commercial acquisitions, investment sales, and deal structuring for clients who need a team that understands both the asset and the capital side.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Commercial Acquisitions","Investment Sales","Business Opportunity Sales","Site Selection","Development Opportunities","Portfolio Strategy"].map((s,i) => (
                  <FadeUp key={i} delay={i*0.06}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: i % 2 === 0 ? "#f4f6f9" : W, borderLeft: `4px solid ${GREEN}` }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: P, fontWeight: 600, fontSize: 14, color: NAVY, letterSpacing: "0.02em" }}>{s}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPPORTUNITIES ── */}
      <section id="opportunities" style={{ padding: "120px 0", background: "#f4f6f9", borderTop: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
              02 / Active Listings
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 0 }}>
                Two active opportunities<br/>available now.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: "#888", maxWidth: 320, lineHeight: 1.7 }}>
                Commercial land in Pueblo and a licensed cannabis operation in Denver.
              </p>
            </div>
          </FadeUp>
          <div className="hp-listings">

            {/* Card 1 — Pueblo */}
            <FadeUp delay={0.1}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${GREEN}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: GREEN, padding: "5px 12px" }}>
                      Commercial Land · Pueblo, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    10-Acre Parcel<br />I-25 Exit 104
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Pinon Ridge Commercial Center · Pueblo, Colorado</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>$2,500,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["10 Acres","B-3 Zoning","I-25 Access","$250K/Acre"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Adjacent to TravelCenters of America and Love&apos;s Travel Stop. Direct interstate access, B-3 zoning, no rezoning required. $114M CDOT interchange upgrade underway.
                  </p>
                  <a href="/pueblo-parcel" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: GREEN, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 — Let's Blaze */}
            <FadeUp delay={0.18}>
              <div style={{ background: W, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.07)"; }}>
                <div style={{ background: NAVY, padding: "40px 40px 32px", borderBottom: `5px solid ${BLUE}` }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: W, background: BLUE, padding: "5px 12px" }}>
                      Business Sale · Denver, CO
                    </span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 10 }}>
                    Let&apos;s Blaze Medical<br />Dispensary
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>120 S. Kalamath St. · Baker District, Denver, CO</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 6 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: NAVY, lineHeight: 1, letterSpacing: "-0.02em" }}>$595,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Medical License","Social Equity","Zero Violations","800 Sq Ft"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, background: "#f0f3f8", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Active, revenue-generating medical dispensary in Denver&apos;s Baker District. Denver has stopped issuing new retail cannabis licenses — making this asset genuinely irreplaceable.
                  </p>
                  <a href="/letsblaze" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: BLUE, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── TRIPLE CTA ── */}
      <section style={{ background: NAVY, padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", color: W, textAlign: "center", letterSpacing: "-0.025em", marginBottom: 8 }}>
              Ready to Move Forward?
            </h2>
            <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: 52 }}>
              Three ways to connect — choose what works for you.
            </p>
          </FadeUp>
          <div className="hp-triple">
            {([
              { href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true", bg: GREEN, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "📅", micro: "Schedule", title: "Book a Call", body: "Get on the calendar with Gino directly. No middlemen.", external: true },
              { href: "https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform", bg: YELLOW, titleColor: NAVY, bodyColor: "rgba(32,42,84,0.65)", labelColor: "rgba(32,42,84,0.5)", icon: "📋", micro: "Buyers", title: "Buyer Questionnaire", body: "Tell us what you're looking for and we'll match you to the right opportunity.", external: true },
              { href: "mailto:ginorod@acomacapitalpartners.com", bg: BLUE, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "✉️", micro: "Direct", title: "Send a Message", body: "Email Gino directly at ginorod@acomacapitalpartners.com", external: false },
            ] as { href: string; bg: string; titleColor: string; bodyColor: string; labelColor: string; icon: string; micro: string; title: string; body: string; external: boolean }[]).map((c, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "48px 36px", background: c.bg, textDecoration: "none", textAlign: "center" }}>
                  <div style={{ fontSize: 40, lineHeight: 1 }}>{c.icon}</div>
                  <div style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: c.labelColor }}>{c.micro}</div>
                  <div style={{ fontFamily: P, fontWeight: 800, fontSize: 22, color: c.titleColor, lineHeight: 1.2 }}>{c.title}</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: c.bodyColor, lineHeight: 1.65 }}>{c.body}</div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARD MONEY ── */}
      <section id="hardmoney" style={{ background: GREEN, padding: "120px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* Section label */}
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: YELLOW, flexShrink: 0 }} />
              03 / Capital Services
            </p>
          </FadeUp>

          {/* Two-col: text left, image right — with generous gap */}
          <div className="hp-hardmoney">
            <FadeUp>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.0, color: W, marginBottom: 36, letterSpacing: "-0.02em" }}>
                Bridge Loans for Operators Who Move Fast.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.82)", marginBottom: 20 }}>
                Hard money loans backed by the property — not your credit score. When the bank takes too long, we close in 5 days. $100K to $20M. Approved in 24 hours.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.85, color: "rgba(255,255,255,0.55)", marginBottom: 48 }}>
                Capital that moves at the speed of a deal — not the speed of a committee.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                <a href="/bridge-loans" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                  Explore Bridge Loans →
                </a>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.4)", color: W, padding: "18px 40px", textDecoration: "none" }}>
                  Book a Call →
                </a>
              </div>
              <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 0 }}>
                Call directly: <a href="tel:7207721327" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontWeight: 600 }}>(720) 772-1327</a>
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 540, overflow: "hidden" }}>
                  <Image src="/hardmoney.jpeg" alt="Bridge Loans" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 5, background: YELLOW }} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-about">
          <FadeUp>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 580, overflow: "hidden" }}>
                <Image src="/about.jpeg" alt="Denver Colorado" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 4, background: GREEN }} />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                04 / About
              </p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                Acoma Capital Partners
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 24 }}>
                Acoma Capital Partners is a Colorado-based commercial real estate and business brokerage firm. We help business owners, investors, and operators buy, sell, finance, and optimize commercial assets and businesses.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#888", marginBottom: 56 }}>
                With extensive experience in commercial real estate, cannabis industry transactions, capital solutions, and business intelligence, our team focuses on helping clients identify opportunities, reduce risk, and make better business decisions.
              </p>
            </FadeUp>
          </div>
          </div>{/* closes hp-about */}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0", background: NAVY }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-contact">
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>Let&apos;s Work Together</p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Let&apos;s talk<br />about your deal.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: 52 }}>
                Whether you&apos;re acquiring, selling, or need capital to close — reach out directly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 36px", textDecoration: "none" }}>
                  Book a Call →
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Buyer Questionnaire →
                </a>
                <a href="tel:7207721327"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  (720) 772-1327
                </a>
                <a href="mailto:ginorod@acomacapitalpartners.com"
                  style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)", color: W, padding: "18px 36px", textDecoration: "none" }}>
                  Send an Email →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: 80 }}>
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Direct Contact</p>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 22, color: W, marginBottom: 8 }}>Gino Rodrigues</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Founder, Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Denver, Colorado</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "28px 0" }} />
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Currently Offering</p>
                <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                  <a href="/pueblo-parcel" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>10-Acre Commercial Parcel · Pueblo, CO</a><br />
                  Let&apos;s Blaze Medical Dispensary · Denver, CO<br />
                  <a href="/bridge-loans" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>CRE Hard Money Loans · Nationwide</a>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ height: 5, display: "flex" }}>
        <div style={{ flex: 1, background: GREEN }} />
        <div style={{ flex: 1, background: NAVY }} />
        <div style={{ flex: 1, background: BLUE }} />
        <div style={{ flex: 1, background: YELLOW }} />
      </div>
      <footer style={{ background: NAVY, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "52px 0 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontFamily: P, fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: W, marginBottom: 4 }}>
                ACOMA <span style={{ color: YELLOW }}>CAPITAL</span> PARTNERS
              </p>
              <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Denver, Colorado</p>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["#opportunities","Listings"],["#services","Services"],["#about","About"],["#contact","Contact"]].map(([h,l]) => (
                <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:7207721327" style={{ fontFamily: P, fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "block", marginBottom: 4 }}>(720) 772-1327</a>
              <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Acoma Capital Partners, Inc.</p>
            <p style={{ fontFamily: I, fontSize: 11, color: "rgba(255,255,255,0.25)", maxWidth: 900, textAlign: "left", lineHeight: 1.7 }}>
              The business opportunities presented on this page are official listings offered pursuant to Acoma Capital Partners, Inc.’s Colorado real estate license. This is not a solicitation. All business opportunity sales are conducted in compliance with applicable Colorado real estate statutes and regulations governing the sale of business opportunities. All information is drawn from sources believed to be reliable and is provided without warranty. Prospective buyers are responsible for conducting independent due diligence, including review of all applicable licenses, financial records, lease terms, and regulatory standing prior to entering any transaction. This business opportunity sale is not an invitation to invest in any security or investment contract. Pricing and deal terms are available to qualified buyers upon request. Acoma Capital Partners, Inc. — A Colorado Real Estate Company | License # EC.100052724
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
