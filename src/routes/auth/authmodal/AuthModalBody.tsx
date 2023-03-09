import React from 'react'
import { Modal } from 'rsuite'
import AuthModalAgbTxt from './AuthModalAgbTxt'
import AuthModalOptions from './AuthModalOptions'
import AuthModalTabs from './AuthModalTabs'

interface IProps {
  en: boolean,
  visible: boolean,
  signupPage: boolean,
  withMail: boolean,
  handleChange: any,
  goToSignUp: any,
  goToLogin: any,
  goWithMail: any,
  closeModal: any,

}

const AuthModalBody: React.FunctionComponent<IProps> = (props) => {
  const {
    en, visible,
    signupPage, withMail,
    goToSignUp, goToLogin,
    handleChange, goWithMail,
    closeModal
  } = props
  return (
    <Modal.Body className='modal-body'>
      <h1 className='title'>
        {signupPage ?
        en ? 'Register' : 'Registrieren' :
        en ? 'Login' : 'Anmelden'
        }
      </h1>
      <div className="body-inner">
        <AuthModalTabs en={en} signupPage={signupPage} goToSignup={goToSignUp} goToLogin={goToLogin}/>
        <AuthModalOptions
        en={en} visible={visible} withMail={withMail} signupPage={signupPage}
        handleChange={handleChange} goWithMail={goWithMail} />
      </div>
        {signupPage ?  (<AuthModalAgbTxt en={en} whithMail={withMail} closeModal={closeModal}/>) : null}
    </Modal.Body>
  )
}

export default AuthModalBody
