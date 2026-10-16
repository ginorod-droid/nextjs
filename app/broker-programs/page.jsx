// app/broker-programs/page.jsx  (route stays /broker-programs; page is "Deal Desk")
import { bpStyles, BrokerNav, BrokerFooter, ProgramRows, JsonLd, programsJsonLd, CAL, FORM, EMAIL, CREDIT } from './shared'

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
  .dd-aud-grid { grid-template-columns:1fr; }
  .dd-step-grid { grid-template-columns:1fr 1fr; }
  .dd-trust-grid { grid-template-columns:1fr; }
}
`

const AUDIENCES = [
  {
    icon: '🏦',
    title: 'A banker with a turndown',
    body: 'Your file was solid and the box still said no. Hand it over. We qualify on bank statements, on the property, or on credit and equity, and we close the ones the bank walked away from.',
    cta: ['Send the scenario', FORM, true],
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

const STEPS = [
  ['01', 'Send the scenario', 'Give us the property, the ask, and a rough credit picture. One short form or a call.'],
  ['02', 'Get a straight read', 'Usually the same day. We tell you whether it fits, which path, and roughly where it lands.'],
  ['03', 'We place or sell it', 'We arrange the financing through our lender relationships, or list and sell the property.'],
  ['04', 'It closes', 'Your borrower funds, your client closes, and referral partners get paid.'],
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

      <BrokerNav current="broker-programs" />

      {/* HERO */}
      <section className="bp-hub-hero">
        <div className="bp-wrap bp-hero-split">
          <div className="bp-hero-text">
            <p className="bp-eyebrow" style={{ color: '#F6D200' }}>The Acoma Deal Desk</p>
            <h1 className="bp-h1">Bring Us<br />the Deal.</h1>
            <p className="bp-hero-sub">A banker with a turndown. A wholesaler who needs financing. A placement agent with a senior&apos;s building. A family selling or refinancing. One desk, and someone on the other end who has closed it before.</p>
            <div className="bp-cta-row">
              <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-yellow">Send Us the Deal</a>
              <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
            </div>
          </div>
          <div className="bp-hero-photo">
            <span className="bp-hero-photo-frame" />
            <img src="/deal-closing.jpg" alt="Acoma Capital Partners working a commercial deal with a partner" />
            <span className="bp-hero-photo-bar" />
          </div>
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

      {/* HOW WE FINANCE IT */}
      <section>
        <div className="bp-wrap" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <p className="bp-section-label">How We Finance It</p>
          <div className="bp-rule" />
          <h2 style={{ marginBottom: 8 }}>The programs behind the desk.</h2>
          <p className="bp-lead">When the deal needs capital, these are the ways we get it done. $100K to $2M on the programs, up to $20M on a bridge. Start at the top for the most leverage, and drop a tier only when the documentation is not there.</p>
        </div>
        <ProgramRows variant="broker" />
        <div className="bp-wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
          <p className="bp-extra">Need speed instead of maximum leverage? A <a href="/commercial-loans#bridge" style={{ color: '#1179EC', fontWeight: 700, textDecoration: 'none' }}>bridge or hard money loan</a> qualifies on the property and the exit, from $100K to $20M.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bp-section bp-section-navy">
        <div className="bp-wrap">
          <p className="bp-section-label bp-label-yellow">How It Works</p>
          <div className="bp-rule bp-rule-yellow" />
          <h2 className="bp-white">From scenario to closing.</h2>
          <div className="dd-step-grid">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="dd-step">
                <span className="dd-step-num">{n}</span>
                <p className="dd-step-title">{t}</p>
                <p>{d}</p>
              </div>
            ))}
          </div>
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
            <a href={FORM} target="_blank" rel="noreferrer" className="bp-btn-yellow">Send Us the Deal</a>
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
