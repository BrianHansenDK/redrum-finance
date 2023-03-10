import React from 'react'
import { Button } from 'rsuite'
import Envelope from '../../../assets/envelope-svgrepo-com.svg'
import GoogleLogo from '../../../assets/google-color-svgrepo-com.svg'
import { useMediaQuery } from '../../../misc/custom-hooks'

interface IProps {
  en: boolean,
  authing: boolean,
  goWithMail: any,
  signInWithGoogle: any,
  signUpWithGoogle: any,
  signupPage: boolean,
}

const AuthModalBtns: React.FunctionComponent<IProps> = (props) => {
  const {en, authing, goWithMail, signInWithGoogle, signUpWithGoogle, signupPage} = props
  const isSmall = useMediaQuery('(max-width: 450px)')
  return (
    <div className={`btns-con`}>
      <Button appearance='primary' className='choose-auth-btn' block onClick={goWithMail}>
        <img src={Envelope} alt="Closed envelope" className='icon' />
        <p className='btn-txt'>{en ? 'Continue with E-Mail' :
        isSmall ? 'Weiter mit E-Mail' :
        'Weiter mit der E-Mail-Adresse'}</p>
      </Button>
      <Button appearance='primary' className='choose-auth-btn' block
      onClick={signupPage ? signUpWithGoogle : signInWithGoogle}
      disabled={authing}>
      <img src={GoogleLogo} alt="Google Logo" className='icon' />
      <p className='btn-txt'>{en ? 'Continue with Google' : 'Weiter mit Google'}</p>
      </Button>
    </div>
  )
}

export default AuthModalBtns
