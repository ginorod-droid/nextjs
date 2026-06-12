"use client";
import { useEffect, useState } from "react";

const NAVY   = "#202A54";
const YELLOW = "#F6D200";
const W = "#ffffff";
const P = "'Poppins', sans-serif";
const I = "'Inter', sans-serif";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbze_jrkesBUQyu4rVUFko2EGoXDhOGw1WiNJ4iGaOuwW7rczi3EjG-F4uIxXYV93Gy4/exec";
const STORAGE_KEY = "acoma_lead_popup";

export default function LeadCapture() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot — bots fill it, humans never see it
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.4) show();
    };
    const t = setTimeout(show, 8000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, "dismissed"); } catch {}
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ name, email, website: hp, page: window.location.pathname }),
      });
      const out = await res.json();
      if (!out.ok) throw new Error("failed");
      setStatus("done");
      try { localStorage.setItem(STORAGE_KEY, "subscribed"); } catch {}
      setTimeout(() => setOpen(false), 2400);
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(10,10,10,0.55)", backdropFilter: "blur(3px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: NAVY, width: "100%", maxWidth: 460, padding: "44px 40px 40px",
          position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          borderTop: `5px solid ${YELLOW}`,
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute", top: 14, right: 16, background: "none", border: "none",
            color: "rgba(255,255,255,0.45)", fontSize: 22, cursor: "pointer", lineHeight: 1,
          }}
        >
          ×
        </button>

        {status === "done" ? (
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontFamily: P, fontWeight: 700, fontSize: 20, color: W, marginBottom: 8 }}>
              You&apos;re on the list.
            </p>
            <p style={{ fontFamily: I, fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
              New opportunities will reach you before they&apos;re marketed.
            </p>
          </div>
        ) : (
          <>
            <p style={{ fontFamily: P, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: YELLOW, marginBottom: 12 }}>
              Acoma Capital Partners
            </p>
            <h3 style={{ fontFamily: P, fontWeight: 800, fontSize: 26, lineHeight: 1.2, color: W, marginBottom: 12 }}>
              See new listings first.
            </h3>
            <p style={{ fontFamily: I, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
              New listings and financing opportunities go to our list before they&apos;re
              marketed broadly. Leave your email and you&apos;ll see them first.
            </p>
            <form onSubmit={submit}>
              <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: -9999, height: 0, width: 0, opacity: 0 }}
              />
              <input
                type="text"
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%", padding: "13px 16px", marginBottom: 10, fontFamily: I,
                  fontSize: 14, color: W, background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)", outline: "none",
                }}
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%", padding: "13px 16px", marginBottom: 16, fontFamily: I,
                  fontSize: 14, color: W, background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)", outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%", padding: "15px 0", fontFamily: P, fontWeight: 700,
                  fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
                  background: YELLOW, color: NAVY, border: "none",
                  cursor: status === "sending" ? "wait" : "pointer",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? "One moment…" : "Keep Me Informed"}
              </button>
              {status === "error" && (
                <p style={{ fontFamily: I, fontSize: 12, color: "#f0a8a8", marginTop: 10 }}>
                  Something went wrong. Email us directly: ginorod@acomacapitalpartners.com
                </p>
              )}
              <button
                type="button"
                onClick={dismiss}
                style={{
                  width: "100%", marginTop: 14, background: "none", border: "none",
                  fontFamily: I, fontSize: 12, color: "rgba(255,255,255,0.4)",
                  cursor: "pointer", textDecoration: "underline",
                }}
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
