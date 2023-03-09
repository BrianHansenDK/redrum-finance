import React from 'react'

interface IProps {
  en: boolean,
  signupPage: boolean,
  goToSignup: any,
  goToLogin: any,
}

const AuthModalTabs: React.FunctionComponent<IProps> = (props) => {
  const {en, signupPage, goToSignup, goToLogin} = props
  return (
    <div className="tabs">
      <p className="tab" onClick={goToSignup} style={{backgroundColor: signupPage ? '#FFF' : 'transparent'}}>
        {en ? 'Register' : 'Registrieren'}
      </p>
      <p className="tab" onClick={goToLogin} style={{backgroundColor: !signupPage ? '#FFF' : 'transparent'}}>
        {en ? 'Login' : 'Anmelden'}
      </p>
    </div>
  )
}

export default AuthModalTabs
