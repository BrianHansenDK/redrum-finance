import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, writeUserData } from '../../../firebase'
import AuthModalBtns from './AuthModalBtns'
import AuthModalInputs from './AuthModalInputs'

interface IProps {
  en: boolean,
  visible: boolean,
  withMail: boolean,
  signupPage: boolean,
  handleChange: any,
  goWithMail: any,
}

const AuthModalOptions: React.FunctionComponent<IProps> = (props) => {
  const {en, visible, withMail, signupPage, handleChange, goWithMail} = props
  const [authing, setAuthing] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
        .then((response) => {
            if (response.user.email) {
                console.log(response.user.uid)
                navigate('/app')
                writeUserData(
                    response.user.uid,
                    response.user.displayName ? response.user.displayName : 'Unknown',
                    response.user.email ? response.user.email : 'Nonexistent',
                    10,
                )
            }
        })
        .catch((err) => {
            console.log(err.message)
            setAuthing(false)
        })
        .finally(() => setAuthing(false))
}
  return (
    <div className="full-con">
      <div className={`btn-and-inputs-con ${withMail ? 'action' : ''}`}>
        <AuthModalBtns en={en} goWithMail={goWithMail} signInWithGoogle={signInWithGoogle} authing={authing} />
        <AuthModalInputs en={en} visible={visible} signupPage={signupPage} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default AuthModalOptions
