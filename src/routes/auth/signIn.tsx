import React from 'react'
import { Link } from 'react-router-dom'
import SignInForm from './components/signInForm'

const SignInPage = () => {
    return (
        <div 
        className='pl-4 pr-4 dark-bg d-flex flex-column align-center' 
        style={{height: 100 + 'vh', justifyContent: 'flex-start'}}
        >
            <div>
                <h1 className='txt-white txt-center mt-4 mb-3'>Sign in</h1>

            </div>
            <SignInForm />
            <p className='txt-white mt-1' >
                <span style={{opacity: .75}}>
                    Don't have an account? &nbsp;
                </span> 
                <Link to='/sign-up'>Sign up</Link>
            </p>
        </div>
    )
}

export default SignInPage