import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Divider, Form, InputGroup, Message, useToaster } from "rsuite"
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'
import { writeUserData } from "../../../firebase"
import FormGroup from "rsuite/esm/FormGroup"
import InputGroupAddon from "rsuite/esm/InputGroup/InputGroupAddon"

import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import EnvelopeIcon from '@rsuite/icons/legacy/Envelope'
import FormControl from "rsuite/esm/FormControl"

const SignInForm = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)

    const [userEmail, setEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const toaster = useToaster()

    const showPassword = () => setPasswordVisible(!passwordVisible)

    const signInWithGoogle = async () => {
        setAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid)
                navigate('/app')
            })
            .catch((err) => {
                console.log(err.message)
                setAuthing(false)
            })
            .finally(() => setAuthing(false))
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/app')
                toaster.push(
                    <Message showIcon type="info">
                        Logged in
                    </Message>, { placement: 'topCenter' }
                )
                window.setTimeout(() => {
                    toaster.clear()
                }, 5000)
            }).catch((error) => {
                toaster.push(
                    <Message showIcon type="error">
                        Something went wrong: Error {error.code}
                    </Message>, { placement: 'topCenter' }
                )
                console.log(error.message)
                window.setTimeout(() => {
                    toaster.clear()
                }, 5000)
            });
    }

    return (

        <>
            <Form fluid className="d-flex mb-1" style={{ width: 50 + '%' }}>
                <div className="col">
                    <Button
                        appearance='primary' color='blue' className='main-btn white-with-border mb-3'
                        onClick={signInWithGoogle} block disabled={authing}
                    >
                        <GPLAY /> Login with Google
                    </Button>
                    <Divider />
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
                            <FormControl defaultValue={userPassword} onChange={setUserPassword} placeholder="Password" name="password" type={passwordVisible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={showPassword}>
                                {passwordVisible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                    <Button onClick={signIn} appearance='primary' block className='main-btn mt-1 mb-1'
                    >
                        Login
                    </Button>

                </div>
            </Form>

        </>

    )
}

export default SignInForm