// app/bridge-loans/page.jsx

export const metadata = {
  title: '5-Day Bridge Loans | Acoma Capital Partners',
  description: 'Bridge loans $100K–$20M. Approved in 24 hours, funded in 5 days. Direct lender brokerage — capital ready now.',
}

const CAL  = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

export default function BridgeLoans() {
  return (
    <div id="bl2">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── 4-COLOR STRIPE ── */}
      <div className="b-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>

      {/* ── NAV ── */}
      <nav className="b-nav">
        <div className="b-wrap b-nav-row">
          <a href="/" className="b-logo">ACOMA <span>CAPITAL PARTNERS</span></a>
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
        <div className="b-wrap b-hero-inner">
          <span className="b-eyebrow">Bridge Lending · Direct Lender · Nationwide</span>
          <h1 className="b-h1">
            While<br />
            They Wait.<br />
            <span className="b-underline-yellow">You</span> Already<br />
            Won.
          </h1>
          <p className="b-hero-sub">Your competition is still on hold with the bank. <strong>You&apos;re already at the closing table.</strong> Bridge loans $100K–$20M. Approved in 24 hours. Funded in 5 days.</p>
          <div className="b-cta-row">
            <a href="#qualify" className="b-btn-yellow">Get Pre-Qualified</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="b-btn-ghost-white">Book a Call with Gino</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="b-statsbar">
        {[['5','Day Close'],['24hr','Approval'],['$100K','Minimum'],['$20M','Maximum']].map(([n,l])=>(
          <div key={l} className="b-stat">
            <span className="b-stat-n">{n}</span>
            <span className="b-stat-l">{l}</span>
          </div>
        ))}
      </div>

      {/* ── STRATEGY ── */}
      <section className="b-section" id="how-it-works">
        <div className="b-wrap">
          <p className="b-section-label">01 / Strategy</p>
          <div className="b-rule" />
          <h2>Strike First. <span className="b-green">Profit</span> First.</h2>
          <p>Control your destiny with 5-day bridge loans that put you in the driver&apos;s seat — letting timing work <strong>for you</strong> instead of against your investment strategy.</p>
          <p>Traditional financing takes weeks. By the time the bank says yes, the deal is gone. Our bridge loans eliminate that window entirely. You move when the deal is right, not when the paperwork clears.</p>
          <p>Because we&apos;re a <strong>direct lender brokerage</strong>, the capital is ready to fund. We don&apos;t search for money — our lenders already have it.</p>

          <blockquote className="b-quote">
            <p>&ldquo;In real estate, <span className="b-yellow">speed equals profit.</span> Five-day bridge funding closes the gap between opportunity and execution.&rdquo;</p>
            <cite>Gino Rodrigues · President, Acoma Capital Partners</cite>
          </blockquote>

          <div className="b-cta-row" style={{marginTop:'48px'}}>
            <a href="#qualify" className="b-btn-green">Get Pre-Qualified</a>
          </div>
        </div>
      </section>

      {/* ── LOAN DETAILS ── */}
      <section className="b-section b-section-off">
        <div className="b-wrap">
          <p className="b-section-label">02 / Loan Details</p>
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

          <div style={{marginTop:'56px'}}>
            <p className="b-section-label" style={{marginBottom:'24px'}}>Eligible Property Types</p>
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
          <p className="b-section-label">03 / Your Competitive Edge</p>
          <div className="b-rule" />
          <h2>Financing <span className="b-green">Built</span> for Investors.</h2>
          <p>Whether you&apos;re self-employed, buying unique properties, or need to close faster than banks allow, our bridge loans provide the flexibility and speed that serious real estate investors demand.</p>
          <p>Don&apos;t limit your investment potential. <strong>Bridge the gap to your next deal</strong> with financing built for investors, by investors. The window on a great deal closes fast — your capital structure shouldn&apos;t be the reason you miss it.</p>
          <div className="b-cta-row" style={{marginTop:'48px'}}>
            <a href="#qualify" className="b-btn-green">Get Pre-Qualified Now</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="b-btn-outline">Talk to Gino Directly</a>
          </div>
        </div>
      </section>

      {/* ── PRE-QUALIFY ── */}
      <section className="b-section b-section-navy" id="qualify">
        <div className="b-wrap">
          <p className="b-section-label b-label-yellow">04 / Get Pre-Qualified</p>
          <div className="b-rule b-rule-yellow" />
          <h2 className="b-white">Fill Out This Short Form.</h2>
          <p className="b-muted-white">We&apos;ll be in touch same day. No obligation — just a fast answer on whether we can fund your deal.</p>

          <div className="b-form-card">
            <p className="b-section-label b-label-yellow" style={{marginBottom:'20px'}}>CRE Hard Money Loan Questionnaire</p>
            <p style={{fontSize:16,color:'rgba(255,255,255,0.7)',lineHeight:1.8,marginBottom:32,maxWidth:'none'}}>Answer a few quick questions about your deal — property type, loan amount, exit strategy, and timeline. We'll review and get back to you same day.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-6p6hfHzJ9N5C1WfTlHuk1rozF6Lt2Lqn9xsv8SNnY1HLEQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="b-btn-yellow"
              style={{display:'inline-block',fontSize:13}}
            >
              Fill Out the Questionnaire →
            </a>
            <p className="b-form-note" style={{marginTop:28}}>
              Or reach Gino directly: &nbsp;
              <a href="tel:7207244185" className="b-text-link-yellow">(720) 724-4185</a> &nbsp;·&nbsp;
              <a href={EMAIL} className="b-text-link-yellow">ginorod@acomacapitalpartners.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT GINO ── */}
      <section className="b-section b-section-off">
        <div className="b-wrap">
          <p className="b-section-label">05 / About</p>
          <div className="b-rule" />
          <div className="b-gino-name">Gino Rodrigues</div>
          <div className="b-gino-title">President, Acoma Capital Partners, Inc.</div>
          <p>At Acoma Capital Partners, we deliver expert commercial real estate services backed by deep market insights and strategic negotiation. From comprehensive market analysis to seamless transaction management, our experienced team ensures you make informed decisions and maximize every investment opportunity.</p>
          <p>Bridge lending is one part of a broader capital strategy — one built around moving fast, staying disciplined, and closing deals that others can&apos;t get done.</p>

          <div className="b-contact-grid">
            {[
              ['📞 Direct Line','720-724-4185','tel:7207244185'],
              ['✉️ Email','ginorod@acomacapitalpartners.com',EMAIL],
              ['🌐 Website','www.acomacapitalpartners.com','https://www.acomacapitalpartners.com'],
            ].map(([t,v,h])=>(
              <div key={t} className="b-contact-card">
                <div className="b-contact-title">{t}</div>
                <a href={h} className="b-contact-val" target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{v}</a>
              </div>
            ))}
          </div>

          <div className="b-cta-row" style={{marginTop:'48px'}}>
            <a href="#qualify" className="b-btn-green">Explore Your Options</a>
            <a href="/pueblo-parcel" className="b-btn-outline">View Properties</a>
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
      <div className="b-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>
      <footer className="b-footer">
        <div className="b-wrap b-footer-row">
          <div>
            <div className="b-footer-logo">ACOMA <span>CAPITAL</span> PARTNERS</div>
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
#bl2 *,#bl2 *::before,#bl2 *::after { box-sizing:border-box; }
#bl2 h1,#bl2 h2,#bl2 h3,#bl2 p,#bl2 ul,#bl2 ol,#bl2 li,#bl2 figure,#bl2 blockquote { margin:0; padding:0; }
.b-wrap { max-width:1200px; margin:0 auto; padding:0 40px; }

