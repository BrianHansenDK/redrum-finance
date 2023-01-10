import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import React, { useState } from "react"
import { Form, useNavigate } from "react-router-dom"
import { Button } from "rsuite"
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'
import FormControl from "rsuite/esm/FormControl"

const SignInForm = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)

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

    return (
        
             <Button 
        appearance='primary' color='green' className='main-btn' style={{width: 50 + '%'}}
        onClick={signInWithGoogle} disabled={authing}>
            <GPLAY/> Login with google
        </Button>
       
    )
}

export default SignInForm