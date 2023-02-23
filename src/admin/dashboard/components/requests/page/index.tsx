import React, { useEffect } from 'react'
import RequestsWrap from './components/RequestsWrap'
import '../style/VanumoRequests.scss'
import { Button, ButtonGroup } from 'rsuite'
import RequestFilterBtns from './components/RequestFilterBtns'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../firebase'
import { FirebaseRequest } from '../../../../../database/Objects'

const VanumoRequestsPage = () => {
  const [filter, setFilter] = React.useState<string>('new')
  const [requests, setRequests] = React.useState<Array<FirebaseRequest>>([])
  const [loading, setLoading] = React.useState<boolean>(false)

    useEffect(() => {
      setLoading(true)
      const reference = ref(database, 'requests/')
      let data: any[] = []
      onValue(reference, (snap) => {
        snap.forEach((request) => {
          data.push(request.val())
        })
      })
      setRequests(data)
      window.setTimeout(() => {setLoading(false)}, 2500)
    }, [])

  return (
    <div className='r-dash-content-wrap'>
        <>
          <h1 className='v-dash-title text-center mt-2'>Requests</h1>
          <RequestFilterBtns filter={filter} setFilter={setFilter}/>
          <RequestsWrap requests={requests} loading={loading} filter={filter} />
        </>
    </div>
  )
}

export default VanumoRequestsPage
