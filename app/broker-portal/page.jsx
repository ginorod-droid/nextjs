// app/broker-portal/page.jsx — unlisted, no-index. Reached only via the Deal Desk button.
import BrokerPortal from './BrokerPortal'

export const metadata = {
  title: 'Broker Portal | Acoma Capital Partners',
  description: 'Submit a commercial deal to the Acoma Deal Desk. For brokers and professionals.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.acomacapitalpartners.com/broker-portal' },
}

export default function Page() {
  return <BrokerPortal />
}
