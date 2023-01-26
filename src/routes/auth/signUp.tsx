import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from './components/signUpForm'
import SignUpInnerForm from './components/SingUpInnerForm'

const SignUpPage = () => {
    return (
        <>
            <div
                className='pl-4 pr-4 dark-bg d-flex flex-column align-center'
                style={styles.wrap}
            >
                <div>
                    <h1 className='txt-white txt-center mt-4 mb-3'>Sign up</h1>

                </div>
                <SignUpForm />
                <p className='txt-white mt-1' >
                    <span style={{ opacity: .75 }}>
                        Already have an account? &nbsp;
                    </span>
                    <Link to='/sign-in'>Sign in</Link>
                </p>
            </div>

        </>
    )
}

const styles = {
    wrap: {
        minHeight: '100vh',
        justifyContent: 'flex-start',
        paddingBottom: 75,
    }
}

export default SignUpPage