/* 4-COLOR BAR */
.b-colorbar { height:6px; display:flex; }
.b-colorbar span { flex:1; }

/* NAV */
.b-nav { position:sticky; top:6px; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.b-nav-row { display:flex; align-items:center; justify-content:space-between; }
.b-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; color:#fff; text-decoration:none; text-transform:uppercase; }
.b-logo span { color:#F6D200; }
.b-nav-links { display:flex; gap:32px; align-items:center; }
.b-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.b-nav-links a:hover { color:#fff; }
.b-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; }

/* HERO */
.b-hero { background:#202A54; position:relative; overflow:hidden; padding:130px 0 110px; }
.b-hero-ghost { position:absolute; right:-60px; top:50%; transform:translateY(-50%); font-size:560px; font-weight:900; line-height:1; color:rgba(255,255,255,0.04); pointer-events:none; font-family:'Poppins',sans-serif; letter-spacing:-0.04em; }
.b-hero-inner { position:relative; z-index:1; }
.b-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:32px; display:block; }
.b-h1 { font-size:clamp(64px,10vw,128px); font-weight:900; line-height:0.88; letter-spacing:-0.04em; color:#fff; text-transform:uppercase; margin-bottom:40px; }
.b-underline-yellow { position:relative; display:inline-block; }
.b-underline-yellow::after { content:''; position:absolute; left:0; bottom:-6px; width:100%; height:6px; background:#F6D200; }
.b-yellow { color:#F6D200; }
.b-green  { color:#2C9143; }
.b-blue   { color:#1179EC; }
.b-white  { color:#fff !important; }
.b-hero-sub { font-size:18px; color:rgba(255,255,255,0.7); max-width:560px; line-height:1.75; margin-bottom:52px; }
.b-hero-sub strong { color:#fff; font-weight:700; }
.b-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* STATS BAR */
.b-statsbar { background:#2C9143; display:flex; }
.b-stat { flex:1; padding:32px 24px; text-align:center; border-right:1px solid rgba(255,255,255,0.15); }
.b-stat:last-child { border-right:none; }
.b-stat-n { display:block; font-size:30px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
.b-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:6px; }

/* BUTTONS */
.b-btn-yellow { display:inline-block; padding:17px 40px; background:#F6D200; color:#202A54; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.b-btn-yellow:hover { opacity:0.85; }
.b-btn-green { display:inline-block; padding:17px 40px; background:#2C9143; color:#fff; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.b-btn-green:hover { opacity:0.85; }
.b-btn-ghost-white { display:inline-block; padding:15px 40px; border:2px solid rgba(255,255,255,0.35); color:#fff; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:border-color .2s; }
.b-btn-ghost-white:hover { border-color:#fff; }
.b-btn-outline { display:inline-block; padding:15px 40px; border:2px solid #202A54; color:#202A54; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:background .2s,color .2s; }
.b-btn-outline:hover { background:#202A54; color:#fff; }

/* SECTIONS — full width, content breathes */
.b-section { padding:112px 0; border-top:1px solid #e8ecf0; }
.b-section-off { background:#f4f6f9; }
.b-section-navy { background:#202A54; border-top:none; }
.b-section-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:18px; display:flex; align-items:center; gap:12px; }
.b-section-label::before { content:''; display:inline-block; width:28px; height:3px; background:#1179EC; flex-shrink:0; }
.b-label-yellow { color:#F6D200; }
.b-label-yellow::before { background:#F6D200; }
.b-rule { width:48px; height:4px; background:#2C9143; margin-bottom:32px; }
.b-rule-yellow { background:#F6D200; }
#bl2 h2 { font-size:clamp(32px,4.5vw,56px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:32px; max-width:800px; }
#bl2 p { color:#555; margin-bottom:22px; max-width:760px; line-height:1.85; font-size:16px; }
#bl2 p strong { color:#202A54; font-weight:700; }
#bl2 p:last-child { margin-bottom:0; }
.b-muted-white { color:rgba(255,255,255,0.65) !important; max-width:760px; }

/* QUOTE — full width strip */
.b-quote { background:#111827; border-top:5px solid #F6D200; padding:48px 56px; margin-top:56px; }
.b-quote p { font-size:20px; font-weight:700; color:#fff; line-height:1.5; letter-spacing:-0.01em; margin-bottom:20px; max-width:none; }
.b-quote cite { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.4); font-style:normal; }

/* FEATURE GRID */
.b-feature-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:56px; }
@media(max-width:680px){ .b-feature-grid{grid-template-columns:1fr;} }
.b-feature-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #202A54; padding:36px 32px; }
.b-feature-icon { font-size:32px; margin-bottom:16px; display:block; }
.b-feature-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:10px; }
.b-feature-desc { font-size:14px; color:#555; line-height:1.7; margin:0; max-width:none; }

/* CHIPS */
.b-chips { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
@media(max-width:680px){ .b-chips{grid-template-columns:1fr 1fr;} }
.b-chip { background:#fff; border:1px solid #e4e8f0; border-left:4px solid #F6D200; padding:16px 20px; font-size:14px; font-weight:700; color:#202A54; }

/* FORM */
.b-form-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-top:5px solid #F6D200; padding:52px 56px; margin-top:52px; }
.b-form-note { font-size:12px; color:#999; margin-top:16px; line-height:1.7; max-width:none; margin-bottom:0; }
.b-text-link-yellow { color:#F6D200; text-decoration:none; font-weight:600; }
.b-text-link-yellow:hover { text-decoration:underline; }

/* GINO BIO */
.b-gino-name { font-size:clamp(32px,4vw,52px); font-weight:900; letter-spacing:-0.02em; color:#202A54; margin-bottom:10px; }
.b-gino-title { font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#2C9143; margin-bottom:36px; }
.b-contact-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:48px; }
@media(max-width:680px){ .b-contact-grid{grid-template-columns:1fr;} }
.b-contact-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #2C9143; padding:28px 28px; }
.b-contact-title { font-size:11px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:10px; }
.b-contact-val { font-size:14px; font-weight:600; color:#1179EC; text-decoration:none; }
.b-contact-val:hover { text-decoration:underline; }

/* DISCLAIMER */
.b-disclaimer { padding:36px 0; background:#f4f6f9; border-top:1px solid #e8ecf0; }
.b-disclaimer p { font-size:11px; color:#999; line-height:1.75; max-width:900px; margin:0; }

/* FOOTER */
.b-footer { background:#202A54; padding:56px 0 0; }
.b-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:48px; }
@media(max-width:560px){ .b-footer-row{grid-template-columns:1fr;} }
.b-footer-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#fff; margin-bottom:16px; }
.b-footer-logo span { color:#F6D200; }
.b-footer-info { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.9; }
.b-footer-info a { color:rgba(255,255,255,0.6); text-decoration:none; }
.b-footer-info a:hover { color:#F6D200; }
.b-footer-links { display:flex; flex-direction:column; gap:12px; align-items:flex-end; }
@media(max-width:560px){ .b-footer-links{align-items:flex-start;} }
.b-footer-links a { font-size:13px; color:rgba(255,255,255,0.4); text-decoration:none; font-weight:600; transition:color .2s; }
.b-footer-links a:hover { color:#F6D200; }
.b-footer-bottom { border-top:1px solid rgba(255,255,255,0.06); padding:22px 0; }
.b-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.2); }
`
