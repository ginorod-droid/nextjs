"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const B = "#1D4ED8";   // electric blue
const K = "#0a0a0a";   // near black
const W = "#ffffff";   // white
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
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const eyebrow = (text: string, light = false) => (
    <p style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: light ? "rgba(255,255,255,0.5)" : B, marginBottom: 16 }}>
      {text}
    </p>
  );

  const heading = (text: string, light = false, size = "clamp(32px,4vw,52px)") => (
    <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: size, lineHeight: 1.05, color: light ? W : K, marginBottom: 20 }}
      dangerouslySetInnerHTML={{ __html: text }} />
  );

  return (
    <main style={{ fontFamily: I, background: W, color: K }}>

      {/* ── BRAND STRIPE ── */}
      <div style={{ height: 3, background: B, position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }} />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 3, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : W,
        borderBottom: `1px solid ${scrolled ? "#e5e7eb" : "transparent"}`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all .3s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <Image src="/acoma-icon.png" alt="Acoma" width={36} height={36} style={{ height: 36, width: "auto" }} />
            <span style={{ fontFamily: P, fontWeight: 800, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", color: K }}>Acoma Capital</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {[["#opportunities","Opportunities"],["#services","Services"],["#about","About"]].map(([h,l]) => (
              <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", textDecoration: "none" }}>{l}</a>
            ))}
            <a href="#contact" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", background: B, color: W, padding: "12px 24px", textDecoration: "none" }}>
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: K, overflow: "hidden", paddingTop: 79 }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.jpeg" alt="" fill style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 0.5 }} priority />
        </div>
        {/* Blue vertical accent line */}
        <div style={{ position: "absolute", left: 40, top: "20%", bottom: "20%", width: 2, background: B, opacity: 0.7 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "80px 40px 100px", width: "100%" }}>
          <FadeUp>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: B, marginBottom: 32 }}>
              Colorado · Commercial Real Estate · Capital Solutions
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(56px,9vw,110px)", lineHeight: 0.95, color: W, marginBottom: 48, letterSpacing: "-0.02em" }}>
              Capital<br />
              <span style={{ color: W, WebkitTextStroke: `1px rgba(255,255,255,0.3)`, WebkitTextFillColor: "transparent" }}>That</span>{" "}
              Moves.<br />
              Deals{" "}
              <span style={{ color: B }}>That</span><br />
              Close.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontFamily: I, fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", maxWidth: 480, marginBottom: 52 }}>
              Real estate acquisitions, investment sales, and hard money financing for operators and investors across Colorado.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#opportunities" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: B, color: W, padding: "18px 40px", textDecoration: "none" }}>
                View Opportunities →
              </a>
              <a href="#contact" style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "18px 40px", textDecoration: "none" }}>
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Bottom scroll hint */}
        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.3)" }} />
          <span style={{ fontFamily: P, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: W, borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[["$10M+","Transactions Facilitated"],["15+","Years Experience"],["Colorado","Based & Focused"],["2","Active Listings"]].map(([n,l],i) => (
            <FadeUp key={i} delay={i*0.08}>
              <div style={{ padding: "56px 24px", textAlign: "center", borderRight: i<3?"1px solid #f0f0f0":"none" }}>
                <div style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(32px,3.5vw,52px)", color: B, marginBottom: 8, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa" }}>{l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
            {/* Image with overlay accent */}
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: 560, overflow: "hidden" }}>
                  <Image src="/services.jpeg" alt="CRE Services" fill style={{ objectFit: "cover" }} />
                </div>
                {/* Blue accent corner */}
                <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${B}`, zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: -16, right: -16, width: 80, height: 80, background: B, zIndex: -1 }} />
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                {eyebrow("What We Do")}
                {heading("We help you find the right places to buy — and know when it's time to sell.")}
                <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 44 }}>
                  So your money works harder. Acoma handles commercial acquisitions, investment sales, and deal structuring for clients who need a team that understands both the asset and the capital side.
                </p>
              </FadeUp>
              <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Commercial Acquisitions","Investment Sales","Site Selection","Development Opportunities","Portfolio Strategy"].map((s,i) => (
                  <FadeUp key={i} delay={i*0.06}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
                      <div style={{ width: 6, height: 6, background: B, flexShrink: 0 }} />
                      <span style={{ fontFamily: P, fontWeight: 600, fontSize: 14, color: K, letterSpacing: "0.02em" }}>{s}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITIES ── */}
      <section id="opportunities" style={{ padding: "120px 0", background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
              <div>
                {eyebrow("Current Listings")}
                {heading("Two active opportunities<br/>available now.")}
              </div>
              <p style={{ fontFamily: I, fontSize: 16, color: "#888", maxWidth: 320, lineHeight: 1.7 }}>
                Commercial land in Pueblo and a licensed cannabis operation in Denver.
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>

            {/* Card 1 — Pueblo Parcel */}
            <FadeUp delay={0.1}>
              <div style={{ background: W, border: "1px solid #eee", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <div style={{ background: K, padding: "40px 40px 32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 24, height: 2, background: B }} />
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: B }}>Commercial Land · Pueblo, CO</span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 12 }}>
                    10-Acre Parcel<br />I-25 Exit 104
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>Pinon Ridge Commercial Center · Pueblo, Colorado</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 8 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: B, lineHeight: 1, letterSpacing: "-0.02em" }}>$2,500,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["10 Acres","B-3 Zoning","I-25 Access","$250K/Acre"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", background: "#f5f5f5", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Adjacent to TravelCenters of America and Love&apos;s Travel Stop. Direct interstate access, B-3 zoning, no rezoning required. $114M CDOT interchange upgrade underway.
                  </p>
                  <a href="/pueblo-parcel" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: B, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 — Let's Blaze */}
            <FadeUp delay={0.18}>
              <div style={{ background: W, border: "1px solid #eee", display: "flex", flexDirection: "column", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <div style={{ background: K, padding: "40px 40px 32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 24, height: 2, background: B }} />
                    <span style={{ fontFamily: P, fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: B }}>Business Sale · Denver, CO</span>
                  </div>
                  <h3 style={{ fontFamily: P, fontWeight: 900, fontSize: 28, color: W, lineHeight: 1.1, marginBottom: 12 }}>
                    Let&apos;s Blaze Medical<br />Dispensary
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>120 S. Kalamath St. · Baker District, Denver, CO</p>
                </div>
                <div style={{ padding: "36px 40px 40px", display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
                  <div>
                    <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 8 }}>Asking Price</p>
                    <p style={{ fontFamily: P, fontWeight: 900, fontSize: 44, color: B, lineHeight: 1, letterSpacing: "-0.02em" }}>$595,000</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {["Medical License","Social Equity","Zero Violations","800 Sq Ft"].map(t => (
                      <span key={t} style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", background: "#f5f5f5", padding: "6px 12px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: I, fontSize: 14, color: "#777", lineHeight: 1.75 }}>
                    Active, revenue-generating medical dispensary in Denver&apos;s Baker District. Denver has stopped issuing new retail cannabis licenses — making this asset genuinely irreplaceable.
                  </p>
                  <a href="https://premiumadvisoryservices.com" target="_blank" rel="noreferrer" style={{ fontFamily: P, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: B, color: W, padding: "16px 28px", textDecoration: "none", alignSelf: "flex-start", marginTop: "auto" }}>
                    View Listing →
                  </a>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── HARD MONEY ── */}
      <section id="hardmoney" style={{ padding: "120px 0", background: K }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          <div>
            <FadeUp>
              {eyebrow("Capital Services")}
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 32, letterSpacing: "-0.02em" }}>
                Need money fast<br />to close a deal?
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
                Hard money loans are short-term loans backed by the property itself — not your credit score. They cost more, but they move quick when the bank says no or takes too long.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.35)", marginBottom: 52 }}>
                Capital that moves at the speed of a deal — not the speed of a committee.
              </p>
              <a href="/bridge-loans" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: B, color: W, padding: "18px 40px", textDecoration: "none" }}>
                Discuss Your Loan →
              </a>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 460, overflow: "hidden" }}>
                <Image src="/hardmoney.jpeg" alt="Hard Money Loans" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(29,78,216,0.15) 0%, transparent 60%)" }} />
              </div>
              {/* Blue accent */}
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: B }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: W }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          <FadeUp>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: 580, overflow: "hidden" }}>
                <Image src="/about.jpeg" alt="Denver Colorado" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} />
              </div>
              <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: B }} />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              {eyebrow("About Acoma")}
              {heading("Acoma Capital Partners")}
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#666", marginBottom: 24 }}>
                A Colorado-based real estate brokerage specializing in both traditional and alternative financing solutions. Founded by Gino Rodrigues, who brings over 15 years of experience in banking and real estate.
              </p>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.8, color: "#888", marginBottom: 56 }}>
                We&apos;ve successfully facilitated over $10 million in transactions — from conventional acquisitions to complex alternative financing structures.
              </p>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              {[["$10M+","Transactions Facilitated"],["15+","Years Experience"]].map(([n,l],i) => (
                <FadeUp key={i} delay={i*0.1}>
                  <div>
                    <div style={{ width: 32, height: 3, background: B, marginBottom: 16 }} />
                    <div style={{ fontFamily: P, fontWeight: 900, fontSize: 40, color: K, letterSpacing: "-0.02em", marginBottom: 8 }}>{n}</div>
                    <div style={{ fontFamily: I, fontSize: 13, color: "#999", lineHeight: 1.5 }}>{l}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0", background: B }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
            <FadeUp>
              {eyebrow("Let's Work Together")}
              <h2 style={{ fontFamily: P, fontWeight: 900, fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.0, color: W, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Let&apos;s talk<br />about your deal.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", marginBottom: 52 }}>
                Whether you&apos;re acquiring, selling, or need capital to close — reach out directly. No intake form between you and the conversation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:7207244185" style={{ fontFamily: P, fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", background: W, color: B, padding: "18px 36px", textDecoration: "none", display: "inline-block", alignSelf: "flex-start" }}>
                  (720) 724-4185 →
                </a>
                <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.4)", color: W, padding: "18px 36px", textDecoration: "none", display: "inline-block", alignSelf: "flex-start" }}>
                  Send an Email →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: 80 }}>
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Direct Contact</p>
                <p style={{ fontFamily: P, fontWeight: 700, fontSize: 22, color: W, marginBottom: 8 }}>Gino Rodrigues</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Founder, Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Denver, Colorado</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "28px 0" }} />
                <p style={{ fontFamily: P, fontWeight: 600, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>Currently Offering</p>
                <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  <a href="/pueblo-parcel" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>10-Acre Commercial Parcel · Pueblo, CO</a><br />
                  Let&apos;s Blaze Medical Dispensary · Denver, CO<br />
                  <a href="/bridge-loans" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>CRE Hard Money Loans · Colorado</a>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: W, borderTop: "1px solid #eee", padding: "52px 0 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Image src="/acoma-icon.png" alt="Acoma" width={40} height={40} style={{ height: 40, width: "auto" }} />
              <div>
                <p style={{ fontFamily: P, fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: K }}>Acoma Capital Partners</p>
                <p style={{ fontFamily: I, fontSize: 12, color: "#aaa", marginTop: 2 }}>Denver, Colorado</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["#opportunities","Opportunities"],["#services","Services"],["#about","About"],["#contact","Contact"]].map(([h,l]) => (
                <a key={h} href={h} style={{ fontFamily: P, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "#999", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:7207244185" style={{ fontFamily: P, fontWeight: 600, fontSize: 13, color: K, textDecoration: "none", display: "block", marginBottom: 4 }}>(720) 724-4185</a>
              <a href="mailto:ginorod@acomacapitalpartners.com" style={{ fontFamily: I, fontSize: 12, color: "#888", textDecoration: "none" }}>ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: I, fontSize: 12, color: "#bbb" }}>© 2026 Acoma Capital Partners, Inc.</p>
            <p style={{ fontFamily: I, fontSize: 11, color: "#ccc", maxWidth: 560, textAlign: "right" }}>
              For informational purposes only. Not an offer to sell or solicitation to buy. All figures believed accurate but not guaranteed.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
