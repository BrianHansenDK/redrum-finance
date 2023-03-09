import React from 'react'
import { Button, IconButton, Input, InputGroup, Modal } from 'rsuite'
import '../styles/auth-modal.scss'
import AuthModalHeader from './AuthModalHeader';
import AuthModalBody from './AuthModalBody';

interface IProps {isOpen: boolean, closeModal: any, en: boolean}

const NewAuthModal: React.FunctionComponent<IProps> = (props) => {
  const {isOpen, closeModal, en} = props
  const [signupPage, setSignupPage] = React.useState<boolean>(true)
  const [withMail, setWithMail] = React.useState<boolean>(false)
  const [visible, setVisible] = React.useState<boolean>(false)
  const goToLogin = () => setSignupPage(false)
  const goToSignup = () => setSignupPage(true)
  const goWithMail = () => setWithMail(true)
  const goBack = () => setWithMail(false)
  const handleChange = () => setVisible(!visible)

  return (
    <Modal open={isOpen} onClose={closeModal} className='auth-modal' size='md'>
      <AuthModalHeader withMail={withMail} goBack={goBack} closeModal={closeModal} />
      <AuthModalBody en={en} visible={visible} closeModal={closeModal}
      signupPage={signupPage} withMail={withMail}
      handleChange={handleChange} goToSignUp={goToSignup}
      goToLogin={goToLogin} goWithMail={goWithMail} />
    </Modal>
  )
}

export default NewAuthModal
