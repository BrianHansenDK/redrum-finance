import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { FirebaseRequest } from '../../../../../database/Objects'
import { database } from '../../../../../firebase'
import VanumoLoader from '../../VanumoLoader'
import RequestItem from './components/RequestItem'
import '../style/VanumoRequests.scss'

const VanumoRequestsPage = () => {
  const [requests, setRequests] = useState<Array<FirebaseRequest>>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const reference = ref(database, 'requests/')
    let data: any[] = []
    onValue(reference, (snap) => {
      snap.forEach((request) => {data.push(request.val())})
    })
    setRequests(data)
    window.setTimeout(() => {setLoading(false)}, 2500)
  }, [])

  return (
    <div>
      {loading ? (
        <VanumoLoader />
      ) : (
        <>
          <h1 className='v-dash-title text-center mt-2'>Requests</h1>
          {requests.map((request) => (
            <RequestItem key={request.id} request={request} />
          ))}
        </>
      )}
    </div>
  )
}

export default VanumoRequestsPage
