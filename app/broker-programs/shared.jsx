// app/broker-programs/shared.jsx
// Shared data, styles, and building blocks for the Acoma broker program pages.

export const CAL   = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09rs3O9rwu5VlkCzoqHWgwKnPa1cAivEx_mCwHugssbgmq6Kgc8NjBPUSvFlW-u82tAyBpePoI?gv=true'
export const FORM  = 'https://docs.google.com/forms/d/e/1FAIpQLSdPUr1haWoLdK6vN8P_3KTRhNlZxv2bkWz6XV36KgusKnot1w/viewform'
export const EMAIL = 'mailto:ginorod@acomacapitalpartners.com'

export const programs = [
  {
    slug: 'no-doc',
    eyebrow: 'No Income Verification',
    name: 'No Doc Streamline',
    accent: '#1179EC',
    tagline: 'Financing without tax returns, bank statements, or operating statements.',
    intro: 'Strong borrowers get qualified on credit, equity, and the property itself, not on paperwork. When the tax returns do not tell the whole story, this program keeps the deal moving.',
    when: [
      'The borrower reports lower income for tax purposes.',
      'Tax returns show uneven year-over-year growth.',
      'The borrower needs more flexibility than a bank will allow.',
    ],
    specs: [
      ['Loan Size', '$100K to $2.5M'],
      ['Purpose', 'Purchase, Refinance, Cash-Out'],
      ['Term', '5-Year ARM / 30-Year Fixed'],
      ['Max LTV', '75% purchase, 70% refinance'],
      ['Minimum FICO', '700'],
      ['Amortization', 'Up to 30 years'],
    ],
    pillars: [
      ['No income documents', 'No tax returns, bank statements, or operating statements needed to qualify.'],
      ['Fast submission', 'An application and a credit report are enough to get a read on the deal.'],
      ['Driven by equity', 'Decisions rest on FICO, LTV, and the strength of the property.'],
    ],
  },
  {
    slug: 'bank-statement',
    eyebrow: 'Owner-Occupied',
    name: 'Bank Statement',
    accent: '#2C9143',
    tagline: 'A path to financing for self-employed owners who bank their income but do not show it on returns.',
    intro: 'Qualify on twelve months of business bank statements instead of tax returns. Built for owner-occupied commercial property and the business owners inside it.',
    when: [
      'The borrower is self-employed.',
      'The borrower cannot provide tax returns, pay stubs, or W-2s.',
      'The borrower needs more flexibility than a traditional bank offers.',
    ],
    specs: [
      ['Loan Size', 'Up to $2.5M'],
      ['Purpose', 'Purchase, Refinance, Cash-Out'],
      ['Term', '5-Year ARM / 30-Year Fixed'],
      ['Max LTV', 'Up to 80%'],
      ['Minimum FICO', '650'],
      ['Amortization', 'Up to 30 years'],
    ],
    pillars: [
      ['Statements, not returns', 'Income is verified through twelve months of business bank statements.'],
      ['Owner-occupied focus', 'Designed for the business owner who occupies the property.'],
      ['Room to move', 'Flexibility for borrowers who fall outside rigid bank boxes.'],
    ],
  },
  {
    slug: 'multifamily',
    eyebrow: '5+ Units',
    name: 'Multifamily',
    accent: '#F6D200',
    tagline: 'Purchase, refinance, and cash-out financing for stabilized multifamily assets.',
    intro: 'Straightforward capital for 5+ unit multifamily, with flexible cash-out and reduced-documentation options for the right file.',
    when: [
      'The borrower is buying or refinancing a 5+ unit property.',
      'The borrower wants to pull equity through a cash-out refinance.',
      'The file benefits from reduced-documentation flexibility.',
    ],
    specs: [
      ['Loan Size', '$100K to $2.5M and up'],
      ['Purpose', 'Purchase, Refinance, Cash-Out'],
      ['Max LTV', '80% purchase, 75% refinance'],
      ['Property', '5+ unit multifamily'],
      ['Documentation', 'Reduced-doc options available'],
      ['Amortization', 'Up to 30 years'],
    ],
    pillars: [
      ['Flexible cash-out', 'Pull equity to recapitalize or fund the next acquisition.'],
      ['Reduced-doc options', 'Lighter documentation paths for qualifying files.'],
      ['Built for operators', 'Terms that fit how multifamily owners actually run deals.'],
    ],
  },
  {
    slug: 'dscr',
    eyebrow: '1 to 4 Unit Investment',
    name: 'DSCR',
    accent: '#1179EC',
    tagline: 'Qualify investment property on the cash flow it produces, not the borrower’s personal income.',
    intro: 'For 1 to 4 unit residential investment property that services its own debt. A decline on personal income can become an approval on property performance.',
    when: [
      'The borrower does not pass a standard DTI calculation.',
      'The borrower does not want to produce tax returns or use personal income.',
      'The borrower owns more properties than agency programs allow.',
    ],
    specs: [
      ['Loan Size', '$100K to $2.0M'],
      ['Purpose', 'Purchase, Refinance, Cash-Out'],
      ['Term', '30-Year Fixed'],
      ['Max LTV', 'Up to 80%'],
      ['Minimum FICO', 'SFR 660, 2 to 4 unit 680'],
      ['DSCR', 'As low as 0.75x'],
    ],
    extra: 'Eligible property types: 1 to 4 unit attached or detached, short-term rentals, warrantable and non-warrantable condos, and PUDs. No tax returns required.',
    pillars: [
      ['Cash flow qualifies', 'The property’s income carries the loan, not the borrower’s.'],
      ['No tax returns', 'Personal income and DTI stay out of the file.'],
      ['Investor scale', 'Room for borrowers who have outgrown agency limits.'],
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
          <a href="/broker-programs">All Programs</a>
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
        <a href="/broker-programs">All Programs</a>
        <a href="/broker-programs/no-doc">No Doc Streamline</a>
        <a href="/broker-programs/bank-statement">Bank Statement</a>
        <a href="/broker-programs/multifamily">Multifamily</a>
        <a href="/broker-programs/dscr">DSCR</a>
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
            <a href="/broker-programs">All Programs</a>
            <a href="/bridge-loans">Bridge Loans</a>
            <a href="/pueblo-parcel">Pueblo Parcel</a>
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

      {/* INTRO */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">The Program</p>
          <div className="bp-rule" style={{ background: p.accent }} />
          <p className="bp-lead">{p.intro}</p>
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
        </div>
      </section>

      {/* PILLARS */}
      <section className="bp-section bp-section-off">
        <div className="bp-wrap">
          <p className="bp-section-label">Why Brokers Bring Us These Deals</p>
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
.bp-hub-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:8px; }
.bp-prog-card { display:flex; flex-direction:column; background:#fff; border:1px solid #e4e8f0; border-top:5px solid #1179EC; padding:40px 36px; text-decoration:none; transition:transform .2s, box-shadow .2s; }
.bp-prog-card:hover { transform:translateY(-4px); box-shadow:0 20px 50px rgba(0,0,0,0.08); }
.bp-prog-eyebrow { font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#aaa; margin-bottom:12px; }
.bp-prog-name { font-size:30px; font-weight:900; letter-spacing:-0.02em; color:#202A54; margin-bottom:14px; line-height:1.05; }
.bp-prog-tag { font-size:15px; color:#666; line-height:1.7; margin-bottom:24px; flex:1; }
.bp-prog-link { font-size:11px; font-weight:900; letter-spacing:0.14em; text-transform:uppercase; color:#1179EC; }

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
  .bp-when-grid, .bp-spec-grid, .bp-pillar-grid, .bp-hub-grid { grid-template-columns:1fr; }
  .bp-footer-row { grid-template-columns:1fr; padding-bottom:32px; }
  .bp-footer-links { align-items:flex-start; }
}
`
