import React from 'react'
import { FirebaseUser } from '../../../../../../database/Objects'

const RequestCreatorImg = ({user} : {user: FirebaseUser}) => {
  return (
    <>
      {
        user.image ? (
          <img src={user.image} alt={user.username} className='r-dash-profile-img' />
        ) : (
          <div className='r-dash-profile-avatar'>
            <p>
            {user.username.length > 1 ?
             user.username.split(' ').map((w) => w[0]).join('.') :
             `${user.username[0]}.${user.username[1]}`}
            </p>
          </div>
        )
      }
    </>
  )
}

export default RequestCreatorImg
