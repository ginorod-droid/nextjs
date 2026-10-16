// app/broker-programs/page.jsx  (route stays /broker-programs; page is "Deal Desk")
import { bpStyles, BrokerNav, BrokerFooter, programs, JsonLd, programsJsonLd, CAL, EMAIL, CREDIT } from './shared'

export const metadata = {
  title: 'Deal Desk | Bring Us the Commercial Deal | Acoma Capital Partners',
  description: 'The Acoma Deal Desk. Bankers with a turndown, wholesalers who need financing, placement agents, and families selling or refinancing commercial property. Send the deal, get a straight read.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/broker-programs' },
  openGraph: {
    title: 'Deal Desk | Acoma Capital Partners',
    description: 'Bring us the commercial deal. We place the financing or sell the property. You get paid or your client closes.',
    url: 'https://www.acomacapitalpartners.com/broker-programs',
    images: ['/program-no-doc.jpg'],
  },
}

const ddStyles = `
.dd-hero { background:#202A54; padding:0; }
.dd-hero-banner img { width:100%; height:auto; display:block; }
.dd-hero-cta { text-align:center; margin-top:40px; }
.dd-hero-cta .bp-cta-row { justify-content:center; }
.dd-stats { background:#2C9143; display:flex; margin-top:48px; }
.dd-stat { flex:1; padding:26px 18px; text-align:center; border-right:1px solid rgba(255,255,255,0.18); }
.dd-stat:last-child { border-right:0; }
.dd-stat-n { display:block; font-size:22px; font-weight:900; color:#fff; letter-spacing:-0.02em; line-height:1.1; }
.dd-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.75); margin-top:7px; }
.dd-proc { margin:40px 0 0; border-left:3px solid rgba(255,255,255,0.14); max-width:820px; }
.dd-proc-step { position:relative; padding:0 0 26px 32px; }
.dd-proc-step:last-child { padding-bottom:0; }
.dd-proc-dot { position:absolute; left:-12px; top:0; width:22px; height:22px; border-radius:50%; background:#1179EC; color:#fff; font-size:11px; font-weight:900; display:flex; align-items:center; justify-content:center; }
.dd-proc-step.g .dd-proc-dot { background:#2C9143; }
.dd-proc-step.y .dd-proc-dot { background:#F6D200; color:#202A54; }
.dd-proc-t { font-size:16px; font-weight:700; color:#fff; margin:0 0 3px; line-height:1.3; }
.dd-proc-d { font-size:14px; color:rgba(255,255,255,0.72); line-height:1.6; margin:0; }
.dd-portal-btn { display:inline-block; margin-top:40px; background:#F6D200; color:#202A54; padding:18px 38px; font-size:12px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; }
.dd-portal-btn:hover { opacity:0.88; }
.dd-prog-head { display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:center; }
.dd-prog-photo { position:relative; }
.dd-prog-photo img { width:100%; height:340px; object-fit:cover; display:block; }
.dd-prog-photo-frame { position:absolute; top:-14px; left:-14px; width:84px; height:84px; border:3px solid #2C9143; z-index:0; }
.dd-prog-photo-bar { position:absolute; left:0; right:0; bottom:0; height:5px; background:#F6D200; }
.dd-aud-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:44px; }
.dd-aud-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #1179EC; padding:34px 32px; display:flex; flex-direction:column; }
.dd-aud-card:nth-child(2){ border-top-color:#2C9143; }
.dd-aud-card:nth-child(3){ border-top-color:#F6D200; }
.dd-aud-card:nth-child(4){ border-top-color:#202A54; }
.dd-aud-icon { font-size:30px; line-height:1; margin-bottom:16px; }
.dd-aud-title { font-size:20px; font-weight:900; color:#202A54; letter-spacing:-0.01em; margin-bottom:10px; }
.dd-aud-body { font-size:15px; color:#555; line-height:1.7; margin-bottom:20px; flex:1; }
.dd-aud-link { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; color:#1179EC; text-decoration:none; align-self:flex-start; }
.dd-aud-link:hover { text-decoration:underline; }
.dd-prog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:44px; }
.dd-prog { background:#fff; border:1px solid #e4e8f0; padding:0 0 30px; display:flex; flex-direction:column; }
.dd-prog-top { height:6px; }
.dd-prog-pad { padding:30px 28px 0; display:flex; flex-direction:column; flex:1; }
.dd-prog-eyebrow { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; margin-bottom:12px; }
.dd-prog-name { font-size:26px; font-weight:900; color:#202A54; letter-spacing:-0.02em; line-height:1; margin-bottom:16px; }
.dd-prog-tag { font-size:14px; color:#555; line-height:1.65; margin-bottom:20px; flex:1; }
.dd-prog-facts { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px; }
.dd-prog-facts li { font-size:11px; font-weight:700; letter-spacing:0.03em; color:#202A54; background:#f0f3f8; padding:7px 12px; }
.dd-prog-links { display:flex; flex-direction:column; gap:10px; }
.dd-prog-link { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; }
.dd-prog-flyer { font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#8a93a3; text-decoration:none; }
.dd-prog-flyer:hover { color:#202A54; }
.dd-step-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:44px; }
.dd-step { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-top:4px solid #F6D200; padding:30px 26px; }
.dd-step-num { display:block; font-size:24px; font-weight:900; color:#F6D200; letter-spacing:-0.02em; margin-bottom:14px; }
.dd-step-title { font-size:15px; font-weight:900; color:#fff; margin-bottom:8px; }
.dd-step p { font-size:14px; color:rgba(255,255,255,0.78); line-height:1.65; margin:0; }
.dd-trust-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:44px; }
.dd-trust { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #2C9143; padding:30px 28px; }
.dd-trust-title { font-size:13px; font-weight:900; letter-spacing:0.06em; text-transform:uppercase; color:#202A54; margin-bottom:10px; }
.dd-trust p { font-size:14px; color:#666; line-height:1.7; margin:0; }
@media(max-width:820px){
  .dd-prog-head { grid-template-columns:1fr; gap:36px; }
  .dd-prog-photo { margin-top:12px; }
  .dd-prog-photo img { height:260px; }
  .dd-prog-grid { grid-template-columns:1fr; }
  .dd-aud-grid { grid-template-columns:1fr; }
  .dd-trust-grid { grid-template-columns:1fr; }
  .dd-stats { flex-wrap:wrap; }
  .dd-stat { min-width:50%; flex:none; border-right:none; border-bottom:1px solid rgba(255,255,255,0.18); }
}
`

