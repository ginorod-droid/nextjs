'use client'
import { useEffect, useState } from 'react'
import { bpStyles, BrokerFooter, programs, CAL } from '../broker-programs/shared'

// Submissions post to the Acoma Apps Script web app (same proven method as the email popup).
const ENDPOINT =
  'https://script.google.com/macros/s/AKfycbze_jrkesBUQyu4rVUFko2EGoXDhOGw1WiNJ4iGaOuwW7rczi3EjG-F4uIxXYV93Gy4/exec'
const STORAGE_KEY = 'acoma_broker_portal'

const ppStyles = `
#pp { font-family:'Poppins',sans-serif; background:#fff; color:#202A54; }
#pp *,#pp *::before,#pp *::after { box-sizing:border-box; }
.pp-nav { background:#202A54; padding:16px 0; }
.pp-nav-row { display:flex; align-items:center; justify-content:space-between; }
.pp-nav img { height:34px; width:auto; display:block; }
.pp-back { font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.6); text-decoration:none; }
.pp-back:hover { color:#fff; }
/* GATE SCREEN */
.pp-gate { background:#202A54; padding:72px 0 96px; min-height:62vh; }
.pp-gate-inner { max-width:560px; }
.pp-gate-card { background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-top:5px solid #F6D200; padding:40px 38px; margin-top:30px; }
/* HERO */
.pp-hero { background:#202A54; padding:60px 0 0; }
.pp-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#F6D200; margin-bottom:22px; }
.pp-h1 { font-family:'Poppins'; font-size:clamp(40px,7vw,82px); font-weight:900; line-height:0.94; letter-spacing:-0.03em; color:#fff; text-transform:uppercase; margin-bottom:24px; }
.pp-gate .pp-h1 { font-size:clamp(34px,6vw,58px); }
.pp-hero-sub { font-size:18px; color:rgba(255,255,255,0.72); line-height:1.6; max-width:580px; margin-bottom:34px; }
.pp-stats { background:#2C9143; display:flex; margin-top:52px; }
.pp-stat { flex:1; padding:26px 18px; text-align:center; border-right:1px solid rgba(255,255,255,0.18); }
.pp-stat:last-child { border-right:0; }
.pp-stat-n { display:block; font-size:22px; font-weight:900; color:#fff; letter-spacing:-0.02em; line-height:1.1; }
.pp-stat-l { display:block; font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.75); margin-top:7px; }
/* SECTIONS */
.pp-sec { padding:88px 0; border-top:1px solid #e8ecf0; }
.pp-sec-off { background:#f4f6f9; }
.pp-sec-navy { background:#202A54; border-top:none; }
.pp-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:14px; }
.pp-sec-navy .pp-label, .pp-gate .pp-label { color:#F6D200; }
.pp-rule { width:46px; height:4px; background:#2C9143; margin-bottom:22px; }
.pp-sec-navy .pp-rule, .pp-gate .pp-rule { background:#F6D200; }
#pp h2 { font-family:'Poppins'; font-size:clamp(30px,4vw,48px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:16px; max-width:760px; }
.pp-white { color:#fff !important; }
.pp-lead { font-size:16px; line-height:1.7; color:#555; max-width:680px; margin-bottom:0; }
.pp-muted-white { color:rgba(255,255,255,0.66) !important; }
/* THREE WAYS */
.pp-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:40px; }
.pp-card { background:#fff; border:1px solid #e4e8f0; border-top:4px solid #1179EC; padding:32px 28px; }
.pp-card:nth-child(2){ border-top-color:#2C9143; } .pp-card:nth-child(3){ border-top-color:#F6D200; }
.pp-card h4 { font-size:18px; font-weight:900; color:#202A54; margin-bottom:10px; }
.pp-card p { font-size:14px; color:#666; line-height:1.65; margin:0; }
/* PROGRAMS */
.pp-prog { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:40px; }
.pp-p { background:#fff; border:1px solid #e4e8f0; padding:0 0 28px; display:flex; flex-direction:column; }
.pp-ptop { height:6px; }
.pp-ppad { padding:28px 26px 0; display:flex; flex-direction:column; flex:1; }
.pp-peye { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:10px; }
.pp-pname { font-size:24px; font-weight:900; color:#202A54; letter-spacing:-0.02em; line-height:1; margin-bottom:14px; }
.pp-ptag { font-size:14px; color:#555; line-height:1.6; margin-bottom:18px; flex:1; }
.pp-pfacts { list-style:none; display:flex; flex-wrap:wrap; gap:7px; padding:0; margin:0 0 18px; }
.pp-pfacts li { font-size:11px; font-weight:700; color:#202A54; background:#f0f3f8; padding:6px 11px; }
.pp-plink { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; }
.pp-pnote { margin-top:24px; font-size:14px; color:#555; line-height:1.6; }
/* PROCESS */
.pp-steps { margin:36px 0 0; border-left:3px solid rgba(255,255,255,0.14); max-width:820px; }
.pp-step { position:relative; padding:0 0 24px 32px; }
.pp-step:last-child { padding-bottom:0; }
.pp-dot { position:absolute; left:-12px; top:0; width:22px; height:22px; border-radius:50%; background:#1179EC; color:#fff; font-size:11px; font-weight:900; display:flex; align-items:center; justify-content:center; }
.pp-step.g .pp-dot { background:#2C9143; } .pp-step.y .pp-dot { background:#F6D200; color:#202A54; }
.pp-st { font-size:16px; font-weight:700; color:#fff; margin:0 0 3px; line-height:1.3; }
.pp-sd { font-size:14px; color:rgba(255,255,255,0.72); line-height:1.6; margin:0; }
/* CALCULATOR */
.pp-calc { display:grid; grid-template-columns:1fr 1fr; gap:30px; align-items:center; margin-top:34px; }
.pp-calc .pp-row { margin-bottom:18px; }
.pp-calc .pp-row:last-child { margin-bottom:0; }
.pp-calc label { display:block; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#888; margin-bottom:7px; }
.pp-calc input { width:100%; height:44px; border:1px solid #d4d9e0; padding:0 14px; font-size:15px; font-family:'Inter',sans-serif; color:#202A54; outline:none; }
.pp-out { background:#202A54; padding:34px; text-align:center; }
.pp-out-l { font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.55); margin-bottom:8px; }
.pp-out-v { font-size:42px; font-weight:900; color:#F6D200; letter-spacing:-0.02em; }
.pp-out-n { font-size:12px; color:rgba(255,255,255,0.5); line-height:1.5; margin-top:12px; }
/* FORM */
.pp-card-nav { background:#202A54; padding:40px 40px 36px; margin-top:34px; max-width:720px; }
.pp-form { display:grid; grid-template-columns:1fr 1fr; gap:15px; }
.pp-f { display:flex; flex-direction:column; } .pp-f.full { grid-column:1 / -1; }
.pp-f label { font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:7px; }
.pp-f input, .pp-f select { height:44px; background:#fff; border:1px solid rgba(255,255,255,0.15); padding:0 14px; font-size:15px; font-family:'Inter',sans-serif; color:#202A54; outline:none; }
.pp-f input:focus, .pp-f select:focus { box-shadow:0 0 0 2px #F6D200; }
.pp-submit { grid-column:1 / -1; background:#2C9143; color:#fff; border:0; height:52px; font-size:13px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; margin-top:6px; }
.pp-submit:disabled { opacity:0.65; cursor:wait; }
.pp-err { grid-column:1 / -1; font-size:13px; color:#f0a8a8; margin-top:8px; }
.pp-note { grid-column:1 / -1; font-size:12px; color:rgba(255,255,255,0.4); line-height:1.55; margin-top:8px; }
.pp-hp { position:absolute; left:-9999px; height:0; width:0; opacity:0; }
.pp-done { background:#202A54; padding:52px 44px; margin-top:34px; max-width:720px; text-align:center; border-top:5px solid #F6D200; }
.pp-done h3 { font-family:'Poppins'; font-size:26px; font-weight:900; color:#fff; margin-bottom:12px; }
.pp-done p { font-size:15px; color:rgba(255,255,255,0.68); line-height:1.6; max-width:460px; margin:0 auto; }
@media(max-width:760px){
  .pp-3,.pp-prog { grid-template-columns:1fr; }
  .pp-calc { grid-template-columns:1fr; }
  .pp-card-nav, .pp-gate-card { padding:32px 24px; } .pp-form { grid-template-columns:1fr; }
  .pp-sec { padding:60px 0; }
  .pp-stats { flex-wrap:wrap; } .pp-stat { min-width:50%; border-right:0; border-bottom:1px solid rgba(255,255,255,0.18); }
}
`

