import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Divider } from "rsuite"
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'
import { writeUserData } from "../../../firebase"

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
                writeUserData(
                    response.user.uid,
                    response.user.displayName ? response.user.displayName : 'Unknown',
                    response.user.email ? response.user.email : 'Nonexistent',
                    response.user.photoURL ? response.user.photoURL : ''
                )
            })
            .catch((err) => {
                console.log(err.message)
                setAuthing(false)
            })
            .finally(() => setAuthing(false))
    }

    return (

        <>
            <form className="d-flex mb-1" style={{ width: 50 + '%' }}>
                <div className="col">

                    <Button
                        appearance='primary' color='blue' className='main-btn white-with-border mb-3'
                        onClick={signInWithGoogle} block disabled={authing}
                    >
                        <GPLAY /> Login with Google
                    </Button>
                    <Divider />
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        <label >Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="password" placeholder="password" />
                        <label >Password</label>
                    </div>

                    <Button appearance='primary' block className='main-btn mt-1 mb-1'
                    >
                        Login
                    </Button>

                </div>
            </form>

        </>

    )
}

export default SignInForm