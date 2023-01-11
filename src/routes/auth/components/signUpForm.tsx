import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Toggle, Tooltip, Whisper } from "rsuite"
import GPLAY from '@rsuite/icons/legacy/GooglePlusCircle'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';

const tooltip = (
    <Tooltip>
        You have to agree to our terms and conditions to be able to sign up.
    </Tooltip>
)

const SignUpForm = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthing] = useState(false)
    const [isChecked, setChecked] = useState(false)

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
        
        <>
        <form className="d-flex mb-1" style={{width: 50 + '%'}}>
                    <div className="col">
                    <Whisper speaker={tooltip} placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`}>
                    <Button 
                    appearance='primary' color='green' className='main-btn white-with-border mb-3 shadow'
                    block onClick={signInWithGoogle} disabled={authing}>
                        <GPLAY/> Login with google
                    </Button>
                </Whisper>

                        <div className="form-floating mb-1">
                            <select defaultValue='1' className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option value='1' >He/Him</option>
                                <option value="2">She/Her</option>
                                <option value="3">They/Them</option>
                            </select>
                            <label>Pronouns</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="name" className="form-control" id="username" placeholder="Ninjacat" />
                            <label >Username</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label >Email address</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="password" className="form-control" id="password" placeholder="password" />
                            <label >Password</label>
                        </div>
                        <div className="form-floating mb-1">
                            <input type="password" className="form-control" id="password_confirm" placeholder="password" />
                            <label >Confirm Password</label>
                        </div>
                        <div className='d-flex'>
                            <Toggle onChange={() => setChecked(!isChecked)} checkedChildren={<CheckIcon />} unCheckedChildren={<CloseIcon />} />
                            <p className='ml-1'>
                                I agree to the Redrum media invest Terms & Conditions and the Privacy Policy. I further agree to receiving marketing via e-mails from Redrum media invest Gmbh regarding product categories, which I can withdraw any time.
                            </p>
                        </div>
                        <Whisper placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
                            <Button appearance='primary' disabled={!isChecked} size='lg' block className='main-btn mt-1 shadow'>
                                Get started
                            </Button>
                        </Whisper>
                    </div>
                </form>
                
            </>
       
    )
}

export default SignUpForm