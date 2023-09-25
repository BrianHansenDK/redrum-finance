import React from 'react'
import { mainColors } from '../../../themes/colors'
import NoInvestmentsCard from './NoInvestmentsCard'
import RecieptCard from './RecieptCard'
import { sortNotifications } from '../../../../../misc/custom-hooks'

const RecieptsList = ({investments, en}: {investments: any, en: boolean}) => {
  return (
    <>
    {
      investments.length > 0 ? (
        <>
        {
          investments.sort(sortNotifications).map((inv: any) => (
            <RecieptCard en={en} investment={inv} key={inv.id}/>
          ))
        }
        </>
      ) : (
        <NoInvestmentsCard en={en} title={en ? 'No receipts yet.' : 'Noch keine Rechnungen.'}/>
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
