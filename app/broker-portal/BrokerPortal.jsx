'use client'
import { useEffect, useState } from 'react'
import { bpStyles, BrokerFooter, CAL } from '../broker-programs/shared'

// Submissions post to the Acoma Apps Script web app (same proven method as the email popup).
// Deals are tagged formType so the script can route them to their own sheet tab.
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
.pp-hero { background:#202A54; padding:56px 0 64px; }
.pp-eyebrow { font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#F6D200; margin-bottom:20px; }
.pp-h1 { font-family:'Poppins'; font-size:clamp(38px,7vw,68px); font-weight:900; line-height:0.95; letter-spacing:-0.03em; color:#fff; text-transform:uppercase; margin-bottom:20px; }
.pp-hero-sub { font-size:17px; color:rgba(255,255,255,0.7); line-height:1.6; max-width:560px; }
.pp-sec { padding:72px 0; border-top:1px solid #e8ecf0; }
.pp-sec-off { background:#f4f6f9; }
.pp-label { font-size:11px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#1179EC; margin-bottom:14px; }
.pp-rule { width:46px; height:4px; background:#2C9143; margin-bottom:22px; }
#pp h2 { font-family:'Poppins'; font-size:clamp(28px,4vw,44px); font-weight:900; letter-spacing:-0.025em; line-height:1.05; color:#202A54; margin-bottom:16px; }
.pp-lead { font-size:16px; line-height:1.7; color:#555; max-width:640px; margin-bottom:0; }
/* FORM CARD */
.pp-card { background:#202A54; padding:44px 44px 40px; margin-top:34px; max-width:720px; }
.pp-card .pp-label { color:#F6D200; }
.pp-card .pp-rule { background:#F6D200; }
.pp-card h3 { font-family:'Poppins'; font-size:24px; font-weight:900; color:#fff; letter-spacing:-0.02em; margin-bottom:10px; }
.pp-card-sub { font-size:15px; color:rgba(255,255,255,0.66); line-height:1.6; margin-bottom:26px; }
.pp-form { display:grid; grid-template-columns:1fr 1fr; gap:15px; }
.pp-f { display:flex; flex-direction:column; }
.pp-f.full { grid-column:1 / -1; }
.pp-f label { font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:7px; }
.pp-f input, .pp-f select { height:44px; background:#fff; border:1px solid rgba(255,255,255,0.15); padding:0 14px; font-size:15px; font-family:'Inter',sans-serif; color:#202A54; outline:none; }
.pp-f input:focus, .pp-f select:focus { box-shadow:0 0 0 2px #F6D200; }
.pp-submit { grid-column:1 / -1; background:#2C9143; color:#fff; border:0; height:52px; font-size:13px; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; margin-top:6px; }
.pp-submit:disabled { opacity:0.65; cursor:wait; }
.pp-err { grid-column:1 / -1; font-size:13px; color:#f0a8a8; margin-top:8px; }
.pp-note { grid-column:1 / -1; font-size:12px; color:rgba(255,255,255,0.4); line-height:1.55; margin-top:8px; }
.pp-hp { position:absolute; left:-9999px; height:0; width:0; opacity:0; }
/* DONE */
.pp-done { background:#202A54; padding:52px 44px; margin-top:34px; max-width:720px; text-align:center; border-top:5px solid #F6D200; }
.pp-done h3 { font-family:'Poppins'; font-size:26px; font-weight:900; color:#fff; margin-bottom:12px; }
.pp-done p { font-size:15px; color:rgba(255,255,255,0.68); line-height:1.6; max-width:460px; margin:0 auto; }
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
@media(max-width:760px){
  .pp-card { padding:32px 24px; } .pp-form { grid-template-columns:1fr; }
  .pp-calc { grid-template-columns:1fr; } .pp-sec { padding:52px 0; }
}
`

const BUILDING_TYPES = ['Retail', 'Mixed-use (commercial)', 'Warehouse / self-storage', 'Office', 'Light industrial', 'Automotive', 'Mobile home park', 'Restaurant / bar', 'Day care', 'Other']
const DEAL_TYPES = ['Purchase', 'Refinance', 'Cash-out refinance', 'Bridge / hard money', 'Not sure yet']
const CREDIT_RANGES = ['740+', '700–739', '680–699', '650–679', 'Below 650', 'Not sure']

async function postJSON(payload) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  })
  const out = await res.json()
  if (!out || !out.ok) throw new Error('failed')
}

export default function BrokerPortal() {
  const [step, setStep] = useState('gate') // gate | deal | done
  const [broker, setBroker] = useState({ name: '', company: '', email: '', phone: '' })
  const [deal, setDeal] = useState({ dealType: '', amount: '', buildingType: '', credit: '' })
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [err, setErr] = useState('')

  // Returning broker on this device skips the gate.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const b = JSON.parse(saved)
        if (b && b.email) { setBroker(b); setStep('deal') }
      }
    } catch {}
  }, [])

  // Calculator
  const [calc, setCalc] = useState({ amt: 500000, rate: 9.25, yrs: 25 })
  const payment = (() => {
    const P = parseFloat(calc.amt) || 0
    const r = (parseFloat(calc.rate) || 0) / 100 / 12
    const n = (parseFloat(calc.yrs) || 0) * 12
    const pay = r > 0 && n > 0 ? (P * r) / (1 - Math.pow(1 + r, -n)) : n > 0 ? P / n : 0
    return '$' + Math.round(pay).toLocaleString('en-US')
  })()

  const submitGate = async (e) => {
    e.preventDefault()
    setErr('')
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
    e.preventDefault()
    setErr('')
    if (!deal.dealType || !deal.amount || !deal.buildingType || !deal.credit) { setErr('Please complete every field.'); return }
    if (status === 'sending') return
    setStatus('sending')
    try {
      await postJSON({ formType: 'broker_deal', ...broker, ...deal, website: hp, page: '/broker-portal' })
      setStatus('idle'); setStep('done')
    } catch { setStatus('error'); setErr('Something went wrong. Email ginorod@acomacapitalpartners.com and we will take it from there.') }
  }

  return (
    <div id="pp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles + ppStyles }} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <nav className="pp-nav">
        <div className="bp-wrap pp-nav-row">
          <a href="/" aria-label="Acoma Capital Partners home"><img src="/acoma-logo-white.png" alt="Acoma Capital Partners" /></a>
          <a href="/broker-programs" className="pp-back">← Back to Deal Desk</a>
        </div>
      </nav>

      <section className="pp-hero">
        <div className="bp-wrap">
          <p className="pp-eyebrow">Broker Portal</p>
          <h1 className="pp-h1">Start a Deal.</h1>
          <p className="pp-hero-sub">Give us the basics and we come back with a straight read, usually the same day. Full documents come after we talk. For brokers and professionals, not the general public.</p>
        </div>
      </section>

      {/* GATE / DEAL / DONE */}
      <section className="pp-sec">
        <div className="bp-wrap">
          {step === 'gate' && (
            <>
              <p className="pp-label">Step 1 of 2</p>
              <div className="pp-rule" />
              <h2>First, who is sending this deal?</h2>
              <p className="pp-lead">A quick introduction so we know who we are working with. Then you get the deal form.</p>
              <div className="pp-card">
                <form className="pp-form" onSubmit={submitGate}>
                  <input type="text" className="pp-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                  <div className="pp-f full"><label>Your name</label><input type="text" placeholder="First and last name" value={broker.name} onChange={(e) => setBroker({ ...broker, name: e.target.value })} /></div>
                  <div className="pp-f"><label>Company</label><input type="text" placeholder="Company (optional)" value={broker.company} onChange={(e) => setBroker({ ...broker, company: e.target.value })} /></div>
                  <div className="pp-f"><label>Telephone</label><input type="tel" placeholder="(720) 555-0100" value={broker.phone} onChange={(e) => setBroker({ ...broker, phone: e.target.value })} /></div>
                  <div className="pp-f full"><label>Email</label><input type="email" placeholder="you@company.com" value={broker.email} onChange={(e) => setBroker({ ...broker, email: e.target.value })} /></div>
                  <button className="pp-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'One moment…' : 'Enter the Portal →'}</button>
                  {err && <p className="pp-err">{err}</p>}
                  <p className="pp-note">We use this to reach you about your deal. Nothing is shared.</p>
                </form>
              </div>
            </>
          )}

          {step === 'deal' && (
            <>
              <p className="pp-label">Step 2 of 2</p>
              <div className="pp-rule" />
              <h2>Tell us about the deal.</h2>
              <p className="pp-lead">Welcome{broker.name ? ', ' + broker.name.split(' ')[0] : ''}. Give us the shape of it and we will come back with a straight read.</p>
              <div className="pp-card">
                <form className="pp-form" onSubmit={submitDeal}>
                  <input type="text" className="pp-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                  <div className="pp-f"><label>Deal type</label><select value={deal.dealType} onChange={(e) => setDeal({ ...deal, dealType: e.target.value })}><option value="">Select one</option>{DEAL_TYPES.map((d) => <option key={d}>{d}</option>)}</select></div>
                  <div className="pp-f"><label>Loan amount</label><input type="text" placeholder="$250,000" value={deal.amount} onChange={(e) => setDeal({ ...deal, amount: e.target.value })} /></div>
                  <div className="pp-f"><label>Building type</label><select value={deal.buildingType} onChange={(e) => setDeal({ ...deal, buildingType: e.target.value })}><option value="">Select one</option>{BUILDING_TYPES.map((b) => <option key={b}>{b}</option>)}</select></div>
                  <div className="pp-f"><label>Borrower credit score</label><select value={deal.credit} onChange={(e) => setDeal({ ...deal, credit: e.target.value })}><option value="">Select a range</option>{CREDIT_RANGES.map((c) => <option key={c}>{c}</option>)}</select></div>
                  <button className="pp-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit the Deal'}</button>
                  {err && <p className="pp-err">{err}</p>}
                  <p className="pp-note">Submitting as {broker.name || 'you'} · {broker.email}. <a href="#" style={{ color: '#F6D200', textDecoration: 'none' }} onClick={(ev) => { ev.preventDefault(); try { localStorage.removeItem(STORAGE_KEY) } catch {}; setBroker({ name: '', company: '', email: '', phone: '' }); setStep('gate') }}>Not you?</a></p>
                </form>
              </div>
            </>
          )}

          {step === 'done' && (
            <>
              <p className="pp-label">Received</p>
              <div className="pp-rule" />
              <h2>Got it. We are on it.</h2>
              <div className="pp-done">
                <h3>Your deal is in.</h3>
                <p>We will review it and come back with a straight read, usually the same day. If it is urgent, call Gino directly at (720) 772-1327.</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="pp-sec pp-sec-off">
        <div className="bp-wrap">
          <p className="pp-label">Quick Estimate</p>
          <div className="pp-rule" />
          <h2>Payment calculator.</h2>
          <p className="pp-lead">A rough monthly payment so you can size the deal before you send it. This is an estimate, not a quote.</p>
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

      <BrokerFooter />
    </div>
  )
}
