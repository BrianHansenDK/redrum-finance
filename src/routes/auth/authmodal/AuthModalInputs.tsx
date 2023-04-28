import React from 'react'
import { Input, InputGroup, Button, useToaster, Message, Form } from 'rsuite'
import signUpModalStrings from '../../../library/string/SignUpModal'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, createAccount, database } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import PushThemes from '../../inside-app/themes/PushThemes';
import { onValue, ref, set } from 'firebase/database';
import { FirebaseUser } from '../../../database/Objects';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps {
  en: boolean,
  visible: boolean,
  signupPage: boolean,
  handleChange: any,
}

const AuthModalInputs: React.FunctionComponent<IProps> = (props) => {
  const {en, visible, signupPage, handleChange} = props;
  const [userName, setUserName] = React.useState<any>('');
  const [userEmail, setUserEmail] = React.useState<any>('');
  const [userPassword, setUserPassword] = React.useState<any>('');
  const [confirm, setConfirm] = React.useState<any>('');
  const [userMails, setUserMails] = React.useState<string[]>([]);
  const [confirmVisible, setConfirmVisible] = React.useState<boolean>(false);
  const [captured, setCaptured] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const toaster = useToaster();

  React.useEffect(() => {
    const reference = ref(database, 'users')
    let data: string[] = []
    onValue(reference, (snap) => {
      snap.forEach((user) => {
        data.push(user.val().email)
      })
      setUserMails(data)
    })
  }, [])

  const onlyOneSpace = userName.split(' ').length -1 < 2;

  const signUp = () => {
    if (userMails.includes(userEmail)) {
      toaster.push(
        <Message type='error' showIcon duration={8000}>
          Error: user already exist
        </Message>
      )
    } else {
        if (!onlyOneSpace) {
          toaster.push(<Message type='error' showIcon duration={8000} closable>
            Username cannot include multiple spaces.
          </Message>, {placement: 'topCenter'})
        }
        if (userPassword === '') {
          toaster.push(<Message type='error' showIcon duration={8000} closable>
            Password cannot be empty.
          </Message>, {placement: 'topCenter'})
        }
        if (userPassword !== confirm) {
          toaster.push(<Message showIcon type='error' duration={8000} closable>
            Password & password confirmation does not match.
          </Message>, {placement: 'topCenter'})
        }
        if ((userPassword == confirm) && userPassword.length < 6) {
          toaster.push(<Message showIcon type='error' duration={8000} closable>
            Password should be at least 6 characters. (auth/weak-password)
          </Message>, {placement: 'topCenter'})
        }
        if ((onlyOneSpace) && (userPassword != '') && (userPassword === confirm) && userPassword.length >= 6) {
          createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then(async (userCredentials) => {
            const user = userCredentials.user
            createAccount(user.uid, userName, userEmail, 10)
            navigate('/app')
            toaster.push(<Message showIcon duration={8000} closable>
              Account created succesfully
            </Message>)
            })
            .catch((err) => {
              toaster.push(<Message showIcon duration={8000} type='error' closable>
                {err.message}
              </Message>)
            })
          }
    }
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/app')
            toaster.push(
                <Message showIcon type="info" duration={8000} closable>
                  Logged in succesfully
                </Message>, { placement: 'topCenter' }
            )
        }).catch((error) => {
            toaster.push(
                <Message showIcon type="error" duration={8000} closable>
                  Something went wrong: Error {error.code}
                </Message>, { placement: 'topCenter' }
            )
        });
}
  return (
    <div className={`inputs-con`}>
      { signupPage ? (
        <div className="input-element">
        <label>{en ? signUpModalStrings.EN.un : signUpModalStrings.DE.un}</label>
        <Input placeholder={en ? 'Your Username' : 'Dein Benutzername'} onChange={setUserName}/>
      </div>
          ) : null }
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
        {signupPage ? (<Form.HelpText>{en ? 'Minimum 6 characters' : 'Mindestens 6 Zeichen'}</Form.HelpText>) : null}

      </div>
        { signupPage ? (
        <>
        <div className="input-element">
        <label>{en ? 'Confirm password' : 'Passwort bästetigen'}</label>
        <InputGroup inside>
          <Input type={confirmVisible ? 'text' : 'password'}
          placeholder={en ? 'Your password' : 'Dein Passwort'} onChange={setConfirm} />
          <InputGroup.Button onClick={() => setConfirmVisible(!confirmVisible)}>
            {confirmVisible ? <EyeIcon /> : <EyeSlashIcon />}
          </InputGroup.Button>
        </InputGroup>
      </div>
      <ReCAPTCHA
      sitekey="6Lec2aIlAAAAAAA-5JTMB_z-U7CDjtrfs3R1IiJ9"
      onChange={() => setCaptured(true)}
      />
      </>
          ) : null }

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
      <Button appearance='primary' className='r-btn r-main-btn mb-2 dark-blue'
      disabled={signupPage && !captured}
      onClick={signupPage ? signUp : signIn}>
        {
          signupPage ? en ? 'Create account' : 'Account erstellen'
          : en ? 'Login' : 'Anmelden'
        }
      </Button>
    </div>
  )
}

export default AuthModalInputs
