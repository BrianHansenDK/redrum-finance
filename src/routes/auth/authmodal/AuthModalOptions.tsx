import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { onValue, ref } from 'firebase/database'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseUser } from '../../../database/Objects'
import { auth, getCurrentUserFunction, writeUserData, database } from '../../../firebase'
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
  const [users, setUsers] = React.useState<any[]>([])
  const navigate = useNavigate()

  React.useEffect(() => {
    const reference = ref(database, 'users')
    let data: any[] = []
    onValue(reference, (snap) => {
      snap.forEach((user) => {
        data.push(user.key)
      })
    })
    setUsers(data)
  }, [])

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

  const signUpWithGoogle = async () => {
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
        .then((response) => {
            if (response.user.email) {
                if (!users.includes(response.user.uid)) {
                  writeUserData(
                    response.user.uid,
                    response.user.displayName ? response.user.displayName : 'Unknown',
                    response.user.email ? response.user.email : 'Nonexistent',
                    10,
                    )
                    navigate('/app')
                  } else {
                    navigate('/app')
                  }
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
        <AuthModalBtns
        en={en}
        goWithMail={goWithMail}
        signInWithGoogle={signInWithGoogle}
        authing={authing}
        signupPage={signupPage}
        signUpWithGoogle={signUpWithGoogle}
        />
        <AuthModalInputs en={en} visible={visible} signupPage={signupPage} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default AuthModalOptions
