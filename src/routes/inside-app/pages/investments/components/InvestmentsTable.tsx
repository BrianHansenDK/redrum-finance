import React from 'react'
import InvestmentsTableHeader from './InvestmentsTableHeader'
import InvestmentTableRow from './InvestmentTableRow'

const InvestmentsTable = ({investments}: {investments: any}) => {

  return (
    <div>
      <InvestmentsTableHeader />
      {investments.map((investment: any) => (
        <InvestmentTableRow investment={investment} projectId={investment.project} key={investment.id} />
      ))}
    </div>
  )
}

export default InvestmentsTable
