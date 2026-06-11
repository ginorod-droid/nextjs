// app/letsblaze/page.jsx

export const metadata = {
  title: "Let's Blaze Medical Dispensary | Acquisition Opportunity | Denver, CO | Acoma Capital Partners",
  description: "Rare acquisition opportunity — active medical dispensary in Denver's Baker District. Restricted licensing area. No new cannabis stores permitted in the neighborhood. Contact Acoma Capital Partners for deal parameters.",
}

const CAL  = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

const trophyAssets = [
  { icon: '📋', title: 'Active Medical License', desc: 'Fully licensed and current with the State of Colorado. Transferable to a qualified buyer.' },
  { icon: '⚖️', title: 'Social Equity Designee', desc: 'Colorado Social Equity status adds strategic and regulatory value that cannot be replicated with a new license application.' },
  { icon: '✅', title: 'Zero MED Violations', desc: 'Clean compliance record with the Marijuana Enforcement Division. No disciplinary actions, no pending matters.' },
  { icon: '📁', title: 'Clean Disciplinary Record', desc: 'No regulatory incidents on file. The license transfers with a spotless history — a rare find in the Denver market.' },
  { icon: '👥', title: 'Existing Customer Base', desc: 'Established patient relationships and brand presence in the Baker District neighborhood.' },
  { icon: '📍', title: 'Prime Baker District Location', desc: '120 S. Kalamath St. — high foot traffic corridor, dense residential demand, established cannabis retail neighborhood.' },
]

