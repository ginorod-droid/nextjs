// app/broker-programs/shared.jsx
// Shared data, styles, and building blocks for the Acoma commercial loan pages.
// Program terms mirror the Silver Hill small-balance commercial sheets (commercial-only set).

export const CAL   = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
export const FORM  = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
export const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

export const PTYPES = 'Retail · Mixed-Use (commercial) · Warehouse & Self-Storage · Office · Light Industrial · Automotive · Mobile Home Park · Restaurants · Bars · Day Care'

export const CREDIT = 'A qualifying credit score is required, starting at 650. Both rate and terms improve as the score rises.'

export const programs = [
  {
    slug: 'bank-statement',
    eyebrow: 'Owner-Occupied',
    name: 'Bank Statement',
    accent: '#2C9143',
    image: '/program-bank-statement.jpg',
    tagline: 'Qualify self-employed owners on twelve months of business bank statements instead of tax returns.',
    clientTagline: 'You run the business and own the building. Twelve months of bank statements can qualify the loan, with cash-out available up to 80 percent.',
    intro: 'Qualify on twelve months of business bank statements instead of tax returns. Built for owner-occupied commercial property and the business owners inside it, with cash-out available up to 80 percent.',
    when: [
      'The owner occupies the property their business runs from.',
      'Tax returns understate what the business actually earns.',
      'The deal needs more flexibility than a bank will allow.',
    ],
    specs: [
      ['Loan Size', '$100K to $2M'],
      ['Max LTV', 'Up to 80%'],
      ['Minimum FICO', '650'],
      ['Income', '12 months bank statements'],
      ['Cash-Out', 'Available'],
      ['Occupancy', 'Owner-occupied only'],
    ],
    extra: 'Eligible property types: ' + PTYPES + '.',
    pillars: [
      ['Statements, not returns', 'Income is verified through twelve months of business bank statements.'],
      ['Owner-occupied focus', 'Built for the business owner who occupies the property.'],
      ['Cash-out to 80%', 'Pull equity out of the building to put back into the business.'],
    ],
  },
  {
    slug: 'lite-doc',
    eyebrow: 'Commercial Investors',
    name: 'Lite Doc',
    accent: '#F6D200',
    image: '/program-lite-doc.jpg',
    tagline: 'Reduced documentation for commercial investors. No tax returns and no 4506-T.',
    clientTagline: 'You have the credit and a property that performs. Skip the full tax package and finance up to 80 percent.',
    intro: 'For the commercial investor with credit and a property that performs, without the full tax package. No tax returns and no 4506-T, with 80 percent leverage and a fixed or ARM structure out to thirty years.',
    when: [
      'The investor has strong credit but an incomplete tax picture.',
      'The property performs and carries the debt.',
      'The file needs reduced-documentation flexibility.',
    ],
    specs: [
      ['Loan Size', '$100K to $2M'],
      ['Max LTV', 'Up to 80%'],
      ['Minimum FICO', '650'],
      ['Term', '5-Yr ARM / 30-Yr Fixed'],
      ['Amortization', 'Up to 30 years'],
      ['Documentation', 'No tax returns / 4506-T'],
    ],
    extra: 'Eligible property types: ' + PTYPES + '.',
    pillars: [
      ['No tax returns', 'No returns and no 4506-T to qualify the file.'],
      ['Leverage to 80%', 'Full leverage for investors who can show the property performs.'],
      ['Fixed or ARM', 'A 5-year ARM or a 30-year fixed, amortized up to thirty years.'],
    ],
  },
  {
    slug: 'no-doc',
    eyebrow: 'No Income Verification',
    name: 'No Doc',
    accent: '#1179EC',
    image: '/program-no-doc.jpg',
    tagline: 'Financing without tax returns, bank statements, or operating statements.',
    clientTagline: 'Strong credit and as little paperwork as possible. The property and the appraisal carry the deal.',
    intro: 'The shortest path, for strong credit that wants to document as little as possible. No tax returns, bank statements, or operating statements. The property and the appraisal carry the deal.',
    when: [
      'The borrower has strong credit and equity.',
      'The borrower would rather not produce income documents.',
      'Speed matters more than squeezing out maximum leverage.',
    ],
    specs: [
      ['Loan Size', '$100K to $1M'],
      ['Max LTV', 'Up to 75%'],
      ['Minimum FICO', '700'],
      ['Term', '5-Yr ARM / 30-Yr Fixed'],
      ['Amortization', 'Up to 30 years'],
      ['Documentation', 'No income docs *'],
    ],
    extra: '* Property appraisers may request income documentation. Eligible property types: ' + PTYPES + '.',
    pillars: [
      ['No income documents', 'No tax returns, bank statements, or operating statements to qualify.'],
      ['Driven by equity', 'Decisions rest on FICO, LTV, and the strength of the property.'],
      ['Fast submission', 'An application and a credit report are enough to get a read.'],
    ],
  },
]