const AUDIENCES = [
  {
    icon: '🏦',
    title: 'A banker with a turndown',
    body: 'Your file was solid and the box still said no. Hand it over. We qualify on bank statements, on the property, or on credit and equity, and we close the ones the bank walked away from.',
    cta: ['Send the scenario', '/broker-portal', false],
  },
  {
    icon: '🔑',
    title: 'A wholesaler who needs financing',
    body: 'You have the deal under contract and need capital to close or to carry it. Bridge and hard money from $100K to $20M, qualified on the property and the exit.',
    cta: ['See financing', '/commercial-loans#bridge', false],
  },
  {
    icon: '🤝',
    title: 'A placement agent or Silver Tsunami partner',
    body: 'You work with seniors and families in transition. Send the building or the referral. We handle the sale, the financing, and the cleanup, and you earn on what closes.',
    cta: ['Work with us', '/partners', false],
  },
  {
    icon: '🏢',
    title: 'A family selling or refinancing',
    body: 'A commercial property that needs to sell, or a loan that needs to be refinanced. We are a licensed brokerage and we place the financing. Tell us about the property.',
    cta: ['Commercial options', '/commercial-loans', false],
  },
]

const PROCESS = [
  ['1', 'Intake application', 'You submit the deal through the Broker Portal with the basics on the borrower and the property.', ''],
  ['2', 'Authorization to pull credit', 'The borrower signs an authorization so we can pull the credit report and read the file accurately.', ''],
  ['3', 'LOI and rate issued', 'We issue a letter of intent with the rate, term, and structure we can get done.', ''],
  ['4', 'List of conditions', 'A clear checklist of what the file needs to reach closing. No surprises later.', ''],
  ['5', 'Appraisal ordered', 'We order the appraisal and third-party reports the property requires.', ''],
  ['6', 'Submission', 'The complete file goes to the capital source for underwriting.', ''],
  ['7', 'Conditions cleared', 'We work the conditions down to zero and move the file to the closing table.', 'g'],
  ['8', 'Funded', 'The loan closes and funds. Your borrower is done, and you get paid.', 'y'],
]

const TRUST = [
  ['Commercial, not consumer', 'Acoma works commercial real estate: sales, financing, and the deals a bank will not touch. That is the whole focus.'],
  ['Decades in the market', 'Gino Rodrigues has worked commercial real estate and lending in Colorado since the 1990s. You are dealing with someone who has closed these before.'],
  ['A licensed brokerage', 'Acoma Capital Partners, Inc. is a licensed Colorado real estate company. We arrange financing through third-party capital and never take a principal position.'],
]

