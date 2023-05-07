import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { Button, Input, Message, Modal, useToaster } from 'rsuite';
import { auth } from '../../../firebase';

interface IProps {
  en: boolean,
  open: boolean,
  close: any,
}

const ForgotPasswordModal = (props: IProps) => {
  // Mark: - Properties
  const {en, open, close} = props;
  const toaster = useToaster();

  // Email address
  const [email, setEmail] = React.useState('')

  // Send password reset email
  async function sendResetEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
      toaster.push(<Message closable type='info' showIcon duration={8000}>
        {en ? `We have send an email to ${email}. Please go there to change your password.` :
        `Wir haben eine E-Mail an ${email} gesendet. Bitte gehen Sie dorthin, um Ihr Passwort zu ändern.`}
      </Message>, {placement: 'topCenter'});
    } catch (error) {
      toaster.push(<Message closable type='error' showIcon duration={8000}>
        {`${error}`}
      </Message>, {placement: 'topCenter'});
    }
  }
  const sendMail = () => {
    sendResetEmail(email)
  }

  // Mark: - Preview
  return (
    <Modal open={open} onClose={close}>
      <Modal.Header>
        <Modal.Title className='text-center txt-2 bold'>
          {en ? 'Forgot Your Password?' : 'Passwort vergessen?'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='pl-1 pr-1'>
        <p className='mt-1 mb-2 text-center'>
          { en ?
          "No worries, it happens to the best of us. Please enter your email address below and we'll send you a link to reset your password." :
          "Kein Problem, das passiert den Besten. Bitte geben Sie unten Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts."
          }
        </p>
        <Input
        onChange={setEmail}
        className='mb-2'
        type='email'
        placeholder={en ? 'Write your email address here...' : 'Geben Sie hier Ihre E-Mail-Adresse ein...'}/>
        <p className="small text-center">
          {en ? "Note: Make sure to check your email and spam folder for the password reset link. If you're still having trouble, please contact our support team at info@redrum.de." :
          "Hinweis: Überprüfen Sie bitte Ihren E-Mail-Posteingang und Spam-Ordner, um den Link zum Zurücksetzen des Passworts zu erhalten. Wenn Sie weiterhin Probleme haben, wenden Sie sich bitte an unser Support-Team unter info@redrum.de."}
        </p>
      </Modal.Body>
      <Modal.Footer className='d-flex align-items-center justify-content-center'>
        <Button appearance='primary' onClick={sendMail} className='r-btn r-main-btn'>
          {en ? 'Receive link' : 'Link erhalten'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ForgotPasswordModal
