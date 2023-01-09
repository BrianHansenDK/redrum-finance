import React from 'react'
import { Link } from 'react-router-dom'
import SignInForm from './components/signInForm'

const SignInPage = () => {
    return (
        <div className='pl-4'>
            <h1 className='txt-center'>Sign In Page</h1>
            <div>
                <h1>Sign in to your account</h1>
                <p>
                    Don't have an account? <Link to='/sign-up'>Sign up</Link>
                </p>
            </div>
            <SignInForm />
        </div>
    )
}

export default SignInPage