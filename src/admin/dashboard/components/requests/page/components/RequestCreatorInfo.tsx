import React from 'react'
import { FirebaseUser } from '../../../../../../database/Objects'

const RequestCreatorInfo = ({user} : {user: FirebaseUser}) => {
  return (
    <div>
      <h1 className='username'>{user.username}</h1>
      <p className='email'>email: {user.email}</p>
      <p className='id'>
        Id: {user.id ? user.id : 'Google account'} &nbsp; &nbsp;
        Birthyear: {user.birthYear ? user.birthYear : 'unknown'}
      </p>
    </div>
  )
}

export default RequestCreatorInfo
