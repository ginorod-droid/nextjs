// app/broker-programs/page.jsx
import { bpStyles, BrokerNav, BrokerFooter, ProgramRows, JsonLd, programsJsonLd, CAL, CREDIT } from './shared'

export const metadata = {
  title: 'Broker Programs | Commercial Loan Solutions | Acoma Capital Partners',
  description: 'Acoma commercial broker programs: Owner-Occupied Bank Statement, Lite Doc, and No Doc. Fast reads on tough commercial files, $100K to $2M. Bring us the deal.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/broker-programs' },
  openGraph: {
    title: 'Broker Programs | Acoma Capital Partners',
    description: 'Three commercial loan programs for brokers. Bring us the deal and we place it.',
    url: 'https://www.acomacapitalpartners.com/broker-programs',
    images: ['/program-no-doc.jpg'],
  },
}

export default function BrokerProgramsHub() {
  return (
    <div id="bp">
      <style dangerouslySetInnerHTML={{ __html: bpStyles }} />
      <JsonLd data={programsJsonLd('https://www.acomacapitalpartners.com/broker-programs')} />

      <div className="bp-colorbar">
        <span style={{ background: '#2C9143' }} /><span style={{ background: '#202A54' }} />
        <span style={{ background: '#1179EC' }} /><span style={{ background: '#F6D200' }} />
      </div>

      <BrokerNav current="broker-programs" />

      {/* HERO with people photo */}
      <section className="bp-hub-hero">
        <div className="bp-wrap bp-hero-split">
          <div className="bp-hero-text">
            <p className="bp-eyebrow" style={{ color: '#F6D200' }}>For Brokers · Commercial Loan Solutions</p>
            <h1 className="bp-h1">Broker<br />Programs.</h1>
            <p className="bp-hero-sub">Three ways to get a tough commercial file done. When the tax returns, the DTI, or the bank box says no, one of these usually says yes. Bring us the deal and we place it.</p>
            <div className="bp-cta-row">
              <a href={CAL} target="_blank" rel="noreferrer" className="bp-btn-yellow">Discuss a Deal</a>
            </div>
          </div>
          <div className="bp-hero-photo">
            <span className="bp-hero-photo-frame" />
            <img src="/deal-closing.jpg" alt="Acoma Capital Partners closing a commercial deal with a broker partner" />
            <span className="bp-hero-photo-bar" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bp-section bp-section-tight">
        <div className="bp-wrap">
          <p className="bp-section-label">The Lineup</p>
          <div className="bp-rule" />
          <h2>Pick the program that fits the file.</h2>
          <p className="bp-lead">Send the scenario and get a straight read, usually the same day. Start at the top for the most leverage and the lowest rate, and drop down a tier only when the documentation is not there.</p>
        </div>
      </section>

      {/* STACKED PROGRAM ROWS */}
      <section>
        <ProgramRows variant="broker" />
        <div className="bp-wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <p className="bp-credit"><strong>Credit required.</strong> {CREDIT}</p>
        </div>
      </section>

      <BrokerFooter />
    </div>
  )
}
