import React from 'react'
import BackIcon from '@rsuite/icons/ArowBack'
import { IconButton } from 'rsuite'
import signInPageStrings from '../../../library/string/SignInPage'
import { useNavigate } from 'react-router-dom'

const PhoneBackNav = ({en} : {en: boolean}) => {
  const navigate = useNavigate()
  return (
    <div className='r-back-nav'>
      <div className='inner'>
        <IconButton
        icon={<BackIcon className='r-icon'/>}
        appearance='primary'
        className='r-btn'
        onClick={() => navigate('/')}
        />
        <p className='r-title'>
        {
          location.pathname == '/sign-in' ?
            en ? signInPageStrings.EN.btn : signInPageStrings.DE.btn
          : en ? signInPageStrings.EN.link : signInPageStrings.DE.link
        }
        </p>
      </div>
    </div>
  )
}

export default PhoneBackNav