export default function DealDesk() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + ddStyles }} />
      <JsonLd data={programsJsonLd('https://www.acomacapitalpartners.com/broker-programs')} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav current="broker-programs" hideLogo />

      {/* HERO — banner */}
      <section className="dd-hero">
        <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          Deal turned down? Send it to us. When a deal does not fit traditional guidelines, Acoma Capital Partners has the programs and capital to get it done. Send your declined, stalled, or hard-to-place commercial loans and you get paid.
        </h1>
        <div className="dd-hero-banner">
          <img src="/deal-desk-hero.jpg" alt="Acoma Capital Partners. Deal turned down? Send it to us. When a deal doesn't fit traditional guidelines, we have the programs and capital to get it done. Send your declined, stalled, or hard-to-place commercial loans, and you get paid." />
        </div>
        <div className="bp-wrap dd-hero-cta">
          <div className="bp-cta-row">
            <a href="/broker-portal" className="bp-btn-yellow">Submit a Deal</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
          </div>
        </div>
        <div className="dd-stats">
          <div className="dd-stat"><span className="dd-stat-n">Since the &rsquo;90s</span><span className="dd-stat-l">In commercial real estate</span></div>
          <div className="dd-stat"><span className="dd-stat-n">$100K&ndash;$20M</span><span className="dd-stat-l">Loan range</span></div>
          <div className="dd-stat"><span className="dd-stat-n">Same day</span><span className="dd-stat-l">Straight read on your deal</span></div>
          <div className="dd-stat"><span className="dd-stat-n">Commercial</span><span className="dd-stat-l">Only, never consumer</span></div>
        </div>
      </section>

      {/* WHO SENDS US DEALS */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">Who Sends Us Deals</p>
          <div className="bp-rule" />
          <h2>Four doors to the same table.</h2>
          <p className="bp-lead">Everyone here is holding a commercial deal that needs a home. Find the one that fits, and send it over.</p>
          <div className="dd-aud-grid">
            {AUDIENCES.map((a) => {
              const [label, href, ext] = a.cta
              return (
                <div key={a.title} className="dd-aud-card">
                  <span className="dd-aud-icon" aria-hidden="true">{a.icon}</span>
                  <p className="dd-aud-title">{a.title}</p>
                  <p className="dd-aud-body">{a.body}</p>
                  <a className="dd-aud-link" href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}>{label} →</a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR LOAN PROCESS */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap">
          <p className="bp-section-label bp-label-yellow">Our Loan Process</p>
          <div className="bp-rule bp-rule-yellow" />
          <h2 className="bp-white">How it works, start to funded.</h2>
          <p className="bp-muted-white">Every deal runs the same clear path. You submit it through the Broker Portal, and from there you always know where it stands.</p>
          <div className="dd-proc">
            {PROCESS.map(([n, t, d, cls]) => (
              <div key={n} className={'dd-proc-step' + (cls ? ' ' + cls : '')}>
                <span className="dd-proc-dot">{n}</span>
                <p className="dd-proc-t">{t}</p>
                <p className="dd-proc-d">{d}</p>
              </div>
            ))}
          </div>
          <a href="/broker-portal" className="dd-portal-btn">Open the Broker Portal →</a>
        </div>
      </section>

      {/* OUR LOAN PROGRAMS */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <div className="dd-prog-head">
            <div>
              <p className="bp-section-label">How We Finance It</p>
              <div className="bp-rule" />
              <h2 style={{ marginBottom: 20 }}>Our Loan Programs.</h2>
              <p className="bp-lead">When the deal needs capital, these are the ways we get it done. $100K to $2M on the programs, up to $20M on a bridge. Start at the top for the most leverage, and drop a tier only when the documentation is not there.</p>
            </div>
            <div className="dd-prog-photo">
              <span className="dd-prog-photo-frame" />
              <img src="/deal-closing.jpg" alt="Acoma Capital Partners working a commercial deal with a partner" />
              <span className="dd-prog-photo-bar" />
            </div>
          </div>
          <div className="dd-prog-grid">
            {programs.map((p) => (
              <article key={p.slug} className="dd-prog">
                <div className="dd-prog-top" style={{ background: p.accent }} />
                <div className="dd-prog-pad">
                  <p className="dd-prog-eyebrow" style={{ color: p.accent }}>{p.eyebrow}</p>
                  <h3 className="dd-prog-name">{p.name}</h3>
                  <p className="dd-prog-tag">{p.tagline}</p>
                  <ul className="dd-prog-facts">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="dd-prog-links">
                    <a href={'/broker-programs/' + p.slug} className="dd-prog-link" style={{ color: p.accent }}>See full terms →</a>
                    <a href={p.flyer} target="_blank" rel="noreferrer" className="dd-prog-flyer">Program sheet (PDF) ↓</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="bp-wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
          <p className="bp-extra">Need speed instead of maximum leverage? A <a href="/commercial-loans#bridge" style={{ color: '#1179EC', fontWeight: 700, textDecoration: 'none' }}>bridge or hard money loan</a> qualifies on the property and the exit, from $100K to $20M.</p>
        </div>
      </section>

      {/* WHY ACOMA */}
      <section className="bp-section">
        <div className="bp-wrap">
          <p className="bp-section-label">Why Acoma</p>
          <div className="bp-rule" />
          <h2>Someone who has closed it before.</h2>
          <div className="dd-trust-grid">
            {TRUST.map(([t, d]) => (
              <div key={t} className="dd-trust">
                <p className="dd-trust-title">{t}</p>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap bp-cta-block">
          <h2 className="bp-white">Have a deal in mind? Let&apos;s talk.</h2>
          <p className="bp-muted-white">Send the scenario and get a straight read, usually the same day. Property type, the ask, and a rough credit picture is enough to start.</p>
          <div className="bp-cta-row">
            <a href="/broker-portal" className="bp-btn-yellow">Submit a Deal</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-green">Book a Call</a>
            <a href={EMAIL} className="bp-btn-ghost-white">Email Gino</a>
          </div>
          <p className="bp-cta-phone"><a href="tel:7207721327">(720) 772-1327</a> &nbsp;·&nbsp; Gino Rodrigues &nbsp;·&nbsp; Acoma Capital Partners</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
