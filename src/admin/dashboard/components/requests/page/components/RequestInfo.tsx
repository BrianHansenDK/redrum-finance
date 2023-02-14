import React from 'react'
import { FirebaseRequest } from '../../../../../../database/Objects'
import { appReadyNumber, MakeDateGerman } from '../../../../../../misc/custom-hooks'

const RequestInfo = ({request} : {request: FirebaseRequest}) => {
  const made = new Date(request.created_at)
  const dateString = MakeDateGerman(made)
  return (
    <div className='r-dash-request-info-con'>
      <h1 className='request-title'>Withdrawal request</h1>
      <p className='request-amount'>
        Amount: <span className='bold'>{appReadyNumber(request.amount)}€</span>
      </p>
      <p className='request-date'>
        Created at: {dateString}
      </p>
    </div>
  )
}

export default RequestInfo
