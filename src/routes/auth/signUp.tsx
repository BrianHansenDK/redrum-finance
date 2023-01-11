import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from './components/signUpForm'

const SignUpPage = () => {
    return (
        <>
            <div 
        className='pl-4 pr-4 dark-bg d-flex flex-column align-center' 
        style={{height: 100 + 'vh', justifyContent: 'flex-start'}}
        >
            <div>
                <h1 className='txt-white txt-center mt-4 mb-3'>Sign up</h1>

            </div>
            <SignUpForm />
            <p className='txt-white mt-1' >
                <span style={{opacity: .75}}>
                    Already have an account? &nbsp;
                </span> 
                <Link to='/sign-in'>Sign in</Link>
            </p>
        </div>
            
        </>
    )
}

export default SignUpPage