const opportunities = [
  {
    title: 'A License You Cannot Buy New',
    desc: 'The Baker District is a restricted licensing area. No new cannabis retail stores are permitted to open in this neighborhood. The only way in is through an existing license — and this is one of them.',
  },
  {
    title: 'The Baker District Advantage',
    desc: 'One of Denver\'s most established cannabis retail corridors. Dense residential population, strong foot traffic, and a customer base already accustomed to shopping the neighborhood.',
  },
  {
    title: 'Spotless Regulatory Standing',
    desc: 'Zero MED violations. Clean disciplinary record. No pending regulatory matters. The license transfers with a history any buyer would want — and most can\'t find.',
  },
  {
    title: 'Stability Backed by Social Equity',
    desc: 'Colorado Social Equity Designee status is a protected classification that adds strategic value and regulatory advantages that a standard license simply does not carry.',
  },
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
            <a href="/">Home</a>
            <a href="/#opportunities">All Listings</a>
            <a href="/pueblo-parcel">Pueblo Parcel</a>
            <a href="/bridge-loans">Bridge Loans</a>
            <a href="#contact">Contact</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="l-nav-cta">Book a Call</a>
          </div>
          <label htmlFor="l-menu-toggle" className="l-hamburger" aria-label="Menu">
            <span /><span /><span />
          </label>
        </div>
        <input type="checkbox" id="l-menu-toggle" className="l-menu-toggle" />
        <div className="l-mobile-nav">
          <a href="/">Home</a>
          <a href="/#opportunities">All Listings</a>
          <a href="/pueblo-parcel">Pueblo Parcel</a>
          <a href="/bridge-loans">Bridge Loans</a>
          <a href="#the-asset">The Asset</a>
          <a href="#contact">Contact</a>
          <a href={CAL} target="_blank" rel="noreferrer">Book a Call</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="l-hero">
        <div className="l-wrap">
          <p className="l-eyebrow">Confidential · Business Sale · Baker District, Denver, CO</p>
          <h1 className="l-h1">
            Own a Rare,<br />
            Fully-Licensed<br />
            <span className="l-yellow">Denver</span><br />
            Dispensary.
          </h1>
          <p className="l-hero-sub">
            Active medical dispensary in a restricted licensing area of Denver&apos;s Baker District. No new cannabis stores are permitted to open in this neighborhood. The license is the asset.
          </p>
          <div className="l-cta-row">
            <a href="#contact" className="l-btn-yellow">Request Deal Parameters</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="l-btn-ghost-white">Schedule a Confidential Call</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="l-statsbar">
        {[
          ['Baker','District, Denver'],
          ['Medical','Active License'],
          ['Social Equity','Designee'],
          ['Zero','MED Violations'],
          ['Call for','Pricing'],
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
          <h2>A License the Baker District Will Not Issue Again.</h2>
          <p>Let&apos;s Blaze Medical Dispensary holds an active medical license with a clean compliance record and Social Equity Designee status, located at 120 S. Kalamath St. in Denver&apos;s Baker District.</p>
          <p>The Baker District is a restricted licensing area. Denver has placed strict limits on where new cannabis retail operations can be established — and this neighborhood is closed to new entrants. The only way to operate a cannabis store in Baker is to acquire an existing license. This is one of them.</p>
          <p>The license, the location, and the regulatory standing are the value here. Pricing and deal parameters are available to qualified buyers upon submission of the buyer questionnaire.</p>

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
                Colorado Social Equity Designee
              </div>
              <div className="l-loc-item">
                <strong>MED Record</strong>
                Zero Violations · Clean History
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="l-section l-section-navy">
        <div className="l-wrap">
          <h2 className="l-white">Deal Parameters Available to Qualified Buyers.</h2>
          <p className="l-muted-white">Submit the buyer questionnaire to receive pricing, financials, and full deal documentation. All inquiries handled confidentially through Acoma Capital Partners.</p>
          <div className="l-triple-cta">
            <a href={FORM} target="_blank" rel="noreferrer" className="l-triple-card l-card-yellow">
              <span className="l-triple-icon">📋</span>
              <span className="l-triple-micro">Start Here</span>
              <span className="l-triple-title">Submit Questionnaire</span>
              <span className="l-triple-body">Complete the buyer form to receive pricing and deal parameters.</span>
            </a>
            <a href={CAL} target="_blank" rel="noreferrer" className="l-triple-card l-card-green">
              <span className="l-triple-icon">📅</span>
              <span className="l-triple-micro">Confidential</span>
              <span className="l-triple-title">Schedule a Call</span>
              <span className="l-triple-body">Speak directly with Gino at Acoma Capital Partners.</span>
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

      {/* ── FOUR OPPORTUNITIES ── */}
      <section className="l-section l-section-off">
        <div className="l-wrap">
          <p className="l-section-label">02 / Four Reasons This Is Different</p>
          <div className="l-rule" />
          <h2>What Makes This Acquisition Stand Apart.</h2>
          <p>Most cannabis acquisitions come with baggage — compliance issues, weak locations, or licenses under scrutiny. This one doesn&apos;t.</p>

          <div className="l-opp-grid">
            {opportunities.map((item, i) => (
              <div key={i} className="l-opp-card">
                <div className="l-opp-num">0{i+1}</div>
                <div className="l-opp-title">{item.title}</div>
                <p className="l-opp-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX TROPHY ASSETS ── */}
      <section className="l-section">
        <div className="l-wrap">
          <p className="l-section-label">03 / The Asset</p>
          <div className="l-rule" />
          <h2>Six Reasons This Is a Trophy Acquisition.</h2>
          <p>Every item below is verified, transferable, and already in place. This is not a startup — it is an established licensed operation with a clean record and a protected market position.</p>

          <div className="l-cred-grid">
            {trophyAssets.map((item) => (
              <div key={item.title} className="l-cred-card">
                <div className="l-cred-icon">{item.icon}</div>
                <div>
                  <div className="l-cred-title">{item.title}</div>
                  <p className="l-cred-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="l-section l-section-navy" id="contact">
        <div className="l-wrap">
          <p className="l-section-label l-label-yellow">04 / Contact</p>
          <div className="l-rule l-rule-yellow" />
          <h2 className="l-white">Request the Deal Package.</h2>
          <p className="l-muted-white">Pricing, financials, license documentation, and deal parameters are provided to qualified buyers after questionnaire submission. All inquiries are handled confidentially through Acoma Capital Partners.</p>

          <div className="l-triple-cta">
            <a href={FORM} target="_blank" rel="noreferrer" className="l-triple-card l-card-yellow">
              <span className="l-triple-icon">📋</span>
              <span className="l-triple-micro">Start Here</span>
              <span className="l-triple-title">Buyer Questionnaire</span>
              <span className="l-triple-body">Submit to receive pricing and full deal parameters.</span>
            </a>
            <a href={CAL} target="_blank" rel="noreferrer" className="l-triple-card l-card-green">
              <span className="l-triple-icon">📅</span>
              <span className="l-triple-micro">Confidential</span>
              <span className="l-triple-title">Schedule a Call</span>
              <span className="l-triple-body">Get on the calendar with Gino directly.</span>
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
          <p>The business opportunities presented on this page are official listings offered pursuant to Acoma Capital Partners, Inc.’s Colorado real estate license. This is not a solicitation. All business opportunity sales are conducted in compliance with applicable Colorado real estate statutes and regulations governing the sale of business opportunities. All information is drawn from sources believed to be reliable and is provided without warranty. Prospective buyers are responsible for conducting independent due diligence, including review of all applicable licenses, financial records, lease terms, and regulatory standing prior to entering any transaction. This business opportunity sale is not an invitation to invest in any security or investment contract. Acoma Capital Partners, Inc. is not a licensed cannabis operator. Pricing and deal terms are available to qualified buyers upon request. Acoma Capital Partners, Inc. — A Colorado Real Estate Company | License # EC.100052724</p>
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
          <div className="l-wrap">© 2026 Acoma Capital Partners, Inc. · All inquiries handled confidentially.</div>
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
.l-menu-toggle { display:none; }
.l-hamburger { display:none; cursor:pointer; flex-direction:column; gap:5px; padding:4px; }
.l-hamburger span { display:block; width:24px; height:2px; background:#fff; border-radius:2px; }
.l-mobile-nav { display:none; flex-direction:column; background:#202A54; border-top:1px solid rgba(255,255,255,0.1); position:absolute; top:100%; left:0; right:0; z-index:200; }
.l-mobile-nav a { font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.75); text-decoration:none; padding:16px 24px; border-bottom:1px solid rgba(255,255,255,0.06); }
.l-mobile-nav a:last-child { border-bottom:none; color:#F6D200; }
.l-menu-toggle:checked ~ .l-mobile-nav { display:flex; }

/* HERO */
.l-hero { background:#202A54; padding:130px 0 110px; }
.l-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:32px; display:block; }
.l-h1 { font-size:clamp(52px,8vw,108px); font-weight:900; line-height:0.9; letter-spacing:-0.04em; color:#fff; text-transform:uppercase; margin-bottom:40px; }
.l-yellow { color:#F6D200; }
.l-green  { color:#2C9143; }
.l-blue   { color:#1179EC; }
.l-white  { color:#fff !important; }
.l-hero-sub { font-size:17px; color:rgba(255,255,255,0.6); max-width:640px; line-height:1.8; margin-bottom:52px; font-weight:400; }
.l-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* STATS BAR */
.l-statsbar { background:#111827; display:flex; }
.l-stat { flex:1; padding:32px 20px; text-align:center; border-right:1px solid rgba(255,255,255,0.06); }
.l-stat:last-child { border-right:none; }
.l-stat:nth-child(1) { border-top:4px solid #2C9143; }
.l-stat:nth-child(2) { border-top:4px solid #1179EC; }
.l-stat:nth-child(3) { border-top:4px solid #F6D200; }
.l-stat:nth-child(4) { border-top:4px solid #2C9143; }
.l-stat:nth-child(5) { border-top:4px solid #F6D200; }
.l-stat-n { display:block; font-size:22px; font-weight:900; color:#fff; letter-spacing:-0.01em; }
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

/* OPPORTUNITY GRID */
.l-opp-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:56px; }
@media(max-width:680px){ .l-opp-grid{grid-template-columns:1fr;} }
.l-opp-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #202A54; padding:40px 36px; }
.l-opp-num { font-size:48px; font-weight:900; color:#e8ecf0; letter-spacing:-0.04em; line-height:1; margin-bottom:12px; }
.l-opp-title { font-size:13px; font-weight:900; letter-spacing:0.06em; text-transform:uppercase; color:#202A54; margin-bottom:14px; }
.l-opp-desc { font-size:15px; color:#555; line-height:1.8; margin:0; max-width:none; }

/* CREDENTIALS GRID */
.l-cred-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:56px; }
@media(max-width:680px){ .l-cred-grid{grid-template-columns:1fr;} }
.l-cred-card { background:#fff; border:1px solid #e4e8f0; border-left:4px solid #2C9143; padding:36px 32px; display:flex; gap:24px; align-items:flex-start; }
.l-cred-icon { font-size:28px; flex-shrink:0; line-height:1; margin-top:4px; }
.l-cred-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#202A54; margin-bottom:8px; }
.l-cred-desc { font-size:14px; color:#555; line-height:1.75; margin:0; max-width:none; }

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
@media(max-width:768px){
  .l-wrap { padding:0 20px; }
  .l-nav-links { display:none; }
  .l-hamburger { display:flex; }
  .l-hero { padding:80px 0 64px; }
  .l-h1 { font-size:48px; }
  .l-statsbar { flex-wrap:wrap; }
  .l-stat { min-width:50%; flex:none; border-right:none; border-bottom:1px solid rgba(255,255,255,0.06); }
  .l-section { padding:72px 0; }
  .l-loc-header { padding:28px 24px 20px; }
  .l-loc-address { font-size:18px; }
  .l-why-grid { grid-template-columns:1fr; }
  .l-deal-cell { padding:40px 20px; }
  .l-deal-n { font-size:44px; }
  .l-triple-card { padding:36px 24px; }
  .l-footer-row { padding-bottom:32px; }
}
.l-footer-links a { font-size:13px; color:rgba(255,255,255,0.4); text-decoration:none; font-weight:600; transition:color .2s; }
.l-footer-links a:hover { color:#F6D200; }
.l-footer-bottom { border-top:1px solid rgba(255,255,255,0.06); padding:22px 0; }
.l-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.2); }
`