export function getProgram(slug) {
  return programs.find((p) => p.slug === slug)
}

export function BrokerNav() {
  return (
    <nav className="bp-nav">
      <div className="bp-wrap bp-nav-row">
        <a href="/" className="bp-logo">ACOMA <span>CAPITAL PARTNERS</span></a>
        <div className="bp-nav-links">
          <a href="/">Home</a>
          <a href="/commercial-loans">Commercial Loans</a>
          <a href="/broker-programs">Broker Programs</a>
          <a href="/bridge-loans">Bridge Loans</a>
          <a href={CAL} target="_blank" rel="noreferrer" className="bp-nav-cta">Discuss Your Deal</a>
        </div>
        <label htmlFor="bp-menu-toggle" className="bp-hamburger" aria-label="Menu">
          <span /><span /><span />
        </label>
      </div>
      <input type="checkbox" id="bp-menu-toggle" className="bp-menu-toggle" />
      <div className="bp-mobile-nav">
        <a href="/">Home</a>
        <a href="/commercial-loans">Commercial Loans</a>
        <a href="/broker-programs">Broker Programs</a>
        <a href="/broker-programs/bank-statement">Bank Statement</a>
        <a href="/broker-programs/lite-doc">Lite Doc</a>
        <a href="/broker-programs/no-doc">No Doc</a>
        <a href="/bridge-loans">Bridge Loans</a>
        <a href={CAL} target="_blank" rel="noreferrer">Discuss Your Deal</a>
      </div>
    </nav>
  )
}

export function BrokerFooter() {
  return (
    <>
      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>
      <footer className="bp-footer">
        <div className="bp-wrap bp-footer-row">
          <div>
            <div className="bp-footer-logo">ACOMA <span>CAPITAL</span> PARTNERS</div>
            <div className="bp-footer-info">
              (720) 772-1327 &nbsp;·&nbsp; <a href={EMAIL}>ginorod@acomacapitalpartners.com</a><br />
              <a href="https://www.acomacapitalpartners.com" target="_blank" rel="noreferrer">www.acomacapitalpartners.com</a>
            </div>
          </div>
          <div className="bp-footer-links">
            <a href="/commercial-loans">Commercial Loans</a>
            <a href="/broker-programs">Broker Programs</a>
            <a href="/bridge-loans">Bridge Loans</a>
            <a href={CAL} target="_blank" rel="noreferrer">Discuss Your Deal</a>
          </div>
        </div>
        <div className="bp-footer-note">
          <div className="bp-wrap">
            <p>Program terms are indicative, subject to change, and do not constitute a commitment to lend. All loans are subject to underwriting, credit approval, property eligibility, and applicable regulations. Acoma Capital Partners, Inc. arranges commercial financing through third-party capital providers and is not a bank. Acoma Capital Partners, Inc. — A Colorado Real Estate Company | License # EC.100052724</p>
          </div>
        </div>
        <div className="bp-footer-bottom"><div className="bp-wrap">© 2026 Acoma Capital Partners, Inc.</div></div>
      </footer>
    </>
  )
}