const WAYS = [
  ['Refer the deal', 'Hand us the scenario and we take it from there. You earn a referral fee when it closes, nothing else on your plate.'],
  ['Work it with us', 'Stay on the file through closing and earn more. We show you how it moves and keep you in every step.'],
  ['Become a regular partner', 'Send deals often? We set you up as a standing partner with a direct line and priority reads.'],
]

const PROCESS = [
  ['1', 'Intake application', 'You submit the deal through the portal with the basics on the borrower and the property.', ''],
  ['2', 'Authorization to pull credit', 'The borrower signs an authorization so we can pull the credit report and read the file accurately.', ''],
  ['3', 'LOI and rate issued', 'We issue a letter of intent with the rate, term, and structure we can get done.', ''],
  ['4', 'List of conditions', 'A clear checklist of what the file needs to reach closing. No surprises later.', ''],
  ['5', 'Appraisal ordered', 'We order the appraisal and third-party reports the property requires.', ''],
  ['6', 'Submission', 'The complete file goes to the capital source for underwriting.', ''],
  ['7', 'Conditions cleared', 'We work the conditions down to zero and move the file to the closing table.', 'g'],
  ['8', 'Funded', 'The loan closes and funds. Your borrower is done, and you get paid.', 'y'],
]

const BUILDING_TYPES = ['Retail', 'Mixed-use (commercial)', 'Warehouse / self-storage', 'Office', 'Light industrial', 'Automotive', 'Mobile home park', 'Restaurant / bar', 'Day care', 'Other']
const DEAL_TYPES = ['Purchase', 'Refinance', 'Cash-out refinance', 'Bridge / hard money', 'Not sure yet']
const CREDIT_RANGES = ['740+', '700–739', '680–699', '650–679', 'Below 650', 'Not sure']

