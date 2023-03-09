import React from 'react'
import { Input, InputGroup, Button, useToaster, Message } from 'rsuite'
import signUpModalStrings from '../../../library/string/SignUpModal'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import PushThemes from '../../inside-app/themes/PushThemes';

interface IProps {
  en: boolean,
  visible: boolean,
  signupPage: boolean,
  handleChange: any,
}

const AuthModalInputs: React.FunctionComponent<IProps> = (props) => {
  const {en, visible, signupPage, handleChange} = props
  const [userEmail, setUserEmail] = React.useState<any>('')
  const [userPassword, setUserPassword] = React.useState<any>('')

  const navigate = useNavigate()
  const toaster = useToaster()

  const signIn = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/app')
            toaster.push(
                <Message showIcon type="info" style={PushThemes.pushBlue}>
                  <p style={PushThemes.txt}> Logged in succesfully </p>
                </Message>, { placement: 'topCenter' }
            )
            window.setTimeout(() => {
                toaster.clear()
            }, 5000)
        }).catch((error) => {
            toaster.push(
                <Message showIcon type="error" style={PushThemes.pushRed}>
                  <p style={PushThemes.txt}> Something went wrong: Error {error.code} </p>
                </Message>, { placement: 'topCenter' }
            )
            console.log(error.message)
            window.setTimeout(() => {
                toaster.clear()
            }, 5000)
        });
}
  return (
    <div className={`inputs-con`}>
      <div className="input-element">
        <label>{en ? signUpModalStrings.EN.mail : signUpModalStrings.DE.mail}</label>
        <Input placeholder={en ? 'Your email' : 'Dein Email'} onChange={setUserEmail}/>
      </div>
      <div className="input-element">
        <label>{en ? signUpModalStrings.EN.ps : signUpModalStrings.DE.ps}</label>
        <InputGroup inside>
          <Input type={visible ? 'text' : 'password'}
          placeholder={en ? 'Your password' : 'Dein Passwort'} onChange={setUserPassword} />
          <InputGroup.Button onClick={handleChange}>
            {visible ? <EyeIcon /> : <EyeSlashIcon />}
          </InputGroup.Button>
        </InputGroup>
      </div>
      <>
      {
        signupPage ? null : (
          <div className='hidden-btn-con'>
          <Button appearance='link'>
            {en ? 'Forgot password?' : 'Passwort vergessen?'}
          </Button>
        </div>)
      }
      </>
      <Button appearance='primary' className='r-btn r-main-btn mb-2 dark-blue' onClick={signIn}>
        {
          signupPage ? en ? 'Create account' : 'Account erstellen'
          : en ? 'Login' : 'Anmelden'
        }
      </Button>
    </div>
  )
}

export default AuthModalInputs
