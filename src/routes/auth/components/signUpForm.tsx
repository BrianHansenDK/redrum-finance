import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import React, { Component, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input, InputGroup, Message, Schema, Toggle, Tooltip, useToaster, Whisper } from "rsuite"
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import EnvelopeIcon from '@rsuite/icons/legacy/Envelope'
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import { getDatabase, ref, set } from "firebase/database"
import InputGroupAddon from "rsuite/esm/InputGroup/InputGroupAddon"
import { mainColors } from "../../inside-app/themes/colors"
import FormGroup from "rsuite/esm/FormGroup"
import FormControl from "rsuite/esm/FormControl"
import { database, getAllUserObjectsInfo, writeUserData } from "../../../firebase"
import EmailIMG from '../../../assets/mail-svgrepo-com.svg'
import signInPageStrings from "../../../library/string/SignInPage"
import signUpModalStrings from "../../../library/string/SignUpModal"

const tooltip = (
    <Tooltip>
        You have to agree to our terms and conditions to be able to sign up.
    </Tooltip>
)

function SignUpForm({en} : {en: boolean}) {

    const auth = getAuth()
    const navigate = useNavigate()
    const [awaitingConfirm, setAwaitingConfirm] = useState(false)

    const toaster = useToaster()


    const [authing, setAuthing] = useState(false)
    const [isChecked, setChecked] = useState(false)
    const [password1Visible, setPassword1Visible] = useState(false)
    const [password2Visible, setPassword2Visible] = useState(false)


    const [userName, setUserName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmedPassword, setUserConfirmedPassword] = useState('')

    const showPassword1 = () => setPassword1Visible(!password1Visible)
    const showPassword2 = () => setPassword2Visible(!password2Visible)

    const onlyOneSpace = userName.split(' ').length -1 < 2


    const signInWithGoogle = async () => {
        setAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                if (response.user.email) {
                    console.log(response.user.uid)
                    navigate('/app')

                    writeUserData(
                        response.user.uid,
                        response.user.displayName ? response.user.displayName : 'Unknown',
                        response.user.email ? response.user.email : 'Nonexistent',
                        10,
                    )
                }
            })
            .catch((err) => {
                console.log(err.message)
                setAuthing(false)
            })
            .finally(() => setAuthing(false))
    }

    const createAccount = () => {
      if (!onlyOneSpace) {
        toaster.push(<Message showIcon type='error'>
          Username cannot include multiple spaces.
        </Message>, {placement: 'topCenter'})
        window.setTimeout(() => {toaster.clear()}, 8000)
      }
      if (userPassword !== userConfirmedPassword) {
        toaster.push(<Message showIcon type='error'>
          Password differs from password confirmation.
        </Message>, {placement: 'topCenter'})
        window.setTimeout(() => {toaster.clear()}, 8000)
      }
      if ((onlyOneSpace) && (userPassword === userConfirmedPassword) ) {
        createUserWithEmailAndPassword(auth, userEmail, userConfirmedPassword)
        .then(async (userCredentials) => {
          const user = userCredentials.user
          const reference = ref(database, 'users/' + user.uid)
            set(reference, {
              id: user.uid,
              username: userName,
              email: userEmail,
              completion: 10,
            })
            navigate('/app')
          })
          .catch((err) => {
            console.log(err.message)
          })
        }
      }
    return (

        <>
        {
          awaitingConfirm ? (
              <div>
                <h1>Email verification</h1>
                <img src={EmailIMG} alt="Verify your email address" />
                <p>
                  We have send you an email with a verification link. <br/>
                  You need to verify yyour email to acces the application platform.
                </p>
              </div>
            ) : (
              <Form fluid className="d-flex mb-1" style={{ width: 50 + '%' }}>
                <div className="col">
                    <Whisper speaker={tooltip} placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`}>
                        <Button
                            appearance='primary' color='green' className='main-btn mb-3 shadow'
                            block onClick={signInWithGoogle} disabled={authing}
                            style={{color: mainColors.rSuiteBlue, border: '2px solid' + mainColors.rSuiteBlue, backgroundColor: mainColors.white}}
                            >
                            <GPLAY /> {en ? signInPageStrings.EN.google : signInPageStrings.DE.google}
                        </Button>
                    </Whisper>

                    <FormGroup controlId="username">
                        <InputGroup inside className="mb-2">
                            <InputGroupAddon>
                                <AvatarIcon />
                            </InputGroupAddon>
                            <FormControl
                            pattern="[a-zA-Z]+(\s[a-zA-Z]*){0,2}"
                            defaultValue={userName}
                            onChange={setUserName}
                            name="userName"
                            placeholder={en ? signUpModalStrings.EN.un : signUpModalStrings.DE.un}
                            type="text" />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId="email">
                        <InputGroup inside className="mb-2">
                            <InputGroupAddon>
                                <EnvelopeIcon />
                            </InputGroupAddon>
                            <FormControl
                            defaultValue={userEmail}
                            onChange={setEmail}
                            name="emailAddress"
                            placeholder={en ? signUpModalStrings.EN.mail : signUpModalStrings.DE.mail}
                            type="email" />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId="password">
                        <InputGroup inside className="mb-2" >
                            <FormControl
                            defaultValue={userPassword}
                            onChange={setUserPassword}
                            placeholder={en ? signUpModalStrings.EN.ps : signUpModalStrings.DE.ps}
                            name="password"
                            type={password1Visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={showPassword1}>
                                {password1Visible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId="password-1">
                        <InputGroup inside className="mb-2" >
                            <FormControl
                            defaultValue={userConfirmedPassword}
                            onChange={setUserConfirmedPassword}
                            placeholder={en ? signUpModalStrings.EN.cPs : signUpModalStrings.DE.cPs}
                            name="password-confirm"
                            type={password2Visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={showPassword2}>
                                {password2Visible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>

                    <div className='d-flex'>
                        <Toggle onChange={() => setChecked(!isChecked)} checkedChildren={<CheckIcon />} unCheckedChildren={<CloseIcon />} />
                        <p className='ml-1' style={{color: mainColors.white}}>
                                {en ? signUpModalStrings.EN.tAndC : signUpModalStrings.DE.tAndC} &nbsp;
                                <Link to='/'>
                                  {en ? signUpModalStrings.EN.read : signUpModalStrings.DE.read}
                                </Link>
                            </p>
                    </div>

                    <FormGroup>

                        <Whisper placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
                            <Button appearance='primary' disabled={!isChecked} size='lg' block className='main-btn mt-1 shadow' onClick={createAccount}>
                              {en ? signUpModalStrings.EN.btn : signUpModalStrings.DE.btn}
                            </Button>
                        </Whisper>
                    </FormGroup>
                </div>
            </Form>
            )
          }


        </>

    )
}

export default SignUpForm
