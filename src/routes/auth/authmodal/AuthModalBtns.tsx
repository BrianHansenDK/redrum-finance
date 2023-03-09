import React from 'react'
import { Button } from 'rsuite'
import Envelope from '../../../assets/envelope-svgrepo-com.svg'
import GoogleLogo from '../../../assets/google-color-svgrepo-com.svg'

interface IProps {
  en: boolean,
  authing: boolean,
  goWithMail: any,
  signInWithGoogle: any,
}

const AuthModalBtns: React.FunctionComponent<IProps> = (props) => {
  const {en, authing, goWithMail, signInWithGoogle} = props

  return (
    <div className={`btns-con`}>
      <Button appearance='primary' className='choose-auth-btn' block onClick={goWithMail}>
        <img src={Envelope} alt="Closed envelope" className='icon' />
        <p className='btn-txt'>{en ? 'Continue with E-Mail' : 'Weiter mit der E-Mail-Adresse'}</p>
      </Button>
      <Button appearance='primary' className='choose-auth-btn' block onClick={signInWithGoogle}
      disabled={authing}>
      <img src={GoogleLogo} alt="Google Logo" className='icon' />
      <p className='btn-txt'>{en ? 'Continue with Google' : 'Weiter mit Google'}</p>
      </Button>
    </div>
  )
}

export default AuthModalBtns
