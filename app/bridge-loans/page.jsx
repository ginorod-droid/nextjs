// ─────────────────────────────────────────────────────────
// Place at:  app/bridge-loans/page.jsx
// ─────────────────────────────────────────────────────────

export const metadata = {
  title: '5-Day Bridge Loans | Acoma Capital Partners',
  description: 'Bridge loans $100K–$20M. Approved in 24 hours, funded in 5 days. Direct lender brokerage — capital ready now.',
}

const CAL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

export default function BridgeLoans() {
  return (
    <div id="bl2">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── NAV ── */}
      <nav className="b-nav">
        <div className="b-wrap b-nav-row">
          <a href="/" className="b-logo">ACOMA<span> CAPITAL PARTNERS</span></a>
          <div className="b-nav-links">
            <a href="/pueblo-parcel">Properties</a>
            <a href="#qualify">Pre-Qualify</a>
            <a href={EMAIL}>Contact</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="b-nav-cta">Book a Call</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="b-hero">
        <div className="b-hero-ghost">5</div>
        <div className="b-wrap b-hero-grid">
          <div className="b-hero-left">
            <span className="b-eyebrow">Bridge Lending <span className="b-dot">·</span> Colorado <span className="b-dot">·</span> Direct Lender</span>
            <h1 className="b-h1">
              While<br />
              They Wait.<br />
              <span className="b-h1-line"><span className="b-underline-yellow">You</span> Already<br />Won.</span>
            </h1>
            <p className="b-hero-sub">Your competition is still on hold with the bank. <strong>You&apos;re already at the closing table.</strong> Bridge loans $100K–$20M. Approved in 24 hours. Funded in 5 days.</p>
            <div className="b-cta-row">
              <a href="#qualify" className="b-btn-yellow">Get Pre-Qualified</a>
              <a href={CAL} target="_blank" rel="noreferrer" className="b-btn-ghost-white">Book a Call with Gino</a>
            </div>
          </div>
          <div className="b-hero-panel">
            <div className="b-panel-num">
              <span className="b-big5">5</span>
              <span className="b-big5-label">Day Close</span>
            </div>
            <div className="b-panel-divider" />
            <ul className="b-panel-list">
              <li><span>Loan Range</span>$100K – $20M</li>
              <li><span>Approval</span>24 Hours</li>
              <li><span>Lender</span>Direct — Capital Ready</li>
              <li><span>Properties</span>Resi · Commercial · Mixed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="b-statsbar">
        {[['5','Day Close'],['24hr','Approval'],['$100K','Minimum'],['$20M','Maximum']].map(([n,l])=>(
          <div key={l} className="b-stat"><span className="b-stat-n">{n}</span><span className="b-stat-l">{l}</span></div>
        ))}
      </div>

      {/* ── STRATEGY ── */}
      <section className="b-section" id="how-it-works">
        <div className="b-wrap b-two-col">
          <div>
            <span className="b-section-label">Strategy</span>
            <div className="b-rule" />
            <h2>Strike First.<br /><span className="b-green">Profit</span> First.</h2>
            <p>Control your destiny with 5-day bridge loans that put you in the driver&apos;s seat — letting timing work <strong>for you</strong> instead of against your investment strategy.</p>
            <p>Traditional financing takes weeks. By the time the bank says yes, the deal is gone. Our bridge loans eliminate that window entirely. You move when the deal is right, not when the paperwork clears.</p>
            <p>Because we&apos;re a <strong>direct lender brokerage</strong>, the capital is ready to fund. We don&apos;t search for money — our lenders already have it.</p>
            <div className="b-cta-row" style={{marginTop:'32px'}}>
              <a href="#qualify" className="b-btn-green">Get Pre-Qualified</a>
            </div>
          </div>
          <div>
            <blockquote className="b-quote">
              <p>&ldquo;In real estate, <span className="b-yellow">speed equals profit.</span> Five-day bridge funding closes the gap between opportunity and execution.&rdquo;</p>
              <cite>Gino Rodrigues · President, Acoma Capital Partners</cite>
            </blockquote>
            <div className="b-card" style={{marginTop:'20px'}}>
              <div className="b-card-title">Direct Lender Brokerage</div>
              <p className="b-card-body">Capital ready to deploy. No middlemen sourcing funds. <strong>The money is there before you call.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOAN DETAILS ── */}
      <section className="b-section b-section-off">
        <div className="b-wrap">
          <span className="b-section-label">Loan Details</span>
          <div className="b-rule" />
          <h2>Deals <span className="b-blue">That</span> We Fund.</h2>
          <p>From urgent residential purchases to large-scale commercial acquisitions — if the deal makes sense, we move fast.</p>
          <div className="b-feature-grid">
            {[
              ['🏗️','Property Types','Residential, retail, industrial, mixed-use, commercial, and more.'],
              ['⚡','Fast Close','$100K to $20M. Most approved within 24 hours. Funded in as few as 5 days.'],
              ['🤝','Transaction Types','Urgent purchases of residential and commercial properties where conventional financing isn\'t an option.'],
              ['💰','Capital Secured','Direct lender brokerage means the money is ready to fund. No waiting — our lenders have it.'],
            ].map(([icon,title,desc])=>(
              <div key={title} className="b-feature-card">
                <span className="b-feature-icon">{icon}</span>
                <div className="b-feature-title">{title}</div>
                <p className="b-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'40px'}}>
            <span className="b-section-label" style={{marginBottom:'18px',display:'block'}}>Eligible Property Types</span>
            <div className="b-chips">
              {['Residential','Retail','Industrial','Mixed-Use','Commercial','And More'].map(t=>(
                <div key={t} className="b-chip">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETITIVE EDGE ── */}
      <section className="b-section">
        <div className="b-wrap">
          <span className="b-section-label">Your Competitive Edge</span>
          <div className="b-rule" />
          <h2>Financing <span className="b-green">Built</span> for Investors.</h2>
          <p>Whether you&apos;re self-employed, buying unique properties, or need to close faster than banks allow, our bridge loans provide the flexibility and speed that serious real estate investors demand.</p>
          <p>Don&apos;t limit your investment potential. <strong>Bridge the gap to your next deal</strong> with financing built for investors, by investors. The window on a great deal closes fast — your capital structure shouldn&apos;t be the reason you miss it.</p>
          <div className="b-cta-row" style={{marginTop:'32px'}}>
            <a href="#qualify" className="b-btn-green">Get Pre-Qualified Now</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="b-btn-outline">Talk to Gino Directly</a>
          </div>
        </div>
      </section>

      {/* ── PRE-QUALIFY FORM ── */}
      <section className="b-section b-section-navy" id="qualify">
        <div className="b-wrap b-two-col">
          <div>
            <span className="b-section-label b-label-yellow">Get Pre-Qualified</span>
            <div className="b-rule b-rule-yellow" />
            <h2 className="b-white">Fill Out <span className="b-yellow">This</span> Short Form.</h2>
            <p className="b-muted-white">We&apos;ll be in touch same day. No obligation — just a fast answer on whether we can fund your deal.</p>
            <p className="b-muted-white" style={{marginTop:'20px'}}>Or reach Gino directly:<br />
              <a href="tel:7207244185" className="b-text-link-yellow">📞 (720) 724-4185</a><br />
              <a href={EMAIL} className="b-text-link-yellow">✉️ ginorod@acomacapitalpartners.com</a>
            </p>
            <a href={FORM} target="_blank" rel="noreferrer" className="b-text-link-yellow" style={{display:'block',marginTop:'20px',fontWeight:700}}>
              → Or fill out the Buyer Questionnaire
            </a>
          </div>
          <div>
            <div className="b-form-card">
              <form action={EMAIL} method="post" encType="text/plain">
                <label htmlFor="b-name">Full Name *</label>
                <input type="text" id="b-name" name="Full Name" placeholder="Your full name" required />
                <label htmlFor="b-email">Email *</label>
                <input type="email" id="b-email" name="Email" placeholder="your@email.com" required />
                <label htmlFor="b-phone">Phone</label>
                <input type="tel" id="b-phone" name="Phone" placeholder="(___) ___-____" />
                <label htmlFor="b-amount">Requested Loan Amount *</label>
                <input type="text" id="b-amount" name="Loan Amount" placeholder="e.g. $500,000" required />
                <label htmlFor="b-ptype">Property Type</label>
                <input type="text" id="b-ptype" name="Property Type" placeholder="Residential, Commercial, etc." />
                <button type="submit" className="b-form-submit">Submit — Get Pre-Qualified</button>
                <p className="b-form-note">No spam. Ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT GINO ── */}
      <section className="b-section b-section-off">
        <div className="b-wrap b-two-col">
          <div>
            <span className="b-section-label">About</span>
            <div className="b-rule" />
            <div className="b-gino-name">Gino Rodrigues</div>
            <div className="b-gino-title">President, Acoma Capital Partners, Inc.</div>
            <p>At Acoma Capital Partners, we deliver expert commercial real estate services backed by deep market insights and strategic negotiation. From comprehensive market analysis to seamless transaction management, our experienced team ensures you make informed decisions and maximize every investment opportunity.</p>
            <p>Bridge lending is one part of a broader capital strategy — one built around moving fast, staying disciplined, and closing deals that others can&apos;t get done.</p>
            <div className="b-cta-row" style={{marginTop:'28px'}}>
              <a href="#qualify" className="b-btn-green">Explore Your Options</a>
              <a href="/pueblo-parcel" className="b-btn-outline">View Properties</a>
            </div>
          </div>
          <div>
            {[['📞 Direct Line','720-724-4185','tel:7207244185'],['✉️ Email','ginorod@acomacapitalpartners.com',EMAIL],['🌐 Website','www.acomacapitalpartners.com','https://www.acomacapitalpartners.com']].map(([t,v,h])=>(
              <div key={t} className="b-contact-card">
                <div className="b-contact-title">{t}</div>
                <a href={h} className="b-contact-val" target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{v}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div className="b-disclaimer">
        <div className="b-wrap">
          <p>This page is for informational purposes only and does not constitute a commitment to lend. All loan applications are subject to underwriting review, approval, and applicable regulations. Acoma Capital Partners, Inc. operates as a direct lender brokerage and is not a licensed bank or federally regulated financial institution.</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="b-footer">
        <div className="b-wrap b-footer-row">
          <div>
            <div className="b-footer-logo">ACOMA CAPITAL PARTNERS</div>
            <div className="b-footer-info">
              (720) 724-4185 &nbsp;·&nbsp; <a href={EMAIL}>ginorod@acomacapitalpartners.com</a><br />
              <a href="https://www.acomacapitalpartners.com" target="_blank" rel="noreferrer">www.acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="b-footer-links">
            <a href="/pueblo-parcel">Pueblo Parcel</a>
            <a href="#qualify">Pre-Qualify</a>
            <a href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer">Buyer Questionnaire</a>
          </div>
        </div>
        <div className="b-footer-bottom">
          <div className="b-wrap">© 2026 Acoma Capital Partners, Inc.</div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

#bl2 { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; font-size:16px; line-height:1.6; }
#bl2 *,#bl2 *::before,#bl2 *::after { box-sizing:border-box; margin:0; padding:0; }
.b-wrap { max-width:1080px; margin:0 auto; padding:0 36px; }

/* NAV */
.b-nav { position:sticky; top:0; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:18px 0; }
.b-nav-row { display:flex; align-items:center; justify-content:space-between; }
.b-logo { font-size:13px; font-weight:900; letter-spacing:0.14em; color:#fff; text-decoration:none; white-space:nowrap; flex-shrink:0; }
.b-logo span { color:#F6D200; }
.b-nav-links { display:flex; gap:28px; align-items:center; }
.b-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.b-nav-links a:hover { color:#fff; }
.b-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; letter-spacing:0.08em !important; transition:opacity .2s !important; }
.b-nav-cta:hover { opacity:0.85 !important; }

/* HERO */
.b-hero { background:#202A54; position:relative; overflow:hidden; padding:0; }
.b-hero-ghost { position:absolute; right:-60px; top:50%; transform:translateY(-50%); font-size:560px; font-weight:900; line-height:1; color:rgba(255,255,255,0.04); pointer-events:none; font-family:'Poppins',sans-serif; letter-spacing:-0.04em; }
.b-hero-grid { display:grid; grid-template-columns:1fr 320px; min-height:520px; align-items:stretch; position:relative; z-index:1; }
@media(max-width:780px){.b-hero-grid{grid-template-columns:1fr}.b-hero-panel{display:none}.b-hero-ghost{font-size:300px;right:-30px;}}
.b-hero-left { padding:80px 48px 80px 0; display:flex; flex-direction:column; justify-content:center; }
.b-eyebrow { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:28px; display:block; }
.b-dot { color:rgba(255,255,255,0.25); margin:0 8px; }
.b-h1 { font-size:clamp(52px,7vw,96px); font-weight:900; line-height:0.92; letter-spacing:-0.035em; color:#fff; text-transform:uppercase; margin-bottom:32px; }
.b-h1-line { display:block; }
.b-underline-yellow { position:relative; display:inline-block; }
.b-underline-yellow::after { content:''; position:absolute; left:0; bottom:-6px; width:100%; height:6px; background:#F6D200; }
.b-hero-sub { font-size:17px; color:#fff !important; max-width:480px; line-height:1.7; margin-bottom:44px !important; }
.b-hero-sub strong { color:#fff !important; font-weight:700; }
.b-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }
.b-hero-panel { background:rgba(0,0,0,0.22); border-left:1px solid rgba(255,255,255,0.1); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:52px 36px; gap:28px; text-align:center; }
.b-panel-num { display:flex; flex-direction:column; align-items:center; }
.b-big5 { font-size:80px; font-weight:900; color:#F6D200; line-height:1; letter-spacing:-0.03em; }
.b-big5-label { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-top:6px; }
.b-panel-divider { width:40px; height:1px; background:rgba(255,255,255,0.15); }
.b-panel-list { list-style:none; width:100%; }
.b-panel-list li { font-size:13px; font-weight:600; color:rgba(255,255,255,0.8); padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.08); }
.b-panel-list li:last-child { border-bottom:none; }
.b-panel-list li span { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:3px; }

/* STATS BAR */
.b-statsbar { background:#2C9143; display:flex; justify-content:center; }
.b-stat { flex:1; max-width:220px; padding:20px 24px; text-align:center; border-right:1px solid rgba(255,255,255,0.15); }
.b-stat:last-child { border-right:none; }
.b-stat-n { display:block; font-size:26px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
.b-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:3px; }

/* BUTTONS */
.b-btn-yellow { display:inline-block; padding:15px 34px; background:#F6D200; color:#202A54; font-size:13px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.b-btn-yellow:hover { opacity:0.85; }
.b-btn-green { display:inline-block; padding:15px 34px; background:#2C9143; color:#fff; font-size:13px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.b-btn-green:hover { opacity:0.85; }
.b-btn-ghost-white { display:inline-block; padding:13px 34px; border:2px solid rgba(255,255,255,0.45); color:#fff; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:border-color .2s,background .2s; }
.b-btn-ghost-white:hover { border-color:#fff; background:rgba(255,255,255,0.08); }
.b-btn-outline { display:inline-block; padding:13px 34px; border:2px solid #202A54; color:#202A54; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:background .2s,color .2s; }
.b-btn-outline:hover { background:#202A54; color:#fff; }

/* SECTIONS */
.b-section { padding:88px 0; border-top:1px solid #EAEAE6; }
.b-section-off { background:#F5F5F2; }
.b-section-navy { background:#202A54; border-top:none; border-left:5px solid #F6D200; }
.b-section-label { font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#2C9143; margin-bottom:16px; display:block; }
.b-label-yellow { color:#F6D200; }
.b-rule { width:44px; height:4px; background:#2C9143; margin-bottom:28px; }
.b-rule-yellow { background:#F6D200; }
#bl2 h2 { font-size:clamp(30px,4vw,50px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; text-transform:uppercase; margin-bottom:28px; }
.b-white { color:#fff !important; }
.b-green { color:#2C9143; }
.b-blue { color:#1179EC; }
.b-yellow { color:#F6D200; }
#bl2 p { color:#555; margin-bottom:18px; max-width:640px; line-height:1.75; font-size:15px; }
#bl2 p strong { color:#202A54; font-weight:700; }
#bl2 p:last-child { margin-bottom:0; }
#bl2 .b-hero p, #bl2 .b-hero-sub { color:#fff !important; }
#bl2 .b-hero p strong, #bl2 .b-hero-sub strong { color:#fff !important; font-weight:700; }
.b-muted-white { color:rgba(255,255,255,0.7) !important; }
.b-two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
@media(max-width:720px){.b-two-col{grid-template-columns:1fr;gap:44px;}}

/* QUOTE */
.b-quote { background:#202A54; border-left:5px solid #F6D200; padding:32px 36px; }
.b-quote p { font-size:19px; font-weight:700; color:#fff; line-height:1.45; letter-spacing:-0.01em; margin-bottom:16px; max-width:none; }
.b-quote cite { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.45); font-style:normal; }

/* CARDS */
.b-card { background:#fff; border:1px solid #E4E4E0; border-top:4px solid #2C9143; padding:28px; }
.b-card-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:10px; }
.b-card-body { font-size:13px; color:#555; line-height:1.65; margin:0; max-width:none; }
.b-card-body strong { color:#202A54; }

/* FEATURE GRID */
.b-feature-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:40px; }
@media(max-width:600px){.b-feature-grid{grid-template-columns:1fr;}}
.b-feature-card { background:#fff; border:1px solid #E4E4E0; border-top:4px solid #202A54; padding:28px 24px; }
.b-feature-icon { font-size:30px; margin-bottom:14px; display:block; }
.b-feature-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:10px; }
.b-feature-desc { font-size:13px; color:#555; line-height:1.65; margin:0; max-width:none; }
.b-feature-desc strong { color:#202A54; }

/* CHIPS */
.b-chips { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
@media(max-width:600px){.b-chips{grid-template-columns:1fr 1fr;}}
.b-chip { background:#fff; border:1px solid #E4E4E0; border-left:4px solid #F6D200; padding:14px 18px; font-size:13px; font-weight:700; color:#202A54; letter-spacing:0.02em; }

/* FORM */
.b-form-card { background:#fff; padding:44px 40px; }
.b-form-card label { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:8px; margin-top:22px; }
.b-form-card label:first-of-type { margin-top:0; }
.b-form-card input { display:block; width:100%; background:#F5F5F2; border:1px solid #DDDDD8; border-bottom:3px solid #CCC; color:#202A54; font-family:'Poppins',sans-serif; font-size:15px; padding:13px 16px; outline:none; transition:border-color .2s; }
.b-form-card input:focus { border-color:#1179EC; border-bottom-color:#1179EC; }
.b-form-card input::placeholder { color:#BBB; }
.b-form-submit { display:block; width:100%; margin-top:28px; padding:16px; background:#F6D200; color:#202A54; font-family:'Poppins',sans-serif; font-size:13px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; border:none; cursor:pointer; transition:opacity .2s; }
.b-form-submit:hover { opacity:0.85; }
.b-form-note { font-size:11px; color:rgba(255,255,255,0.35); margin-top:14px; line-height:1.6; max-width:none; margin-bottom:0 !important; }
.b-text-link-yellow { color:#F6D200; text-decoration:none; font-weight:600; }
.b-text-link-yellow:hover { text-decoration:underline; }

/* GINO BIO */
.b-gino-name { font-size:clamp(28px,3.5vw,44px); font-weight:900; letter-spacing:-0.02em; text-transform:uppercase; color:#202A54; margin-bottom:8px; }
.b-gino-title { font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#2C9143; margin-bottom:28px; }
.b-contact-card { background:#fff; border:1px solid #E4E4E0; border-left:4px solid #2C9143; padding:20px 24px; margin-bottom:16px; }
.b-contact-title { font-size:11px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:6px; }
.b-contact-val { font-size:14px; font-weight:600; color:#1179EC; text-decoration:none; }
.b-contact-val:hover { text-decoration:underline; }

/* DISCLAIMER */
.b-disclaimer { padding:28px 0; border-top:1px solid #EAEAE6; background:#F5F5F2; }
.b-disclaimer p { font-size:11px; color:#999; line-height:1.7; max-width:860px; margin:0; }

/* FOOTER */
.b-footer { background:#202A54; border-top:5px solid #2C9143; padding:52px 0 0; }
.b-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:40px; }
@media(max-width:560px){.b-footer-row{grid-template-columns:1fr;}}
.b-footer-logo { font-size:13px; font-weight:900; letter-spacing:0.14em; color:#fff; margin-bottom:14px; }
.b-footer-info { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.8; }
.b-footer-info a { color:rgba(255,255,255,0.7); text-decoration:none; }
.b-footer-info a:hover { color:#F6D200; }
.b-footer-links { display:flex; flex-direction:column; gap:10px; }
.b-footer-links a { font-size:13px; color:rgba(255,255,255,0.5); text-decoration:none; font-weight:600; letter-spacing:0.04em; transition:color .2s; }
.b-footer-links a:hover { color:#F6D200; }
.b-footer-bottom { border-top:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.b-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.3); }
`
