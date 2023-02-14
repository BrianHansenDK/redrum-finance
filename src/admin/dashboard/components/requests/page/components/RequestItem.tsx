import React, { useEffect, useState } from 'react'
import { FirebaseRequest, FirebaseUser } from '../../../../../../database/Objects'
import { getCurrentUserFunction } from '../../../../../../firebase'
import VanumoLoader from '../../../VanumoLoader'
import RequestBadge from './RequestBadge'
import RequestCreatorImg from './RequestCreatorImg'
import RequestCreatorInfo from './RequestCreatorInfo'
import RequestInfo from './RequestInfo'
import SaveRequestStateBtn from './SaveRequestStateBtn'

const RequestItem = ({request}: {request: FirebaseRequest}) => {
  const [creator, setCreator] = useState<FirebaseUser>()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    getCurrentUserFunction(request.creator, setCreator)
    setLoading(false)
  }, [])
  return (
    <>
      <div className='r-dash-request-con'>
        {loading ? (
          <VanumoLoader />
          ) : creator ? (
          <div className='r-dash-profile-con'>
            <RequestCreatorImg user={creator} />
            <RequestCreatorInfo user={creator} />
            <RequestInfo request={request}/>
            <RequestBadge request={request} />
          </div>
        ): null}
      </div>
    </>
  )
}

export default RequestItem
