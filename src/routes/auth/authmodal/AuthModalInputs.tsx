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

interface IProps {
  en: boolean,
  visible: boolean,
  signupPage: boolean,
  handleChange: any,
}

const AuthModalInputs: React.FunctionComponent<IProps> = (props) => {
  const {en, visible, signupPage, handleChange} = props
  const [userName, setUserName] = React.useState<any>('')
  const [userEmail, setUserEmail] = React.useState<any>('')
  const [userPassword, setUserPassword] = React.useState<any>('')
  const [confirm, setConfirm] = React.useState<any>('')
  const [userMails, setUserMails] = React.useState<string[]>([])
  const [confirmVisible, setConfirmVisible] = React.useState<boolean>(false)

  const navigate = useNavigate()
  const toaster = useToaster()

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

  const onlyOneSpace = userName.split(' ').length -1 < 2

  const signUp = () => {
    if (userMails.includes(userEmail)) {
      toaster.push(
        <Message type='error' style={PushThemes.pushRed}>
          <p style={PushThemes.txt}>
            Error: user already exist
          </p>
        </Message>
      )
    } else {
        if (!onlyOneSpace) {
          toaster.push(<Message type='error' style={PushThemes.pushRed}>
            <p style={PushThemes.txt}>Username cannot include multiple spaces.</p>
          </Message>, {placement: 'topCenter'})
        }
        if (userPassword === '') {
          toaster.push(<Message showIcon type='error' style={PushThemes.pushRed}>
            <p style={PushThemes.txt}>Password cannot be empty.</p>
          </Message>, {placement: 'topCenter'})
        }
        if (userPassword !== confirm) {
          toaster.push(<Message showIcon type='error' style={PushThemes.pushRed}>
            <p style={PushThemes.txt}>Password & password confirmation does not match.</p>
          </Message>, {placement: 'topCenter'})
        }
        if ((userPassword == confirm) && userPassword.length < 6) {
          toaster.push(<Message showIcon type='error' style={PushThemes.pushRed}>
            <p style={PushThemes.txt}>Password should be at least 6 characters. (auth/weak-password)</p>
          </Message>, {placement: 'topCenter'})
        }
        if ((onlyOneSpace) && (userPassword != '') && (userPassword === confirm) && userPassword.length >= 6) {
          createUserWithEmailAndPassword(auth, userEmail, userPassword)
          .then(async (userCredentials) => {
            const user = userCredentials.user
            createAccount(user.uid, userName, userEmail, 10)
            navigate('/app')
            })
            .catch((err) => {
              console.log(err.message)
            }).finally(() => {
              toaster.push(<Message style={PushThemes.pushBlue}>
                <p style={PushThemes.txt}>Account created succesfully</p>
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
        <Form.HelpText>{en ? 'Minimum 6 characters' : 'Mindestens 6 Zeichen'}</Form.HelpText>
      </div>
        { signupPage ? (
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
      <Button appearance='primary' className='r-btn r-main-btn mb-2 dark-blue' onClick={signupPage ? signUp : signIn}>
        {
          signupPage ? en ? 'Create account' : 'Account erstellen'
          : en ? 'Login' : 'Anmelden'
        }
      </Button>
    </div>
  )
}

export default AuthModalInputs
