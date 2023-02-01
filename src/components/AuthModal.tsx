import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, InputGroup, Message, Modal, Toggle, Tooltip, useToaster, Whisper } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import GOOGLE from '@rsuite/icons/legacy/GooglePlusCircle'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import EnvelopeIcon from '@rsuite/icons/legacy/Envelope'
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import FormGroup from 'rsuite/esm/FormGroup'
import InputGroupAddon from 'rsuite/esm/InputGroup/InputGroupAddon'
import FormControl from 'rsuite/esm/FormControl'
import { database, writeUserData } from '../firebase'
import { ref, set } from 'firebase/database'

const tooltip = (
    <Tooltip>
        You have to agree to our terms and conditions to be able to sign up.
    </Tooltip>
)

const AuthModal = ({ isVisible, close }: { isVisible: boolean, close: any }) => {
    const auth = getAuth()
    const navigate = useNavigate()
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
          close()
        })
        .catch((err) => {
          toaster.push(<Message showIcon type='error'>
            {err.message}
      </Message>, {placement: 'topCenter'})
      window.setTimeout(() => {toaster.clear()}, 8000)
        })
      }
    }


    return (
        <Modal className='login-modal' open={isVisible} onClose={() => {
          close()
          setChecked(false)
          }} size='md' style={{ backgroundColor: 'rgba(75,75,75, .8' }} >
            <ModalHeader>
            </ModalHeader>
            <ModalBody>
                <h3 className='txt-center' style={{ color: 'black' }}>Redrum Media Invest</h3>
                <h3 className='txt-center'>

                    Please register to start investing
                </h3>
                <div className='d-flex justify-center mt-2'>
                    <Whisper placement="bottom" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
                        <Button
                            appearance='ghost' className='main-btn thin hidden'
                            style={{ width: 250, margin: 'auto' }}
                            onClick={signInWithGoogle}
                        >
                            <GOOGLE /> Sign up with Google
                        </Button>
                    </Whisper>
                </div>
                <Divider />
                <Form className="d-flex pl-2 pr-2" fluid>
                  <div className='col'>
                <FormGroup controlId="username">
                        <InputGroup inside className="mb-2">
                            <InputGroupAddon>
                                <AvatarIcon />
                            </InputGroupAddon>
                            <FormControl defaultValue={userName} onChange={setUserName} name="userName" placeholder="Username" type="text" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="email">
                        <InputGroup inside className="mb-2">
                            <InputGroupAddon>
                                <EnvelopeIcon />
                            </InputGroupAddon>
                            <FormControl defaultValue={userEmail} onChange={setEmail} name="emailAddress" placeholder="Email address" type="email" />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <InputGroup inside className="mb-2" >
                            <FormControl defaultValue={userPassword} onChange={setUserPassword} placeholder="Password" name="password" type={password1Visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={showPassword1}>
                                {password1Visible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="password-1">
                        <InputGroup inside className="mb-2" >
                            <FormControl defaultValue={userConfirmedPassword} onChange={setUserConfirmedPassword} placeholder="Confirm Password" name="password-confirm" type={password2Visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={showPassword2}>
                                {password2Visible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                        <div className='d-flex'>
                            <Toggle onChange={() => setChecked(!isChecked)} checkedChildren={<CheckIcon />} unCheckedChildren={<CloseIcon />} />
                            <p className='ml-1'>
                                I agree to the Redrum media invest Terms & Conditions and the Privacy Policy. I further agree to receiving marketing via e-mails from Redrum media invest Gmbh regarding product categories, which I can withdraw any time.
                            </p>
                        </div>
                        <Whisper placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
                            <Button appearance='primary' disabled={!isChecked} size='lg' block className='main-btn mt-1' onClick={createAccount}>
                                Get started
                            </Button>
                        </Whisper>
                        </div>
                </Form>
                <p className=' mt-3 d-flex justify-center' >
                    <span style={{ opacity: .75 }}>
                        Already have an account? &nbsp;
                    </span>
                    <Link to='/sign-in'>Sign in</Link>
                </p>
            </ModalBody>
        </Modal>
    )
}

export default AuthModal
