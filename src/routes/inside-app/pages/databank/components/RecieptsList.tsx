import React from 'react'
import { mainColors } from '../../../themes/colors'
import NoInvestmentsCard from './NoInvestmentsCard'
import RecieptCard from './RecieptCard'

const RecieptsList = ({investments, en}: {investments: any, en: boolean}) => {
  return (
    <>
    {
      investments.length > 0 ? (
        <>
        {
          investments.map((inv: any) => (
            <RecieptCard investment={inv} key={inv.id}/>
          ))
        }
        </>
      ) : (
        <NoInvestmentsCard title={en ? 'No receipts yet.' : 'Noch keine Rechnungen.'}/>
      )
    }

      </>
  )
}

const styles = {
  title: {
    fontSize: 38.5,
    color: mainColors.dark,
  }
}

export default RecieptsList
