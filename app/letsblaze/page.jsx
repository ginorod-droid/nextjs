// app/letsblaze/page.jsx

export const metadata = {
  title: "Let's Blaze Medical Dispensary | Business Sale | Denver, CO | Acoma Capital Partners",
  description: "Active medical dispensary for sale in Denver's Baker District. $595,000. Social equity designee, zero violations, active medical license. Denver has stopped issuing new retail cannabis licenses.",
}

const CAL  = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

const credentials = [
  { icon: '🏥', title: 'Active Medical License', desc: 'Fully licensed and operational. Revenue-generating from day one of ownership.' },
  { icon: '⚖️', title: 'Social Equity Designee', desc: 'A protected license classification that carries significant regulatory and competitive advantages in Colorado.' },
  { icon: '✅', title: 'Zero Violations', desc: 'Clean compliance record. No regulatory issues, no pending actions, no surprises.' },
  { icon: '📍', title: 'Prime Baker District Location', desc: '120 S. Kalamath St. — established foot traffic, walkable neighborhood, strong local customer base.' },
]

const whyItMatters = [
  { stat: '0', label: 'New Retail Cannabis Licenses', detail: 'Denver has halted issuance of new retail cannabis licenses — this asset cannot be replicated.' },
  { stat: '800', label: 'Square Feet', detail: 'Efficient, fully built-out retail floor plan with all required fixtures and compliance infrastructure in place.' },
  { stat: '$595K', label: 'Asking Price', detail: 'Priced for a qualified operator or investor ready to step into an active, licensed operation.' },
]

