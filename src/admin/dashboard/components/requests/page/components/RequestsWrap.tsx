import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { FirebaseRequest } from '../../../../../../database/Objects'
import { database } from '../../../../../../firebase'
import VanumoLoader from '../../../VanumoLoader'
import RequestItem from './RequestItem'

const RequestsWrap = ({requests, loading, filter}: {requests: Array<FirebaseRequest>, loading: boolean, filter: string}) => {

  return (
    <>
    {
      loading ? (<VanumoLoader />) : (
        requests.map((request) => (
          <>
          {
            request.state == filter ? (<RequestItem key={request.id} request={request} />) : null
          }
          </>
          ))
      ) }
    </>
  )
}

export default RequestsWrap