export function ProgramView({ program }) {
  const p = program
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav />

      {/* HERO */}
      <section className="bp-hero">
        <div className="bp-wrap">
          <p className="bp-eyebrow" style={{ color: p.accent }}>{p.eyebrow}</p>
          <h1 className="bp-h1">{p.name}<span className="bp-accent-dot" style={{ background: p.accent }} /></h1>
          <p className="bp-hero-sub">{p.tagline}</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Discuss a Deal</a>
            <a href="/broker-programs" className="bp-btn-ghost-white">See All Programs</a>
          </div>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="bp-section">
        <div className="bp-wrap bp-intro-grid">
          <div>
            <p className="bp-section-label">The Program</p>
            <div className="bp-rule" style={{ background: p.accent }} />
            <p className="bp-lead">{p.intro}</p>
          </div>
          <div className="bp-intro-media">
            <img src={p.image} alt={p.name + ' commercial property'} loading="lazy" />
            <span className="bp-media-bar" style={{ background: p.accent }} />
          </div>
        </div>
      </section>

      {/* WHEN IT MAKES SENSE */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap">
          <p className="bp-section-label bp-label-yellow">When It Fits</p>
          <div className="bp-rule bp-rule-yellow" />
          <h2 className="bp-white">Right for the deal when:</h2>
          <div className="bp-when-grid">
            {p.when.map((w, i) => (
              <div key={i} className="bp-when-card">
                <span className="bp-when-num" style={{ color: p.accent }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Program Terms</p>
          <div className="bp-rule" style={{ background: p.accent }} />
          <h2>At a Glance.</h2>
          <div className="bp-spec-grid">
            {p.specs.map(([label, value]) => (
              <div key={label} className="bp-spec-cell" style={{ borderTopColor: p.accent }}>
                <div className="bp-spec-label">{label}</div>
                <div className="bp-spec-value">{value}</div>
              </div>
            ))}
          </div>
          {p.extra ? <p className="bp-extra">{p.extra}</p> : null}
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Why It Works</p>
          <div className="bp-rule" style={{ background: p.accent }} />
          <div className="bp-pillar-grid">
            {p.pillars.map(([title, body], i) => (
              <div key={i} className="bp-pillar-card" style={{ borderTopColor: p.accent }}>
                <div className="bp-pillar-title">{title}</div>
                <p className="bp-pillar-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Have a scenario? Let&apos;s talk.</h2>
          <p className="bp-muted-white">Send the basics and get a straight read on whether the deal fits, usually the same day.</p>
          <div className="bp-cta-row">
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Book a Call</a>
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-green">Submit a Scenario</a>
            <a href={EMAIL} className="bp-btn-ghost-white">Email Gino</a>
          </div>
          <p className="bp-cta-phone"><a href="tel:7207721327">(720) 772-1327</a> &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}

export const bpStyles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

#bp { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; font-size:16px; line-height:1.6; }
#bp *,#bp *::before,#bp *::after { box-sizing:border-box; }
#bp h1,#bp h2,#bp h3,#bp p,#bp ul,#bp li { margin:0; padding:0; }
.bp-wrap { max-width:1200px; margin:0 auto; padding:0 40px; }

.bp-colorbar { height:6px; display:flex; }
.bp-colorbar span { flex:1; }

/* NAV */
.bp-nav { position:sticky; top:0; z-index:100; background:rgba(32,42,84,0.97); backdrop-filter:blur(12px); border-bottom:1px solid rgba(255,255,255,0.08); padding:20px 0; }
.bp-nav-row { display:flex; align-items:center; justify-content:space-between; }
.bp-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; color:#fff; text-decoration:none; text-transform:uppercase; }
.bp-logo span { color:#F6D200; }
.bp-nav-links { display:flex; gap:30px; align-items:center; }
.bp-nav-links a { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.55); text-decoration:none; transition:color .2s; }
.bp-nav-links a:hover { color:#fff; }
.bp-nav-cta { background:#F6D200 !important; color:#202A54 !important; padding:10px 22px !important; font-weight:900 !important; }
.bp-menu-toggle { display:none; }
.bp-hamburger { display:none; cursor:pointer; flex-direction:column; gap:5px; padding:4px; }
.bp-hamburger span { display:block; width:24px; height:2px; background:#fff; border-radius:2px; }
.bp-mobile-nav { display:none; flex-direction:column; background:#202A54; border-top:1px solid rgba(255,255,255,0.1); }
.bp-mobile-nav a { font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.75); text-decoration:none; padding:16px 24px; border-bottom:1px solid rgba(255,255,255,0.06); }
.bp-mobile-nav a:last-child { border-bottom:none; color:#F6D200; }
.bp-menu-toggle:checked ~ .bp-mobile-nav { display:flex; }

/* HERO */
.bp-hero { background:#202A54; padding:120px 0 100px; position:relative; }
.bp-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; margin-bottom:28px; display:block; }
.bp-h1 { font-size:clamp(56px,9vw,110px); font-weight:900; line-height:0.9; letter-spacing:-0.04em; color:#fff; text-transform:uppercase; margin-bottom:32px; }
.bp-accent-dot { display:inline-block; width:16px; height:16px; margin-left:10px; vertical-align:baseline; }
.bp-hero-sub { font-size:19px; color:rgba(255,255,255,0.68); max-width:640px; line-height:1.65; margin-bottom:48px; }
.bp-cta-row { display:flex; gap:14px; flex-wrap:wrap; align-items:center; }

/* BUTTONS */
.bp-btn-yellow { display:inline-block; padding:17px 38px; background:#F6D200; color:#202A54; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.bp-btn-yellow:hover { opacity:0.85; }
.bp-btn-green { display:inline-block; padding:17px 38px; background:#2C9143; color:#fff; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.bp-btn-green:hover { opacity:0.85; }
.bp-btn-ghost-white { display:inline-block; padding:15px 38px; border:2px solid rgba(255,255,255,0.32); color:#fff; font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:border-color .2s; }
.bp-btn-ghost-white:hover { border-color:#fff; }
.bp-btn-navy { display:inline-block; padding:17px 38px; background:#202A54; color:#fff; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:opacity .2s; }
.bp-btn-navy:hover { opacity:0.88; }

/* SECTIONS */
.bp-section { padding:104px 0; border-top:1px solid #e8ecf0; }
.bp-section-off { background:#f4f6f9; }
.bp-section-navy { background:#202A54; border-top:none; }
.bp-section-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:16px; }
.bp-section-navy .bp-section-label { color:rgba(255,255,255,0.55); }
.bp-label-yellow { color:#F6D200 !important; }
.bp-rule { width:48px; height:4px; background:#2C9143; margin-bottom:30px; }
.bp-rule-yellow { background:#F6D200; }
#bp h2 { font-size:clamp(30px,4vw,52px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:28px; max-width:820px; }
.bp-white { color:#fff !important; }
.bp-lead { font-size:19px; line-height:1.8; color:#555; max-width:820px; }
.bp-muted-white { color:rgba(255,255,255,0.65) !important; max-width:720px; font-size:17px; line-height:1.7; }

/* INTRO MEDIA */
.bp-intro-grid { display:grid; grid-template-columns:1.1fr 1fr; gap:64px; align-items:center; }
.bp-intro-media { position:relative; }
.bp-intro-media img { width:100%; height:380px; object-fit:cover; display:block; }
.bp-media-bar { position:absolute; left:0; right:0; bottom:0; height:5px; }

/* WHEN GRID */
.bp-when-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:44px; }
.bp-when-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-top:4px solid #F6D200; padding:32px 28px; }
.bp-when-num { display:block; font-size:24px; font-weight:900; letter-spacing:-0.02em; margin-bottom:14px; }
.bp-when-card p { font-size:15px; color:rgba(255,255,255,0.82); line-height:1.7; }

/* SPEC GRID */
.bp-spec-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; background:#e4e8f0; margin-top:44px; }
.bp-spec-cell { background:#fff; padding:34px 30px; border-top:4px solid #1179EC; }
.bp-spec-label { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#aaa; margin-bottom:10px; }
.bp-spec-value { font-size:22px; font-weight:900; color:#202A54; letter-spacing:-0.01em; line-height:1.2; }
.bp-extra { margin-top:28px; font-size:14px; color:#777; line-height:1.7; max-width:820px; }
.bp-credit { margin-top:18px; font-size:15px; color:#334; line-height:1.7; max-width:820px; border-left:4px solid #2C9143; padding:4px 0 4px 16px; }
.bp-credit strong { color:#202A54; }

/* PILLARS */
.bp-pillar-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:44px; }
.bp-pillar-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #202A54; padding:34px 30px; }
.bp-pillar-title { font-size:13px; font-weight:900; letter-spacing:0.06em; text-transform:uppercase; color:#202A54; margin-bottom:12px; }
.bp-pillar-body { font-size:14px; color:#666; line-height:1.7; }

/* CTA BLOCK */
.bp-cta-block h2 { color:#fff; }
.bp-cta-block .bp-cta-row { margin-top:36px; }
.bp-cta-phone { margin-top:32px; font-size:14px; color:rgba(255,255,255,0.4); }
.bp-cta-phone a { color:rgba(255,255,255,0.72); text-decoration:none; font-weight:700; }

/* HUB */
.bp-hub-hero { background:#202A54; padding:120px 0 90px; }
.bp-hub-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:8px; }
.bp-prog-card { display:flex; flex-direction:column; background:#fff; border:1px solid #e4e8f0; border-top:5px solid #1179EC; text-decoration:none; overflow:hidden; transition:transform .2s, box-shadow .2s; }
.bp-prog-card:hover { transform:translateY(-4px); box-shadow:0 20px 50px rgba(0,0,0,0.08); }
.bp-prog-img { width:100%; height:188px; object-fit:cover; display:block; }
.bp-prog-body { display:flex; flex-direction:column; padding:36px 32px; flex:1; }
.bp-prog-eyebrow { font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#aaa; margin-bottom:12px; }
.bp-prog-name { font-size:30px; font-weight:900; letter-spacing:-0.02em; color:#202A54; margin-bottom:14px; line-height:1.05; }
.bp-prog-tag { font-size:15px; color:#666; line-height:1.7; margin-bottom:20px; flex:1; }
.bp-prog-types { font-size:12px; color:#9aa3b2; line-height:1.6; margin-bottom:22px; }
.bp-prog-link { font-size:11px; font-weight:900; letter-spacing:0.14em; text-transform:uppercase; }

/* FOOTER */
.bp-footer { background:#202A54; padding:56px 0 0; }
.bp-footer-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; padding-bottom:44px; }
.bp-footer-logo { font-size:14px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; color:#fff; margin-bottom:16px; }
.bp-footer-logo span { color:#F6D200; }
.bp-footer-info { font-size:13px; color:rgba(255,255,255,0.4); line-height:1.9; }
.bp-footer-info a { color:rgba(255,255,255,0.6); text-decoration:none; }
.bp-footer-links { display:flex; flex-direction:column; gap:12px; align-items:flex-end; }
.bp-footer-links a { font-size:13px; color:rgba(255,255,255,0.4); text-decoration:none; font-weight:600; }
.bp-footer-links a:hover { color:#F6D200; }
.bp-footer-note { border-top:1px solid rgba(255,255,255,0.06); padding:24px 0; }
.bp-footer-note p { font-size:11px; color:rgba(255,255,255,0.28); line-height:1.7; max-width:1000px; }
.bp-footer-bottom { border-top:1px solid rgba(255,255,255,0.06); padding:20px 0; }
.bp-footer-bottom div { font-size:12px; color:rgba(255,255,255,0.2); }

/* MOBILE */
@media(max-width:820px){
  .bp-wrap { padding:0 20px; }
  .bp-nav-links { display:none; }
  .bp-hamburger { display:flex; }
  .bp-hero { padding:72px 0 60px; }
  .bp-hub-hero { padding:72px 0 56px; }
  .bp-section { padding:64px 0; }
  .bp-intro-grid, .bp-when-grid, .bp-spec-grid, .bp-pillar-grid, .bp-hub-grid { grid-template-columns:1fr; }
  .bp-intro-media { margin-top:36px; }
  .bp-intro-media img { height:280px; }
  .bp-footer-row { grid-template-columns:1fr; padding-bottom:32px; }
  .bp-footer-links { align-items:flex-start; }
}
`
