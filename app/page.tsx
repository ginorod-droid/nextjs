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

function Banner({ src, alt, pos = "center", bar }: { src: string; alt: string; pos?: string; bar: string }) {
  return (
    <FadeUp>
      <div className="hp-banner" style={{ position: "relative", overflow: "hidden", marginBottom: 64 }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1200px) 100vw, 1120px" style={{ objectFit: "cover", objectPosition: pos }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: bar }} />
      </div>
    </FadeUp>
  );
}

const DEAL_ENDPOINT = "https://script.google.com/macros/s/AKfycbze_jrkesBUQyu4rVUFko2EGoXDhOGw1WiNJ4iGaOuwW7rczi3EjG-F4uIxXYV93Gy4/exec";

function DealForm() {
  const [f, setF] = useState({ name: "", email: "", phone: "", address: "", ptype: "", value: "", loan: "", purpose: "", website: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const lbl: React.CSSProperties = { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5b667d", marginBottom: 6, display: "block" };
  const inp: React.CSSProperties = { width: "100%", fontFamily: "'Inter',sans-serif", fontSize: 15, color: "#0a0a0a", background: "#ffffff", border: "1px solid #d5dbe6", padding: "12px 14px", outline: "none", boxSizing: "border-box" };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!f.name || !f.email) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch(DEAL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          type: "deal-submission", name: f.name, email: f.email, phone: f.phone,
          propertyType: f.ptype, address: f.address, propertyValue: f.value,
          loanAmount: f.loan, purpose: f.purpose, website: f.website,
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      const out = await res.json();
      if (!out.ok) throw new Error("failed");
      setStatus("done");
    } catch { setStatus("error"); }
  };
  if (status === "done") {
    return (
      <div style={{ textAlign: "center", padding: "32px 8px" }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 24, color: "#202A54", marginBottom: 10 }}>Got it. Thank you.</div>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, lineHeight: 1.7, color: "#555" }}>Your deal is on our desk. We will come back to you with a read, usually the same day. If it is time-sensitive, call <a href="tel:7207721327" style={{ color: "#202A54", fontWeight: 600, textDecoration: "none" }}>(720) 772-1327</a>.</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit}>
      <input type="text" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} aria-hidden="true" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div><label style={lbl}>Name *</label><input style={inp} value={f.name} onChange={set("name")} required /></div>
        <div><label style={lbl}>Phone</label><input style={inp} value={f.phone} onChange={set("phone")} /></div>
      </div>
      <div style={{ marginTop: 14 }}><label style={lbl}>Email *</label><input type="email" style={inp} value={f.email} onChange={set("email")} required /></div>
      <div style={{ marginTop: 14 }}><label style={lbl}>Property address</label><input style={inp} value={f.address} onChange={set("address")} placeholder="Street, city, state" /></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
        <div>
          <label style={lbl}>Property type</label>
          <select style={inp} value={f.ptype} onChange={set("ptype")}>
            <option value="">Select</option>
            <option>Owner-occupied commercial</option>
            <option>Investment / rental</option>
            <option>Multifamily (5+)</option>
            <option>Mixed-use</option>
            <option>Office / retail / warehouse</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label style={lbl}>Purpose</label>
          <select style={inp} value={f.purpose} onChange={set("purpose")}>
            <option value="">Select</option>
            <option>Purchase</option>
            <option>Refinance</option>
            <option>Cash-out</option>
            <option>Bridge</option>
          </select>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
        <div><label style={lbl}>Property value</label><input style={inp} value={f.value} onChange={set("value")} placeholder="$" /></div>
        <div><label style={lbl}>Loan amount</label><input style={inp} value={f.loan} onChange={set("loan")} placeholder="$" /></div>
      </div>
      {status === "error" && <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#c0392b", marginTop: 14 }}>Name and email are required. If it keeps failing, call (720) 772-1327.</p>}
      <button type="submit" disabled={status === "sending"} style={{ width: "100%", marginTop: 20, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", background: status === "sending" ? "#8a93a3" : "#2C9143", color: "#ffffff", border: "none", padding: "17px", cursor: status === "sending" ? "default" : "pointer" }}>
        {status === "sending" ? "Sending…" : "Submit Deal →"}
      </button>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, lineHeight: 1.6, color: "#8a93a3", marginTop: 14 }}>
        By submitting you agree we may contact you about your deal. Acoma arranges financing through its network and is not a lender.
      </p>
    </form>
  );
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
        .hp-listings { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
        .hp-triple { display: grid; grid-template-columns: repeat(3,1fr); gap: 3px; }
        .hp-hardmoney { display: grid; grid-template-columns: 1fr 1fr; gap: 120px; align-items: center; margin-top: 8px; }
        .hp-about { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
        .hp-nav-links { display: flex; gap: 28px; align-items: center; }
        .hp-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .hp-mobile-menu { display: none; }
        .hp-banner { height: 380px; }
        .hp-sweet-img { height: 240px; }
        .hp-prog-img { height: 190px; }
        .hp-arv { display: grid; grid-template-columns: 420px 1fr; align-items: stretch; }
        .hp-fast { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
        .hp-submit { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .hp-lanes { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 80px; }
        .hp-programs { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .hp-sweet { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: stretch; }
        .hp-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .hp-stats { display: grid; grid-template-columns: repeat(4,auto); gap: 48px; justify-content: start; }
        @media (max-width: 1000px) {
          .hp-programs { grid-template-columns: repeat(2,1fr) !important; }
          .hp-steps { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .hp-lanes, .hp-programs, .hp-sweet, .hp-steps { grid-template-columns: 1fr !important; }
          .hp-stats { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .hp-banner { height: 220px !important; margin-bottom: 40px !important; }
          .hp-fast, .hp-submit { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hp-arv { grid-template-columns: 1fr !important; }
          .hp-arv-img { min-height: 200px !important; }
          .hp-sweet-img { height: 190px !important; }
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
          <a href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }} aria-label="Acoma Capital Partners home">
            <img src="/acoma-logo-white.png" alt="Acoma Capital Partners" style={{ height: 38, width: "auto", display: "block" }} />
          </a>
          <div className="hp-nav-links">
            {[["#programs","Programs"],["#sweet-spots","Sweet Spots"],["/commercial-loans","Commercial Loans"],["/broker-programs","Deal Desk"],["/partners","Work With Us"],["#about","About"]].map(([h,l]) => (
              <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
            ))}
            <a href="https://calendly.com/acomacapitalpartners/new-meeting" target="_blank" rel="noopener"
              style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "12px 24px", textDecoration: "none" }}>
              Schedule A Call
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
            <a href="#programs" onClick={() => setMobileMenu(false)}>Programs</a>
            <a href="#sweet-spots" onClick={() => setMobileMenu(false)}>Sweet Spots</a>
            <a href="/commercial-loans" onClick={() => setMobileMenu(false)}>Commercial Loans</a>
            <a href="/broker-programs" onClick={() => setMobileMenu(false)}>Deal Desk</a>
            <a href="/partners" onClick={() => setMobileMenu(false)}>Work With Us</a>
            <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a href="https://calendly.com/acomacapitalpartners/new-meeting" target="_blank" rel="noopener">Schedule A Call</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: NAVY, overflow: "hidden", paddingTop: 81 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 0.3 }} priority />
        </div>
        <div style={{ position: "absolute", left: 40, top: "20%", bottom: "20%", width: 3, background: YELLOW, opacity: 0.8 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 40px 90px", width: "100%" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: W, marginBottom: 28 }}>
              Commercial Real Estate Financing &amp; Brokerage · Nationwide
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(40px,6.6vw,88px)", lineHeight: 1.0, color: W, marginBottom: 36, letterSpacing: "-0.02em", maxWidth: 980 }}>
              When the bank turns you down,{" "}
              <span style={{ color: YELLOW }}>Acoma is your answer.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: I, fontSize: 19, lineHeight: 1.7, color: "rgba(255,255,255,0.78)", maxWidth: 640, marginBottom: 44 }}>
              We arrange commercial property loans for business owners and investors whose deals fall outside a bank&apos;s box. Bank statement, lite doc, no doc, rental and bridge programs from $100K to $20M. When it is time to buy or sell, we broker that too.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
              <a
                href="https://calendly.com/acomacapitalpartners/new-meeting"
                target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                Schedule A Call →
              </a>
              <a
                href="#submit-deal"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: GREEN, color: W, padding: "18px 40px", textDecoration: "none" }}>
                Submit a Deal →
              </a>
              <a
                href="#programs"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.45)", color: W, padding: "16px 40px", textDecoration: "none" }}>
                See the Programs →
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="hp-stats">
              {([
                ["$100K to $20M", "Loan sizes we arrange"],
                ["No tax returns", "On most of our programs"],
                ["No upfront fees", "We are paid at closing"],
                ["Since 2004", "Colorado broker license"],
              ] as [string,string][]).map(([big, small], i) => (
                <div key={i} style={{ borderLeft: `3px solid ${i % 2 === 0 ? YELLOW : GREEN}`, paddingLeft: 16 }}>
                  <div style={{ fontFamily: P, fontWeight: 900, fontSize: 20, color: W, lineHeight: 1.2 }}>{big}</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{small}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: NAVY, borderTop: `3px solid ${YELLOW}`, borderBottom: `3px solid ${YELLOW}`, overflow: "hidden", padding: "22px 0", position: "relative", maxWidth: "100%" }}>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-track {
            display: flex;
            flex-wrap: nowrap;
            width: max-content;
            min-width: 200%;
            animation: ticker 34s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }
          .ticker-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="ticker-track">
          {[...Array(2)].map((_,set) => (
            <div key={set} style={{ display: "flex", alignItems: "center", gap: 0 }}>
              {[
                { text: "Bank Statement Loans", color: GREEN },
                { text: "Lite Doc", color: YELLOW },
                { text: "No Doc Commercial", color: BLUE },
                { text: "Rental Property Loans", color: GREEN },
                { text: "Multifamily & Mixed-Use", color: YELLOW },
                { text: "Bridge & Private Lending", color: BLUE },
                { text: "Commercial Sales", color: GREEN },
                { text: "Nationwide", color: YELLOW },
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

      {/* ── WHAT WE DO ── */}
      <section id="services" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-two-col">
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
                  <Image src="/services.jpeg" alt="Commercial real estate financing and brokerage" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${GREEN}`, zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: 60, right: -16, width: 80, height: 80, background: YELLOW, zIndex: -1 }} />
                <div style={{ background: NAVY, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 700, fontSize: 15, color: W, marginBottom: 4, lineHeight: 1.4 }}>Need capital to close?<br />We arrange the financing.</p>
                    <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Owner-occupied and investor loans, starting at $100K.</p>
                  </div>
                  <a href="/commercial-loans"
                    style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "13px 24px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
                    View Commercial Loans →
                  </a>
                </div>
              </div>
            </FadeUp>

            <div>
              <FadeUp>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                  01 / What We Do
                </p>
                <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                  When the bank says no, bring the deal to us.
                </h2>
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                  You are a solid borrower, and a bank turned you down over a tax return that doesn&apos;t show what the business really earns. That is the deal we work on every day. We get your loan qualified on your bank statements, on the property, or on your credit and equity, and we take it to lenders who say yes to the commercial buildings a bank walks away from.
                </p>
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 20 }}>
                  Acoma works as your broker from the first call to the closing table. You deal with one person who knows your file, and you pay nothing until the loan closes.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="hp-lanes">
            {([
              { color: GREEN, label: "Lending", title: "Commercial Real Estate Lending", body: "The center of our work. We arrange purchase, refinance and cash-out loans on commercial and investment property for borrowers who are self-employed, short on paperwork or short on time.", href: "#programs", cta: "See the programs" },
              { color: BLUE, label: "Sales", title: "Commercial Real Estate Sales", body: "Listings and buyer representation on commercial property. Colorado deals are handled in house. Out-of-state deals are co-brokered with a locally licensed agent, so you keep one point of contact.", href: "https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform", cta: "Buyer questionnaire" },
              { color: YELLOW, label: "Wholesale", title: "Off-Market Opportunities", body: "Some property never reaches the open market. We connect owners who want a quiet sale with buyers in our network who are ready to move. Tell us what you have or what you are looking for.", href: "#contact", cta: "Talk to us" },
            ] as { color: string; label: string; title: string; body: string; href: string; cta: string }[]).map((c, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ background: "#f4f6f9", borderTop: `5px solid ${c.color}`, padding: "36px 32px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <p style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a8499", marginBottom: 12 }}>{c.label}</p>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 22, lineHeight: 1.2, color: NAVY, marginBottom: 14 }}>{c.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.75, color: "#555", marginBottom: 24, flex: 1 }}>{c.body}</p>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY, textDecoration: "none" }}>
                    {c.cta} →
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SWEET SPOTS ── */}
      <section id="sweet-spots" style={{ padding: "120px 0", background: NAVY, borderTop: `6px solid ${YELLOW}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: YELLOW, flexShrink: 0 }} />
              03 / Our Sweet Spots
            </p>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(34px,4.6vw,60px)", lineHeight: 1.03, color: W, marginBottom: 20, letterSpacing: "-0.02em", maxWidth: 860 }}>
              Two kinds of deals we close again and again.
            </h2>
            <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", marginBottom: 56, maxWidth: 760 }}>
              We look at every commercial deal that comes in. These two are where the fit is strongest and the road to closing is shortest. If your deal looks like either one, call us first.
            </p>
          </FadeUp>
          <div className="hp-sweet">
            {([
              {
                id: "sweet-owner", img: "/program-bank-statement.jpg", imgAlt: "Owner-occupied commercial building", color: GREEN, tag: "Sweet Spot 01 · The Owner's Building",
                title: "You run the business and want to own the building.",
                body: "A self-employed owner buying or refinancing the property the business operates from. The tax returns show less than the business earns, so the bank passed. This loan is qualified on twelve months of business bank statements.",
                specs: [["Loan size","$100K to $2M"],["Leverage","Up to 80% LTV"],["Credit","650 and up"],["Income","12 months of business bank statements"],["Use","Purchase, refinance, cash-out"],["Occupancy","Owner-occupied"]],
                property: "Office, retail, warehouse, light industrial, automotive, self-storage, mixed-use, restaurants and day care.",
                fit: "The business occupies the property, the building sits in or near a metro market, and the owner brings 20 percent or more to the deal.",
                know: "Plan on a new appraisal and a Phase I environmental report, paid by the borrower. You hear that from us on day one so the cost and the timing never surprise you.",
                href: "/broker-programs/bank-statement", cta: "See the Bank Statement Program", external: false,
              },
              {
                id: "sweet-investor", img: "/program-lite-doc.jpg", imgAlt: "Investment property", color: YELLOW, tag: "Sweet Spot 02 · The Investor's Property",
                title: "You buy property for the income it produces.",
                body: "An investor buying, refinancing or taking cash out of a rental or a small income property. The loan is qualified on the property and your credit. No personal income documents and no tax returns are required.",
                specs: [["Loan size","$100K to $5M"],["Leverage","Up to 75% LTV, 70% on commercial"],["Structure","30-year fixed, fully amortizing"],["Balloon","None"],["Use","Purchase, refinance, cash-out"],["Occupancy","Investment property"]],
                property: "One to four unit rentals, apartment buildings of five units or more, mixed-use, office, retail, warehouse, self-storage and automotive.",
                fit: "A long-term hold with 25 percent or more in equity and an owner who wants the same payment for thirty years.",
                know: "These are business-purpose loans, so a property you live in does not qualify. They carry a prepayment schedule, and we lay it out for you before you commit.",
                href: "https://calendly.com/acomacapitalpartners/new-meeting", cta: "Schedule A Call About Your Property", external: true,
              },
            ] as { id: string; img: string; imgAlt: string; color: string; tag: string; title: string; body: string; specs: string[][]; property: string; fit: string; know: string; href: string; cta: string; external: boolean }[]).map((s, i) => (
              <FadeUp key={i} delay={i * 0.1} style={{ height: "100%" }}>
                <div id={s.id} style={{ background: W, borderTop: `8px solid ${s.color}`, height: "100%", display: "flex", flexDirection: "column", scrollMarginTop: 100 }}>
                  <div className="hp-sweet-img" style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <Image src={s.img} alt={s.imgAlt} fill sizes="(max-width: 768px) 100vw, 560px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "40px 40px 44px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5b667d", marginBottom: 16 }}>{s.tag}</p>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(24px,2.6vw,32px)", lineHeight: 1.15, color: NAVY, marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 16, lineHeight: 1.75, color: "#555", marginBottom: 28 }}>{s.body}</p>
                  <div style={{ borderTop: `2px solid ${NAVY}`, marginBottom: 28 }}>
                    {s.specs.map(([k, v], j) => (
                      <div key={j} style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "12px 0", borderBottom: "1px solid #e3e7ee" }}>
                        <span style={{ fontFamily: I, fontSize: 14, color: "#7a8499", flexShrink: 0 }}>{k}</span>
                        <span style={{ fontFamily: P, fontWeight: 700, fontSize: 14, color: NAVY, textAlign: "right" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    {([["Property types", s.property], ["Best fit", s.fit], ["Good to know", s.know]] as [string,string][]).map(([k, v], j) => (
                      <div key={j} style={{ marginBottom: 20 }}>
                        <p style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: NAVY, marginBottom: 6 }}>{k}</p>
                        <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.7, color: "#555" }}>{v}</p>
                      </div>
                    ))}
                  </div>
                  <a href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noopener noreferrer" : undefined}
                    style={{ alignSelf: "flex-start", marginTop: 12, fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", background: NAVY, color: W, padding: "16px 28px", textDecoration: "none" }}>
                    {s.cta} →
                  </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginTop: 40, maxWidth: 760 }}>
              Deal doesn&apos;t look like either one? Send it anyway. Bridge and private lending cover a lot of ground between these two, and a five minute call will tell you where you stand.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FAST50 ── */}
      <section id="fast50" style={{ padding: "110px 0", background: GREEN }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: YELLOW, flexShrink: 0 }} />
              Featured Program · Fast50
            </p>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(34px,4.8vw,60px)", lineHeight: 1.04, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Equity in the property? Fast50 can close it.
            </h2>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: 20, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              Fast50 is for the borrower a bank won&apos;t touch. It qualifies on the equity in the property, not on your credit, and it is built to close fast. A day of title seasoning and a day past a bankruptcy or a notice of default is enough to be eligible.
            </p>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 40, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              No credit check to get a read. If you have the equity and you need to move, this is the one to ask about.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}>
              <a href="#submit-deal" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 40px", textDecoration: "none" }}>
                Submit a Deal →
              </a>
              <a href="https://calendly.com/acomacapitalpartners/new-meeting" target="_blank" rel="noopener" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,0.5)", color: W, padding: "16px 40px", textDecoration: "none" }}>
                Schedule A Call →
              </a>
            </div>
            <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
              Business-purpose financing on investment property.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── LOAN PROGRAMS ── */}
      <section id="programs" style={{ padding: "120px 0", background: "#f4f6f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
              02 / Loan Programs
            </p>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20, maxWidth: 820 }}>
              Six ways to get a commercial deal financed.
            </h2>
            <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 56, maxWidth: 760 }}>
              Every program below covers purchases and refinances, and most allow cash-out. Find the one that sounds like your situation, or send us the deal and we will tell you where it fits.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="hp-arv" style={{ background: NAVY, marginBottom: 32, overflow: "hidden" }}>
              <div className="hp-arv-img" style={{ position: "relative", minHeight: 260 }}>
                <Image src="/program-arv.jpg" alt="Home mid-renovation financed with an ARV fix-and-flip loan" fill sizes="(max-width: 860px) 100vw, 480px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px 44px" }}>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: 12 }}>Featured · ARV Fix &amp; Flip</p>
                <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(24px,2.6vw,32px)", lineHeight: 1.15, color: W, marginBottom: 14 }}>Buying to renovate? We lend on the after-repair value.</h3>
                <p style={{ fontFamily: I, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 22 }}>
                  Short-term money to buy and rehab, sized against what the property will be worth finished, not just what it costs today. The loan funds the improvements.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", marginBottom: 26 }}>
                  {([["Leverage","Up to 75% of ARV"],["Loan size","$75K to $2M"],["Structure","12-mo interest-only"],["Use","Purchase + rehab"]] as [string,string][]).map(([k,v],i)=>(
                    <div key={i}>
                      <div style={{ fontFamily: I, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{k}</div>
                      <div style={{ fontFamily: P, fontWeight: 700, fontSize: 15, color: W }}>{v}</div>
                    </div>
                  ))}
                </div>
                <a href="#submit-deal" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "15px 32px", textDecoration: "none", display: "inline-block" }}>Submit a Deal →</a>
              </div>
            </div>
          </FadeUp>
          <div className="hp-programs">
            {([
              { color: GREEN, img: "/program-bank-statement.jpg", who: "Business owners", name: "Bank Statement", body: "Twelve months of business bank statements take the place of tax returns. Built for the owner who occupies the building.", specs: [["Loan size","$100K to $2M"],["Leverage","Up to 80% LTV"],["Credit","650+"],["Cash-out","Available"]], href: "/broker-programs/bank-statement" },
              { color: BLUE, img: "/program-lite-doc.jpg", who: "Commercial investors", name: "Lite Doc", body: "Reduced paperwork for investors with good credit and a property that performs. No tax returns and no 4506-T.", specs: [["Loan size","$100K to $2M"],["Leverage","Up to 80% LTV"],["Credit","650+"],["Terms","5-year ARM or 30-year fixed"]], href: "/broker-programs/lite-doc" },
              { color: YELLOW, img: "/program-no-doc.jpg", who: "Strong credit, little paperwork", name: "No Doc", body: "No tax returns, bank statements or operating statements. Credit, equity and the appraisal carry the file.", specs: [["Loan size","$100K to $1M"],["Leverage","Up to 75% LTV"],["Credit","700+"],["Terms","5-year ARM or 30-year fixed"]], href: "/broker-programs/no-doc" },
              { color: GREEN, img: "/program-rental.jpg", who: "Rental investors", name: "Rental Property", body: "Thirty-year fixed financing on one to four unit rentals, qualified on the property and your credit.", specs: [["Property","1 to 4 unit rentals"],["Leverage","Up to 75% LTV"],["Income docs","None required"],["Option","Interest-only available"]], href: "#sweet-investor" },
              { color: BLUE, img: "/program-multifamily.jpg", who: "Apartment and mixed-use owners", name: "Multifamily & Mixed-Use", body: "Long-term fixed money for buildings of five units or more and for mixed-use property, with no balloon payment.", specs: [["Loan size","From $100K"],["Leverage","Up to 75% LTV"],["Structure","30-year fixed, fully amortizing"],["Income docs","No tax returns"]], href: "#sweet-investor" },
              { color: YELLOW, img: "/program-bridge.jpg", who: "Time-sensitive deals", name: "Bridge & Private Lending", body: "Short-term money for acquisitions that cannot wait on a bank. Qualified on the property and your plan to pay the loan off.", specs: [["Loan size","$100K to $20M"],["Basis","Property and exit"],["Use","Purchase or refinance"],["Property","Most commercial types"]], href: "/commercial-loans#bridge" },
            ] as { color: string; img: string; who: string; name: string; body: string; specs: string[][]; href: string }[]).map((c, i) => (
              <FadeUp key={i} delay={(i % 3) * 0.08}>
                <a href={c.href} style={{ display: "flex", flexDirection: "column", height: "100%", background: W, borderTop: `6px solid ${c.color}`, textDecoration: "none", boxShadow: "0 1px 3px rgba(32,42,84,0.08)" }}>
                  <div className="hp-prog-img" style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
                    <Image src={c.img} alt={c.name + " financing"} fill sizes="(max-width: 768px) 100vw, 380px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a8499", marginBottom: 10 }}>{c.who}</p>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 24, lineHeight: 1.15, color: NAVY, marginBottom: 12 }}>{c.name}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.7, color: "#555", marginBottom: 20, flex: 1 }}>{c.body}</p>
                  <div style={{ borderTop: "1px solid #e3e7ee", marginBottom: 20 }}>
                    {c.specs.map(([k, v], j) => (
                      <div key={j} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "1px solid #e3e7ee" }}>
                        <span style={{ fontFamily: I, fontSize: 13, color: "#7a8499" }}>{k}</span>
                        <span style={{ fontFamily: P, fontWeight: 700, fontSize: 13, color: NAVY, textAlign: "right" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <span style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: NAVY }}>Learn more →</span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMIT A DEAL ── */}
      <section id="submit-deal" style={{ padding: "120px 0", background: W, scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-submit">
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                Submit a Deal
              </p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                Have a deal? Send it over.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 28 }}>
                Drop the basics and we come back with a straight read on whether it fits and roughly where it lands. No account to set up, no appointment to book. If you would rather talk it through first, book a call instead.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {([
                  ["Fast", "Most submissions get a first read the same day."],
                  ["Direct", "It goes straight to our desk, not a call center."],
                  ["Private", "We don&apos;t share what you send. Ever."],
                ] as [string,string][]).map(([t,b],i)=>(
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ width: 10, height: 10, marginTop: 6, background: i===0?GREEN:i===1?BLUE:YELLOW, flexShrink: 0 }} />
                    <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.6, color: "#555" }}><b style={{ color: NAVY, fontFamily: P }}>{t}.</b> <span dangerouslySetInnerHTML={{ __html: b }} /></p>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: I, fontSize: 14, color: "#8a93a3", marginTop: 28 }}>
                Prefer the phone? <a href="tel:7207721327" style={{ color: NAVY, fontWeight: 600, textDecoration: "none" }}>(720) 772-1327</a>
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div style={{ background: "#f4f6f9", borderTop: `6px solid ${GREEN}`, padding: "36px 32px" }}>
                <DealForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <Banner src="/hero.jpeg" alt="Handshake over signed loan documents" pos="center 70%" bar={YELLOW} />
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
              04 / How It Works
            </p>
            <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 56, maxWidth: 760 }}>
              From first call to closing table.
            </h2>
          </FadeUp>
          <div className="hp-steps">
            {([
              ["01", "Send us the deal", "The property address, the price or value, what you need to borrow and a rough idea of your credit. A phone call covers it."],
              ["02", "Get a straight read", "We tell you which program fits and what the loan is likely to look like. If the deal will not work, you hear that too."],
              ["03", "See terms in writing", "We take the file to underwriting and bring back written terms for you to review before you spend money on reports."],
              ["04", "Close", "Appraisal, title and loan documents. We stay on the file with you until the loan funds."],
            ] as [string,string,string][]).map(([n, t, b], i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ borderTop: `4px solid ${i % 2 === 0 ? GREEN : BLUE}`, paddingTop: 24 }}>
                  <div style={{ fontFamily: P, fontWeight: 900, fontSize: 40, color: "#d5dbe6", lineHeight: 1, marginBottom: 14 }}>{n}</div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 19, color: NAVY, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.7, color: "#555" }}>{b}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div style={{ marginTop: 64, background: GREEN, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: P, fontWeight: 900, fontSize: 24, color: W, marginBottom: 6 }}>No upfront fees.</p>
                <p style={{ fontFamily: I, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.9)", maxWidth: 620 }}>Acoma is paid when your loan closes. You will see our fee in writing before you commit to anything.</p>
              </div>
              <a href="https://calendly.com/acomacapitalpartners/new-meeting" target="_blank" rel="noopener"
                style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 36px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
                Schedule A Call →
              </a>
            </div>
          </FadeUp>
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
              Pick whichever way of reaching us works for you.
            </p>
          </FadeUp>
          <div className="hp-triple">
            {([
              { href: "https://calendly.com/acomacapitalpartners/new-meeting", bg: GREEN, titleColor: W, bodyColor: "rgba(255,255,255,0.75)", labelColor: "rgba(255,255,255,0.55)", icon: "📅", micro: "Schedule", title: "Schedule A Call", body: "Get on the calendar with Gino directly. No middlemen.", external: true },
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


      {/* ── PARTNERS ── */}
      <section id="partners" style={{ padding: "110px 0", background: NAVY, borderTop: `6px solid ${YELLOW}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>For Brokers &amp; Professionals</p>
              <a href="/partners" style={{ display: "block", maxWidth: 440, width: "100%" }} aria-label="Work with Acoma — the market overlooked you, we see the value">
                <img src="/partners-hero.jpg" alt="Five seasoned brokers and professionals at a conference table. The market overlooked you. We see the value. Have a deal in mind? Let's talk." style={{ width: "100%", height: "auto", display: "block" }} />
              </a>
              <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", maxWidth: 620, margin: "36px 0 32px" }}>
                They saw your age. We see years of trust, hard-earned experience, and relationships with people who sign checks. If you have a deal that fits, work it with us or refer it over. Either way, you get paid when it closes.
              </p>
              <a href="/partners" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 44px", textDecoration: "none" }}>
                Read Their Story →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div className="hp-about">
          <FadeUp>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 580, overflow: "hidden" }}>
                <Image src="/about.jpeg" alt="Denver, Colorado" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 4, background: GREEN }} />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-block", width: 32, height: 3, background: BLUE, flexShrink: 0 }} />
                05 / About
              </p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.05, color: NAVY, marginBottom: 20 }}>
                Acoma Capital Partners
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 24 }}>
                Acoma Capital Partners is a commercial real estate brokerage based in Denver. Gino Rodrigues, our Principal and Responsible Broker, has held a Colorado broker license since 2004 and has spent those years on commercial sales and financing for owners and investors who needed someone to find a way.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 24 }}>
                We work as a broker on every deal. The loans come from our lending network and the buyers come from our relationships, which keeps us on your side of the table from start to finish.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#777", marginBottom: 56 }}>
                Financing is arranged nationwide. Property sales are handled directly in Colorado and through licensed local partners in other states.
              </p>
            </FadeUp>
          </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0", background: NAVY, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/about.jpeg" alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 40%", opacity: 0.16 }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
          <div className="hp-contact">
            <FadeUp>
              <p style={{ fontFamily: P, fontWeight: 700, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>Let&apos;s Work Together</p>
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Let&apos;s talk<br />about your deal.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: 52 }}>
                Buying, selling or borrowing, bring it to us and you will hear back from Gino.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <a href="https://calendly.com/acomacapitalpartners/new-meeting" target="_blank" rel="noopener"
                  style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: YELLOW, color: NAVY, padding: "18px 36px", textDecoration: "none" }}>
                  Schedule A Call →
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
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>Principal &amp; Responsible Broker, Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>Denver, Colorado</p>
                <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.9 }}>
                  <a href="tel:7207721327" style={{ color: W, textDecoration: "none", fontWeight: 600 }}>(720) 772-1327</a><br />
                  <a href="mailto:ginorod@acomacapitalpartners.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", wordBreak: "break-word" as const }}>ginorod@acomacapitalpartners.com</a><br />
                  <a href="https://www.acomacapitalpartners.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>www.acomacapitalpartners.com</a>
                </p>
                <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 10 }}>CO Real Estate License EC.100052724</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "28px 0" }} />
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Currently Offering</p>
                <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                  <a href="/commercial-loans" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Commercial Loans · Owners &amp; Investors</a><br />
                  <a href="/broker-programs" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Deal Desk · Bring Us the Deal</a><br />
                  <a href="/commercial-loans#bridge" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Bridge &amp; Private Lending · Nationwide</a><br />
                  <a href="/partners" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Work With Us · For Brokers &amp; Professionals</a>
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
              <img src="/acoma-logo-white.png" alt="Acoma Capital Partners" style={{ height: 32, width: "auto", display: "block", marginBottom: 8 }} />
              <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Denver, Colorado</p>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["#programs","Programs"],["#sweet-spots","Sweet Spots"],["#about","About"],["#contact","Contact"]].map(([h,l]) => (
                <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:7207721327" style={{ fontFamily: P, fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "block", marginBottom: 4 }}>(720) 772-1327</a>
              <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <p style={{ fontFamily: I, fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.35)", maxWidth: 860, marginBottom: 24 }}>
            Acoma Capital Partners arranges financing through its lending network and is not a lender. Loans are for commercial and investment property only. Programs, terms and eligibility are subject to underwriting approval and may change without notice.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Acoma Capital Partners, Inc.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