export default function LetsBlaze() {
  return (
    <div id="lb2">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ── 4-COLOR STRIPE ── */}
      <div className="l-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>

      {/* ── NAV ── */}
      <nav className="l-nav">
        <div className="l-wrap l-nav-row">
          <a href="/" className="l-logo">ACOMA <span>CAPITAL PARTNERS</span></a>
          <div className="l-nav-links">
            <a href="/#opportunities">All Listings</a>
            <a href="#the-asset">The Asset</a>
            <a href="#contact">Contact</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="l-nav-cta">Book a Call</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="l-hero">
        <div className="l-wrap">
          <p className="l-eyebrow">Business Sale · Baker District, Denver, CO</p>
          <h1 className="l-h1">
            A License<br />
            <span className="l-yellow">Denver</span><br />
            Won&apos;t Issue<br />
            Again.
          </h1>
          <p className="l-hero-sub">
            Let&apos;s Blaze Medical Dispensary &nbsp;·&nbsp; 120 S. Kalamath St. &nbsp;·&nbsp; Active. Licensed. Revenue-generating.
          </p>
          <div className="l-cta-row">
            <a href="#the-asset" className="l-btn-yellow">View the Asset</a>
            <a href={EMAIL} className="l-btn-ghost-white">Request Details</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="l-statsbar">
        {[
          ['$595,000','Asking Price'],
          ['800 SF','Retail Space'],
          ['Medical','Active License'],
          ['0','New Licenses Issued'],
          ['Baker','District, Denver'],
        ].map(([n,l]) => (
          <div key={l} className="l-stat">
            <span className="l-stat-n">{n}</span>
            <span className="l-stat-l">{l}</span>
          </div>
        ))}
      </div>

      {/* ── THE OPPORTUNITY ── */}
      <section className="l-section" id="the-asset">
        <div className="l-wrap">
          <p className="l-section-label">01 / The Opportunity</p>
          <div className="l-rule" />
          <h2>An Irreplaceable Asset in a Market That Closed the Door.</h2>
          <p>Denver stopped issuing new retail cannabis licenses. That decision didn&apos;t just freeze the market — it made every existing active license a finite commodity. There are no more coming. What exists is what exists.</p>
          <p>Let&apos;s Blaze Medical Dispensary holds an active medical license with a clean compliance record, social equity designee status, and an established retail presence in Denver&apos;s Baker District. The operation is running today. Revenue is being generated today. The next owner steps into an active business — not a buildout, not a licensing process, not a waiting period.</p>
          <p>At $595,000, this is priced for a buyer who understands what it means that Denver has stopped issuing new licenses. The scarcity is real. The opportunity is now.</p>

          <div className="l-location-card">
            <div className="l-loc-header">
              <span className="l-loc-tag">Property Details</span>
              <div className="l-loc-address">120 S. Kalamath St. · Baker District · Denver, CO 80223</div>
            </div>
            <div className="l-loc-body">
              <div className="l-loc-item">
                <strong>License Type</strong>
                Active Medical Dispensary License
              </div>
              <div className="l-loc-item">
                <strong>Designation</strong>
                Social Equity Designee
              </div>
              <div className="l-loc-item">
                <strong>Compliance Record</strong>
                Zero Violations — Clean History
              </div>
            </div>
          </div>

          <div className="l-cta-row" style={{marginTop:'48px'}}>
            <a href={EMAIL} className="l-btn-green">Request the Deal Package</a>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="l-section l-section-navy">
        <div className="l-wrap">
          <p className="l-section-label l-label-yellow">02 / Why This Asset Is Different</p>
          <div className="l-rule l-rule-yellow" />
          <h2 className="l-white">Denver Closed the Door. <span className="l-yellow">This Is What&apos;s Left.</span></h2>
          <p className="l-muted-white">Most markets still allow new cannabis licenses to be issued. Denver does not. That single fact changes the entire calculus for buyers.</p>

          <div className="l-why-grid">
            {whyItMatters.map((item) => (
              <div key={item.label} className="l-why-card">
                <div className="l-why-stat">{item.stat}</div>
                <div className="l-why-label">{item.label}</div>
                <p className="l-why-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="l-section l-section-off">
        <div className="l-wrap">
          <p className="l-section-label">03 / The Asset</p>
          <div className="l-rule" />
          <h2>What You&apos;re Acquiring.</h2>
          <p>This is not a shell or a startup. Every item below is already in place — licensed, compliant, and operational.</p>

          <div className="l-cred-grid">
            {credentials.map((item) => (
              <div key={item.title} className="l-cred-card">
                <div className="l-cred-icon">{item.icon}</div>
                <div className="l-cred-title">{item.title}</div>
                <p className="l-cred-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="l-section l-section-navy">
        <div className="l-wrap">
          <h2 className="l-white">Interested in This Opportunity?</h2>
          <p className="l-muted-white">Qualified buyers only. Deal package including financials and license documentation available upon request.</p>
          <div className="l-triple-cta">
            <a href={CAL} target="_blank" rel="noreferrer" className="l-triple-card l-card-green">
              <span className="l-triple-icon">📅</span>
              <span className="l-triple-micro">Schedule</span>
              <span className="l-triple-title">Book a Call</span>
              <span className="l-triple-body">Get on the calendar with Gino directly. No middlemen.</span>
            </a>
            <a href={FORM} target="_blank" rel="noreferrer" className="l-triple-card l-card-yellow">
              <span className="l-triple-icon">📋</span>
              <span className="l-triple-micro">Buyers</span>
              <span className="l-triple-title">Buyer Questionnaire</span>
              <span className="l-triple-body">Tell us about yourself and your acquisition criteria.</span>
            </a>
            <a href={EMAIL} className="l-triple-card l-card-blue">
              <span className="l-triple-icon">✉️</span>
              <span className="l-triple-micro">Direct</span>
              <span className="l-triple-title">Send a Message</span>
              <span className="l-triple-body">ginorod@acomacapitalpartners.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── DEAL SUMMARY ── */}
      <section className="l-section">
        <div className="l-wrap">
          <p className="l-section-label">04 / Deal Summary</p>
          <div className="l-rule" />
          <h2>The Numbers. The Reality.</h2>
          <p>Active medical dispensary. Social equity license. Clean record. Baker District location. The business is running and the license is irreplaceable. The only question is whether the buyer recognizes the window.</p>

          <div className="l-deal-grid">
            <div className="l-deal-cell">
              <span className="l-deal-n">$595K</span>
              <span className="l-deal-l">Asking Price</span>
            </div>
            <div className="l-deal-cell l-deal-highlight">
              <span className="l-deal-n">0</span>
              <span className="l-deal-l">New Licenses Available</span>
            </div>
            <div className="l-deal-cell">
              <span className="l-deal-n">800 SF</span>
              <span className="l-deal-l">Built-Out Retail Space</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="l-section l-section-navy" id="contact">
        <div className="l-wrap">
          <p className="l-section-label l-label-yellow">05 / Contact</p>
          <div className="l-rule l-rule-yellow" />
          <h2 className="l-white">Request the Deal Package.</h2>
          <p className="l-muted-white">Financials, license documentation, and compliance records available for qualified buyers. Reach out directly — no intake form between you and Gino.</p>

          <div className="l-triple-cta">
            <a href={CAL} target="_blank" rel="noreferrer" className="l-triple-card l-card-green">
              <span className="l-triple-icon">📅</span>
              <span className="l-triple-micro">Schedule</span>
              <span className="l-triple-title">Book a Call</span>
              <span className="l-triple-body">Get on the calendar with Gino directly.</span>
            </a>
            <a href={FORM} target="_blank" rel="noreferrer" className="l-triple-card l-card-yellow">
              <span className="l-triple-icon">📋</span>
              <span className="l-triple-micro">Buyers</span>
              <span className="l-triple-title">Buyer Questionnaire</span>
              <span className="l-triple-body">Tell us what you&apos;re looking for.</span>
            </a>
            <a href={EMAIL} className="l-triple-card l-card-blue">
              <span className="l-triple-icon">✉️</span>
              <span className="l-triple-micro">Direct</span>
              <span className="l-triple-title">Send a Message</span>
              <span className="l-triple-body">ginorod@acomacapitalpartners.com</span>
            </a>
          </div>

          <p className="l-contact-phone">
            <a href="tel:7207244185">(720) 724-4185</a>
            &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div className="l-disclaimer">
        <div className="l-wrap">
          <p>This page is provided for informational purposes only and does not constitute an offer to sell or a solicitation to buy any security or business interest. All figures are based on information believed to be reliable but are not guaranteed. Prospective buyers should conduct their own independent due diligence including review of all licenses, financial records, and regulatory standing. Acoma Capital Partners, Inc. is not a licensed cannabis operator.</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="l-colorbar">
        <span style={{background:'#2C9143'}} />
        <span style={{background:'#202A54'}} />
        <span style={{background:'#1179EC'}} />
        <span style={{background:'#F6D200'}} />
      </div>
      <footer className="l-footer">
        <div className="l-wrap l-footer-row">
          <div>
            <div className="l-footer-logo">ACOMA <span>CAPITAL</span> PARTNERS</div>
            <div className="l-footer-sub">Listed by Acoma Capital Partners</div>
            <div className="l-footer-info">
              (720) 724-4185 &nbsp;·&nbsp; <a href={EMAIL}>ginorod@acomacapitalpartners.com</a><br />
              <a href="https://www.acomacapitalpartners.com" target="_blank" rel="noreferrer">www.acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="l-footer-links">
            <a href="/">Home</a>
            <a href="/#opportunities">All Listings</a>
            <a href="/pueblo-parcel">Pueblo Parcel</a>
            <a href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer">Buyer Questionnaire</a>
          </div>
        </div>
        <div className="l-footer-bottom">
          <div className="l-wrap">© 2026 Acoma Capital Partners, Inc.</div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

#lb2 { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; font-size:16px; line-height:1.6; }
#lb2 *,#lb2 *::before,#lb2 *::after { box-sizing:border-box; }
#lb2 h1,#lb2 h2,#lb2 h3,#lb2 p,#lb2 ul,#lb2 ol,#lb2 li,#lb2 figure { margin:0; padding:0; }
.l-wrap { max-width:1200px; margin:0 auto; padding:0 40px; }

/* 4-COLOR BAR */
.l-colorbar { height:6px; display:flex; }
.l-colorbar span { flex:1; }

/* NAV */
.l-nav { position:sticky; top:6px; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.l-nav-row { display:flex; align-items:center; justify-content:space-between; }
.l-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; color:#fff; text-decoration:none; text-transform:uppercase; }
.l-logo span { color:#F6D200; }
.l-nav-links { display:flex; gap:32px; align-items:center; }
.l-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.l-nav-links a:hover { color:#fff; }
.l-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; }

/* HERO */
.l-hero { background:#202A54; padding:130px 0 110px; }
.l-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.55); margin-bottom:32px; display:block; }
.l-h1 { font-size:clamp(64px,10vw,128px); font-weight:900; line-height:0.88; letter-spacing:-0.04em; color:#fff; text-transform:uppercase; margin-bottom:40px; }
.l-yellow { color:#F6D200; }
.l-green  { color:#2C9143; }
.l-blue   { color:#1179EC; }
.l-white  { color:#fff !important; }
.l-hero-sub { font-size:16px; color:rgba(255,255,255,0.55); max-width:680px; line-height:1.75; margin-bottom:52px; font-weight:500; letter-spacing:0.02em; }
.l-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* STATS BAR */
.l-statsbar { background:#111827; display:flex; }
.l-stat { flex:1; padding:32px 20px; text-align:center; border-right:1px solid rgba(255,255,255,0.06); }
.l-stat:last-child { border-right:none; }
.l-stat:nth-child(1) { border-top:4px solid #2C9143; }
.l-stat:nth-child(2) { border-top:4px solid #F6D200; }
.l-stat:nth-child(3) { border-top:4px solid #1179EC; }
.l-stat:nth-child(4) { border-top:4px solid #2C9143; }
.l-stat:nth-child(5) { border-top:4px solid #F6D200; }
.l-stat-n { display:block; font-size:26px; font-weight:900; color:#fff; letter-spacing:-0.02em; }
.l-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-top:6px; }

/* BUTTONS */
.l-btn-yellow { display:inline-block; padding:17px 40px; background:#F6D200; color:#202A54; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.l-btn-yellow:hover { opacity:0.85; }
.l-btn-green { display:inline-block; padding:17px 40px; background:#2C9143; color:#fff; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.l-btn-green:hover { opacity:0.85; }
.l-btn-ghost-white { display:inline-block; padding:15px 40px; border:2px solid rgba(255,255,255,0.3); color:#fff; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:border-color .2s; }
.l-btn-ghost-white:hover { border-color:#fff; }

/* SECTIONS */
.l-section { padding:112px 0; border-top:1px solid #e8ecf0; }
.l-section-off { background:#f4f6f9; }
.l-section-navy { background:#202A54; border-top:none; }
.l-section-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:18px; display:flex; align-items:center; gap:12px; }
.l-section-label::before { content:''; display:inline-block; width:28px; height:3px; background:#1179EC; flex-shrink:0; }
.l-label-yellow { color:#F6D200; }
.l-label-yellow::before { background:#F6D200; }
.l-rule { width:48px; height:4px; background:#2C9143; margin-bottom:32px; }
.l-rule-yellow { background:#F6D200; }
#lb2 h2 { font-size:clamp(32px,4.5vw,56px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:32px; max-width:820px; }
#lb2 p { color:#555; margin-bottom:22px; max-width:760px; line-height:1.85; font-size:16px; }
#lb2 p strong { color:#202A54; font-weight:700; }
#lb2 p:last-child { margin-bottom:0; }
.l-muted-white { color:rgba(255,255,255,0.65) !important; max-width:760px; }

/* LOCATION CARD */
.l-location-card { background:#111827; border-top:5px solid #F6D200; margin-top:56px; }
.l-loc-header { padding:40px 48px 32px; border-bottom:1px solid rgba(255,255,255,0.08); }
.l-loc-tag { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F6D200; display:block; margin-bottom:12px; }
.l-loc-address { font-size:24px; font-weight:900; color:#fff; line-height:1.2; letter-spacing:-0.01em; }
.l-loc-body { display:grid; grid-template-columns:repeat(3,1fr); }
.l-loc-item { padding:32px 48px; border-right:1px solid rgba(255,255,255,0.06); font-size:14px; color:rgba(255,255,255,0.6); line-height:1.7; }
.l-loc-item:last-child { border-right:none; }
.l-loc-item strong { color:#fff; display:block; font-weight:700; font-size:13px; letter-spacing:0.04em; margin-bottom:6px; }
@media(max-width:720px){ .l-loc-body{grid-template-columns:1fr;} .l-loc-item{border-right:none;border-bottom:1px solid rgba(255,255,255,0.06);} .l-loc-item:last-child{border-bottom:none;} }

/* WHY GRID */
.l-why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:3px; margin-top:56px; }
@media(max-width:680px){ .l-why-grid{grid-template-columns:1fr;} }
.l-why-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-top:4px solid #F6D200; padding:40px 32px; }
.l-why-stat { font-size:56px; font-weight:900; color:#F6D200; letter-spacing:-0.03em; line-height:1; margin-bottom:8px; }
.l-why-label { font-size:11px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#fff; margin-bottom:16px; }
.l-why-detail { font-size:14px; color:rgba(255,255,255,0.65) !important; line-height:1.75; margin:0; max-width:none; }

/* CREDENTIALS GRID */
.l-cred-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:56px; }
@media(max-width:680px){ .l-cred-grid{grid-template-columns:1fr;} }
.l-cred-card { background:#fff; border:1px solid #e4e8f0; border-left:4px solid #2C9143; padding:36px 32px; display:flex; gap:24px; align-items:flex-start; }
.l-cred-icon { font-size:28px; flex-shrink:0; line-height:1; margin-top:4px; }
.l-cred-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:8px; }
.l-cred-desc { font-size:14px; color:#555; line-height:1.7; margin:0; max-width:none; }

/* DEAL GRID */
.l-deal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; background:#e4e8f0; margin-top:56px; }
@media(max-width:520px){ .l-deal-grid{grid-template-columns:1fr;} }
.l-deal-cell { background:#fff; padding:60px 40px; text-align:center; }
.l-deal-n { display:block; font-size:56px; font-weight:900; color:#202A54; letter-spacing:-0.03em; line-height:1; }
.l-deal-l { display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#aaa; margin-top:10px; }
.l-deal-highlight { background:#202A54; }
.l-deal-highlight .l-deal-n { color:#F6D200; }
.l-deal-highlight .l-deal-l { color:rgba(255,255,255,0.35); }

/* TRIPLE CTA */
.l-triple-cta { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin-top:52px; }
@media(max-width:700px){ .l-triple-cta{grid-template-columns:1fr;} }
.l-triple-card { display:flex; flex-direction:column; align-items:center; gap:12px; padding:52px 40px; text-decoration:none; text-align:center; transition:filter .2s; }
.l-triple-card:hover { filter:brightness(1.07); }
.l-card-green  { background:#2C9143; }
.l-card-yellow { background:#F6D200; }
.l-card-blue   { background:#1179EC; }
.l-triple-icon { font-size:40px; line-height:1; }
.l-triple-micro { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; }
.l-card-green .l-triple-micro, .l-card-blue .l-triple-micro { color:rgba(255,255,255,0.6); }
.l-card-yellow .l-triple-micro { color:rgba(32,42,84,0.5); }
.l-triple-title { font-size:22px; font-weight:900; line-height:1.15; }
.l-card-green .l-triple-title, .l-card-blue .l-triple-title { color:#fff; }
.l-card-yellow .l-triple-title { color:#202A54; }
.l-triple-body { font-size:14px; line-height:1.65; max-width:260px; }
.l-card-green .l-triple-body, .l-card-blue .l-triple-body { color:rgba(255,255,255,0.75); }
.l-card-yellow .l-triple-body { color:rgba(32,42,84,0.65); }

/* CONTACT PHONE */
.l-contact-phone { margin-top:36px; font-size:14px; color:rgba(255,255,255,0.4); }
.l-contact-phone a { color:rgba(255,255,255,0.7); text-decoration:none; font-weight:700; }
.l-contact-phone a:hover { color:#F6D200; }

/* DISCLAIMER */
.l-disclaimer { padding:36px 0; background:#f5f5f2; border-top:1px solid #e8ecf0; }
.l-disclaimer p { font-size:11px; color:#999; line-height:1.75; max-width:900px; margin:0; }

/* FOOTER */
.l-footer { background:#202A54; padding:56px 0 0; }
.l-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:48px; }
@media(max-width:560px){ .l-footer-row{grid-template-columns:1fr;} }
.l-footer-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#fff; margin-bottom:4px; }
.l-footer-logo span { color:#F6D200; }
.l-footer-sub { font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.35); margin-bottom:16px; }
.l-footer-info { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.9; }
.l-footer-info a { color:rgba(255,255,255,0.6); text-decoration:none; }
.l-footer-info a:hover { color:#F6D200; }
.l-footer-links { display:flex; flex-direction:column; gap:12px; align-items:flex-end; }
@media(max-width:560px){ .l-footer-links{align-items:flex-start;} }
.l-footer-links a { font-size:13px; color:rgba(255,255,255,0.4); text-decoration:none; font-weight:600; transition:color .2s; }
.l-footer-links a:hover { color:#F6D200; }
.l-footer-bottom { border-top:1px solid rgba(255,255,255,0.06); padding:22px 0; }
.l-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.2); }
`
