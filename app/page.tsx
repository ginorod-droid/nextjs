"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="font-[var(--font-inter)] bg-white text-[#0a0a0a]">

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-gray-200 shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="/">
            <Image
              src="/acoma-horizontal.png"
              alt="Acoma Capital Partners"
              width={180}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#opportunities" className="text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors tracking-wide">Opportunities</a>
            <a href="#services" className="text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors tracking-wide">Services</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors tracking-wide">About</a>
            <a
              href="#contact"
              className="bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#1a44c2] transition-colors tracking-wide"
            >
              Get in Touch
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-700" />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#opportunities" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Opportunities</a>
            <a href="#services" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="text-sm font-semibold text-[#1D4ED8]" onClick={() => setMenuOpen(false)}>Get in Touch</a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpeg"
            alt="Acoma Capital Partners"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
          <FadeUp>
            <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Colorado Commercial Real Estate
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="font-[var(--font-poppins)] font-black text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
            >
              Capital That Moves.<br />
              Deals That Close.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              Acoma Capital Partners structures commercial real estate acquisitions, investment sales, and hard money financing for operators and investors across Colorado.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#opportunities"
                className="bg-[#1D4ED8] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#1a44c2] transition-colors"
              >
                View Opportunities
              </a>
              <a
                href="#contact"
                className="border border-white/50 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: "$10M+", label: "Transactions Facilitated" },
              { num: "15+", label: "Years Experience" },
              { num: "Colorado", label: "Based & Focused" },
              { num: "2", label: "Active Listings" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.1} className="border-r border-gray-200 last:border-r-0 px-8 py-8 text-center">
                <div
                  className="font-[var(--font-poppins)] font-black text-[#1D4ED8] mb-1"
                  style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
                >
                  {s.num}
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">
                  {s.label}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRE SERVICES ── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src="/services.jpeg"
                  alt="Real estate advisory"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-4">What We Do</p>
                <h2
                  className="font-[var(--font-poppins)] font-black text-[#0a0a0a] leading-tight mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  We help you find the right places to buy — and know when it&apos;s time to sell.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-10">
                  So your money works harder. Acoma handles commercial acquisitions, investment sales, and deal structuring for clients who need a team that understands both the asset and the capital side.
                </p>
              </FadeUp>
              <div className="flex flex-col gap-3">
                {[
                  "Commercial Acquisitions",
                  "Investment Sales",
                  "Site Selection",
                  "Development Opportunities",
                  "Portfolio Strategy",
                ].map((s, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <div className="border-l-4 border-[#1D4ED8] pl-4 py-2 bg-gray-50 text-sm font-semibold text-gray-700 tracking-wide">
                      {s}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT OPPORTUNITIES ── */}
      <section id="opportunities" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-4">Current Listings</p>
            <h2
              className="font-[var(--font-poppins)] font-black text-[#0a0a0a] leading-tight mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Two active opportunities — available now.
            </h2>
            <p className="text-gray-500 mb-12 max-w-xl">
              Commercial land in Pueblo and a licensed cannabis operation in Denver. Both are ready for qualified buyers.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 — Rev Elders */}
            <FadeUp delay={0.1}>
              <div className="bg-white border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#0a0a0a] px-8 py-7">
                  <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.15em] uppercase mb-3">Commercial Land · Pueblo, CO</p>
                  <h3 className="font-[var(--font-poppins)] font-black text-white text-2xl leading-tight mb-2">
                    10-Acre Parcel<br />I-25 Exit 104
                  </h3>
                  <p className="text-gray-400 text-sm">Pinon Ridge Commercial Center · Pueblo, Colorado</p>
                </div>
                <div className="px-8 py-7 flex flex-col gap-5 flex-1">
                  <div>
                    <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Asking Price</p>
                    <p className="font-[var(--font-poppins)] font-black text-[#1D4ED8] text-4xl">$2,500,000</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["10 Acres", "B-3 Zoning", "I-25 Access", "$250K/Acre"].map((t) => (
                      <span key={t} className="text-xs font-semibold tracking-wide text-gray-600 bg-gray-100 px-3 py-1.5">{t}</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Adjacent to TravelCenters of America and Love&apos;s Travel Stop. Direct interstate access, B-3 zoning, no rezoning required. $114M CDOT interchange upgrade underway.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="/rev-elders"
                      className="inline-block bg-[#1D4ED8] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#1a44c2] transition-colors"
                    >
                      View Listing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 — LetsBlaze */}
            <FadeUp delay={0.2}>
              <div className="bg-white border border-gray-200 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#0a0a0a] px-8 py-7">
                  <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.15em] uppercase mb-3">Business Sale · Denver, CO</p>
                  <h3 className="font-[var(--font-poppins)] font-black text-white text-2xl leading-tight mb-2">
                    Let&apos;s Blaze Medical<br />Dispensary
                  </h3>
                  <p className="text-gray-400 text-sm">120 S. Kalamath St. · Baker District, Denver, CO</p>
                </div>
                <div className="px-8 py-7 flex flex-col gap-5 flex-1">
                  <div>
                    <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Asking Price</p>
                    <p className="font-[var(--font-poppins)] font-black text-[#1D4ED8] text-4xl">$595,000</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Active Medical License", "Social Equity Designee", "Zero Violations", "800 Sq Ft"].map((t) => (
                      <span key={t} className="text-xs font-semibold tracking-wide text-gray-600 bg-gray-100 px-3 py-1.5">{t}</span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Active, revenue-generating medical dispensary in Denver&apos;s Baker District. Denver has stopped issuing new retail cannabis licenses — making this asset genuinely irreplaceable.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="/letsblaze"
                      className="inline-block bg-[#1D4ED8] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#1a44c2] transition-colors"
                    >
                      View Listing →
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── HARD MONEY LOANS ── */}
      <section id="hardmoney" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-4">Capital Services</p>
                <h2
                  className="font-[var(--font-poppins)] font-black text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  Need money fast to close a deal?
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Hard money loans are short-term loans backed by the property itself — not your credit score. They cost more, but they move quick when the bank says no or takes too long.
                </p>
                <p className="text-gray-500 leading-relaxed mb-10">
                  We work with operators and investors across Colorado who need capital that moves at the speed of a deal — not the speed of a committee.
                </p>
                <a
                  href="mailto:ginorod@acomacapitalpartners.com"
                  className="inline-block bg-[#1D4ED8] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#1a44c2] transition-colors"
                >
                  Discuss Your Loan
                </a>
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/hardmoney.jpeg"
                  alt="CRE Hard Money Loans"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/about.jpeg"
                  alt="Denver, Colorado"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <p className="text-[#1D4ED8] text-xs font-bold tracking-[0.2em] uppercase mb-4">About</p>
                <h2
                  className="font-[var(--font-poppins)] font-black text-[#0a0a0a] leading-tight mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  Acoma Capital Partners
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Acoma Capital Partners is a Colorado-based real estate brokerage specializing in both traditional and alternative financing solutions. Founded by Gino Rodrigues, who brings over 15 years of experience in banking and real estate, our team understands the complexities of today&apos;s market and the unique challenges investors face.
                </p>
                <p className="text-gray-500 leading-relaxed mb-10">
                  Together with our Director of Operations, we&apos;ve successfully facilitated over $10 million in transactions, helping clients navigate everything from conventional deals to complex alternative financing structures.
                </p>
              </FadeUp>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "$10M+", label: "Transactions Facilitated" },
                  { num: "15+", label: "Years in Banking & Real Estate" },
                ].map((s, i) => (
                  <FadeUp key={i} delay={i * 0.1}>
                    <div className="border-l-4 border-[#1D4ED8] pl-5">
                      <div className="font-[var(--font-poppins)] font-black text-[#1D4ED8] text-3xl mb-1">{s.num}</div>
                      <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-[#1D4ED8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2
              className="font-[var(--font-poppins)] font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Let&apos;s talk about your deal.
            </h2>
            <p className="text-white/70 text-lg max-w-lg mx-auto mb-10">
              Whether you&apos;re acquiring, selling, or need capital to close — reach out directly. No intake form between you and the conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:7207244185"
                className="bg-white text-[#1D4ED8] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gray-100 transition-colors"
              >
                (720) 724-4185
              </a>
              <a
                href="mailto:ginorod@acomacapitalpartners.com"
                className="border-2 border-white text-white font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-[#1D4ED8] transition-colors"
              >
                Send an Email
              </a>
            </div>
            <p className="text-white/50 text-sm mt-8">
              Gino Rodrigues · Acoma Capital Partners · Denver, Colorado
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/acoma-icon.png"
                alt="Acoma Capital Partners"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-[var(--font-poppins)] font-bold text-sm tracking-widest uppercase text-[#0a0a0a]">
                Acoma Capital Partners
              </span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#opportunities" className="text-sm text-gray-500 hover:text-[#1D4ED8] transition-colors">Opportunities</a>
              <a href="#services" className="text-sm text-gray-500 hover:text-[#1D4ED8] transition-colors">Services</a>
              <a href="#about" className="text-sm text-gray-500 hover:text-[#1D4ED8] transition-colors">About</a>
              <a href="#contact" className="text-sm text-gray-500 hover:text-[#1D4ED8] transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <a href="tel:7207244185" className="hover:text-[#1D4ED8] transition-colors">(720) 724-4185</a>
              <span className="mx-2">·</span>
              <a href="mailto:ginorod@acomacapitalpartners.com" className="hover:text-[#1D4ED8] transition-colors">ginorod@acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">© 2026 Acoma Capital Partners, Inc. · Denver, Colorado</p>
            <p className="text-xs text-gray-400 text-center md:text-right max-w-xl">
              This website is for informational purposes only and does not constitute an offer to sell or solicitation to buy any security or real property interest. All figures are believed to be accurate but not guaranteed.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
