// app/buyer-questionnaire/page.jsx — native buyer intake, replaces the old Google Form.
import BuyerQuestionnaire from './BuyerQuestionnaire'

export const metadata = {
  title: 'Buyer Questionnaire | Acoma Capital Partners',
  description: 'Tell Acoma Capital Partners what commercial or investment property you are looking to buy and we will match you to the right opportunity.',
  alternates: { canonical: 'https://www.acomacapitalpartners.com/buyer-questionnaire' },
}

export default function Page() {
  return <BuyerQuestionnaire />
}