async function postJSON(payload) {
  const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) })
  const out = await res.json()
  if (!out || !out.ok) throw new Error('failed')
}

function ColorBar() {
  return (
    <div className="bp-colorbar">
      <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
      <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
    </div>
  )
}

export default function BrokerPortal() {
  const [step, setStep] = useState('gate') // gate | deal | done
  const [broker, setBroker] = useState({ name: '', company: '', email: '', phone: '' })
  const [deal, setDeal] = useState({ dealType: '', amount: '', buildingType: '', credit: '' })
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState('idle')
  const [err, setErr] = useState('')
  const [calc, setCalc] = useState({ amt: 500000, rate: 9.25, yrs: 25 })

  // Returning broker on this device skips the gate and sees the full page.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) { const b = JSON.parse(saved); if (b && b.email) { setBroker(b); setStep('deal') } }
    } catch {}
  }, [])

  const payment = (() => {
    const P = parseFloat(calc.amt) || 0
    const r = (parseFloat(calc.rate) || 0) / 100 / 12
    const n = (parseFloat(calc.yrs) || 0) * 12
    const pay = r > 0 && n > 0 ? (P * r) / (1 - Math.pow(1 + r, -n)) : n > 0 ? P / n : 0
    return '$' + Math.round(pay).toLocaleString('en-US')
  })()

  const submitGate = async (e) => {
    e.preventDefault(); setErr('')
    if (!broker.name || !broker.email || !broker.phone) { setErr('Name, email, and phone are required.'); return }
    if (status === 'sending') return
    setStatus('sending')
    try {
      await postJSON({ formType: 'broker_signup', ...broker, website: hp, page: '/broker-portal' })
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(broker)) } catch {}
      setStatus('idle'); setStep('deal')
    } catch { setStatus('error'); setErr('Something went wrong. Email ginorod@acomacapitalpartners.com and we will take it from there.') }
  }

  const submitDeal = async (e) => {
    e.preventDefault(); setErr('')
    if (!deal.dealType || !deal.amount || !deal.buildingType || !deal.credit) { setErr('Please complete every field.'); return }
    if (status === 'sending') return
    setStatus('sending')
    try {
      await postJSON({ formType: 'broker_deal', ...broker, ...deal, website: hp, page: '/broker-portal' })
      setStatus('idle'); setStep('done')
    } catch { setStatus('error'); setErr('Something went wrong. Email ginorod@acomacapitalpartners.com and we will take it from there.') }
  }

  const relock = () => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setBroker({ name: '', company: '', email: '', phone: '' })
    setDeal({ dealType: '', amount: '', buildingType: '', credit: '' })
    setStep('gate')
  }

  // ───────────────────────── GATE: the whole page sits behind this ─────────────────────────
  if (step === 'gate') {
    return (
      <div id="pp">
        <style dangerouslySetInnerHTML={{ __html: bpStyles + ppStyles }} />
        <ColorBar />
        <nav className="pp-nav">
          <div className="bp-wrap pp-nav-row">
            <a href="/" aria-label="Acoma Capital Partners home"><img src="/acoma-logo-white.png" alt="Acoma Capital Partners" /></a>
            <a href="/broker-programs" className="pp-back">← Back to Deal Desk</a>
          </div>
        </nav>

        <section className="pp-gate">
          <div className="bp-wrap pp-gate-inner">
            <p className="pp-eyebrow">Broker Portal</p>
            <h1 className="pp-h1">Commercial Deals Start Here.</h1>
            <p className="pp-hero-sub">This is the Acoma deal desk, for brokers and professionals. Introduce yourself to go in. On the other side you get our programs, the process, a payment calculator, and the deal form.</p>
            <div className="pp-gate-card">
              <p className="pp-label">Sign in to send a deal</p>
              <div className="pp-rule" />
              <form className="pp-form" onSubmit={submitGate}>
                <input type="text" className="pp-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                <div className="pp-f full"><label>Your name</label><input type="text" placeholder="First and last name" value={broker.name} onChange={(e) => setBroker({ ...broker, name: e.target.value })} /></div>
                <div className="pp-f"><label>Company</label><input type="text" placeholder="Company (optional)" value={broker.company} onChange={(e) => setBroker({ ...broker, company: e.target.value })} /></div>
                <div className="pp-f"><label>Telephone</label><input type="tel" placeholder="(720) 555-0100" value={broker.phone} onChange={(e) => setBroker({ ...broker, phone: e.target.value })} /></div>
                <div className="pp-f full"><label>Email</label><input type="email" placeholder="you@company.com" value={broker.email} onChange={(e) => setBroker({ ...broker, email: e.target.value })} /></div>
                <button className="pp-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'One moment…' : 'Enter the Portal →'}</button>
                {err && <p className="pp-err">{err}</p>}
                <p className="pp-note">We use this to reach you about your deal. Nothing is shared. For brokers and professionals, not the general public.</p>
              </form>
            </div>
          </div>
        </section>

        <BrokerFooter />
      </div>
    )
  }

  // ───────────────────────── UNLOCKED: the full page ─────────────────────────
  return (
    <div id="pp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + ppStyles }} />
      <ColorBar />

      <nav className="pp-nav">
        <div className="bp-wrap pp-nav-row">
          <a href="/" aria-label="Acoma Capital Partners home"><img src="/acoma-logo-white.png" alt="Acoma Capital Partners" /></a>
          <a href="/broker-programs" className="pp-back">← Back to Deal Desk</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pp-hero">
        <div className="bp-wrap">
          <p className="pp-eyebrow">The Acoma Deal Desk</p>
          <h1 className="pp-h1">Commercial Deals<br />Start Here.</h1>
          <p className="pp-hero-sub">Declined, stalled, or hard to place. Bring us the commercial file a bank walked away from and we find the capital to close it. You get paid.</p>
          <div className="bp-cta-row">
            <a href="#portal-form" className="bp-btn-yellow">Submit a Deal</a>
            <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-ghost-white">Book a Call</a>
          </div>
        </div>
        <div className="pp-stats">
          <div className="pp-stat"><span className="pp-stat-n">Since the &rsquo;90s</span><span className="pp-stat-l">In commercial real estate</span></div>
          <div className="pp-stat"><span className="pp-stat-n">$100K&ndash;$20M</span><span className="pp-stat-l">Loan range</span></div>
          <div className="pp-stat"><span className="pp-stat-n">Same day</span><span className="pp-stat-l">Straight read on your deal</span></div>
          <div className="pp-stat"><span className="pp-stat-n">Commercial</span><span className="pp-stat-l">Only, never consumer</span></div>
        </div>
      </section>

      {/* THREE WAYS */}
      <section className="pp-sec">
        <div className="bp-wrap">
          <p className="pp-label">Work With Us</p><div className="pp-rule" />
          <h2>Three ways to send a deal.</h2>
          <p className="pp-lead">Send it and step back, or stay in and work it with us. Your call, either way.</p>
          <div className="pp-3">
            {WAYS.map(([t, d]) => <div key={t} className="pp-card"><h4>{t}</h4><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="pp-sec pp-sec-off">
        <div className="bp-wrap">
          <p className="pp-label">Our Loan Programs</p><div className="pp-rule" />
          <h2>Four ways to finance it.</h2>
          <div className="pp-prog">
            {programs.map((p) => (
              <article key={p.slug} className="pp-p">
                <div className="pp-ptop" style={{ background: p.accent }} />
                <div className="pp-ppad">
                  <p className="pp-peye" style={{ color: p.accent }}>{p.eyebrow}</p>
                  <h3 className="pp-pname">{p.name}</h3>
                  <p className="pp-ptag">{p.tagline}</p>
                  <ul className="pp-pfacts">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                  <a href={'/broker-programs/' + p.slug} className="pp-plink" style={{ color: p.accent }}>See full terms →</a>
                </div>
              </article>
            ))}
          </div>
          <p className="pp-pnote">Plus <a href="/commercial-loans#bridge" style={{ color: '#1179EC', fontWeight: 700, textDecoration: 'none' }}>bridge and hard money</a> from $100K to $20M when speed matters more than leverage.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pp-sec pp-sec-navy">
        <div className="bp-wrap">
          <p className="pp-label">Our Loan Process</p><div className="pp-rule" />
          <h2 className="pp-white">How it works, start to funded.</h2>
          <div className="pp-steps">
            {PROCESS.map(([n, t, d, cls]) => (
              <div key={n} className={'pp-step' + (cls ? ' ' + cls : '')}>
                <span className="pp-dot">{n}</span>
                <p className="pp-st">{t}</p>
                <p className="pp-sd">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="pp-sec pp-sec-off">
        <div className="bp-wrap">
          <p className="pp-label">Quick Estimate</p><div className="pp-rule" />
          <h2>Payment calculator.</h2>
          <p className="pp-lead">A rough monthly payment so you can size the deal before you send it. Rates start around 9.25% and move with the deal; this is an estimate, not a quote.</p>
          <div className="pp-calc">
            <div>
              <div className="pp-row"><label>Loan amount</label><input type="number" value={calc.amt} onChange={(e) => setCalc({ ...calc, amt: e.target.value })} /></div>
              <div className="pp-row"><label>Interest rate (%)</label><input type="number" step="0.1" value={calc.rate} onChange={(e) => setCalc({ ...calc, rate: e.target.value })} /></div>
              <div className="pp-row"><label>Amortization (years)</label><input type="number" value={calc.yrs} onChange={(e) => setCalc({ ...calc, yrs: e.target.value })} /></div>
            </div>
            <div className="pp-out">
              <p className="pp-out-l">Estimated monthly payment</p>
              <p className="pp-out-v">{payment}</p>
              <p className="pp-out-n">Principal and interest only. Taxes, insurance, and reserves not included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEAL FORM */}
      <section className="pp-sec" id="portal-form">
        <div className="bp-wrap">
          {step === 'deal' && (
            <>
              <p className="pp-label">Submit Your Deal</p><div className="pp-rule" />
              <h2>Tell us about the deal.</h2>
              <p className="pp-lead">Welcome{broker.name ? ', ' + broker.name.split(' ')[0] : ''}. Give us the shape of it and we will come back with a straight read, usually the same day.</p>
              <div className="pp-card-nav">
                <form className="pp-form" onSubmit={submitDeal}>
                  <input type="text" className="pp-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                  <div className="pp-f"><label>Deal type</label><select value={deal.dealType} onChange={(e) => setDeal({ ...deal, dealType: e.target.value })}><option value="">Select one</option>{DEAL_TYPES.map((d) => <option key={d}>{d}</option>)}</select></div>
                  <div className="pp-f"><label>Loan amount</label><input type="text" placeholder="$250,000" value={deal.amount} onChange={(e) => setDeal({ ...deal, amount: e.target.value })} /></div>
                  <div className="pp-f"><label>Building type</label><select value={deal.buildingType} onChange={(e) => setDeal({ ...deal, buildingType: e.target.value })}><option value="">Select one</option>{BUILDING_TYPES.map((b) => <option key={b}>{b}</option>)}</select></div>
                  <div className="pp-f"><label>Borrower credit score</label><select value={deal.credit} onChange={(e) => setDeal({ ...deal, credit: e.target.value })}><option value="">Select a range</option>{CREDIT_RANGES.map((c) => <option key={c}>{c}</option>)}</select></div>
                  <button className="pp-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit the Deal'}</button>
                  {err && <p className="pp-err">{err}</p>}
                  <p className="pp-note">Submitting as {broker.name || 'you'} · {broker.email}. <a href="#" style={{ color: '#F6D200', textDecoration: 'none' }} onClick={(ev) => { ev.preventDefault(); relock() }}>Not you?</a></p>
                </form>
              </div>
            </>
          )}

          {step === 'done' && (
            <>
              <p className="pp-label">Received</p><div className="pp-rule" />
              <h2>Got it. We are on it.</h2>
              <div className="pp-done">
                <h3>Your deal is in.</h3>
                <p>We will review it and come back with a straight read, usually the same day. If it is urgent, call Gino directly at (720) 772-1327.</p>
              </div>
            </>
          )}
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
