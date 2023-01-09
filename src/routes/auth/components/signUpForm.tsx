import React, { forwardRef } from 'react'
import { Button, ButtonToolbar, DatePicker, Form, Input, InputGroup, InputNumber } from 'rsuite'
import GPLUS from '@rsuite/icons/legacy/GooglePlusCircle'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {

    return (
        <div className='' style={{ maxWidth: 750 }}>
            <Form fluid>
                <br />
                <Form.Group controlId="username">
                    <Form.ControlLabel>Username</Form.ControlLabel> <br />
                    <Form.Control placeholder='Username' name="username" type='text' />
                </Form.Group>
                <br />
                <br />
                <Form.Group controlId="email-1">
                    <Form.ControlLabel>Email</Form.ControlLabel> <br />
                    <Form.Control placeholder='Email address' name="email" type='email' />
                </Form.Group>
                <br />
                <Form.Group controlId="password-1">
                    <Form.ControlLabel>Password</Form.ControlLabel> <br />
                    <Form.Control name="password" placeholder='Password' type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary">Sign Up</Button>
                        <Button appearance='primary' color='green'> <GPLUS /> Sing up with Google</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>

        </div>
    )
}

export default SignUpForm