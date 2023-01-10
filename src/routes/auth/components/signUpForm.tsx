import React, { forwardRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Button } from 'rsuite'
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'

const SignUpForm = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)

    const signInWithGoogle = async () => {
        setAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((response) => {
            console.log(response.user.uid)
            navigate('/account')
        })
        .catch((err) => {
            console.log(err.message)
            setAuthing(false)
        })
    }

    return (
        <Button 
        appearance='primary' color='green' className='main-btn' 
        onClick={() => signInWithGoogle} disabled={authing}>
            <GPLAY/> Login with google
        </Button>
    )
}

export default SignUpForm