import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Button, Input, Message, useToaster } from 'rsuite'
import { auth } from '../../../firebase'
import LOGO from '../../assets/vanumo-logo.svg'
import { vanumoColors } from '../../theme/vanumoTheme'

const VanumoSignIn = ({setSignedIn}: {setSignedIn: any}) => {
  const toaster = useToaster()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginToVanumo = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      const user = userCreds.user
      toaster.push(<Message showIcon type='info'>Logged in as {user.email}</Message>, {placement: 'topCenter'})
    })
    .catch((err) => {
      toaster.push(<Message showIcon type='error'>{err.message}</Message>, {placement: 'topCenter'})
      window.setTimeout(() => {toaster.clear()}, 10000)
    })
    .finally(() => {
      setSignedIn(true)
    })
  }

  return (
    <div style={styles.wrap} className='flex-column'>
      <img src={LOGO} alt="Vanumo logo" width={300} height={300} />
      <h1 style={styles.title}>Vanumo</h1>
      <div style={styles.form}>
        <Input onChange={setEmail} style={{marginBottom: 10}} placeholder='email'/>
        <Input onChange={setPassword} placeholder='password' type='password'/>
      <Button
      appearance='primary'
      block style={styles.btn} size='lg'
      onClick={loginToVanumo}
      >
        Sign in
      </Button>
      </div>
      <Button appearance='primary'
      style={styles.btn} size='lg'
      onClick={() => setSignedIn(true)}>
        Am admin
      </Button>
    </div>
  )
}
const styles = {
  wrap: {
    height: '100vh',
    backgroundColor: vanumoColors.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    color: vanumoColors.white,
    marginBottom: 25,
  },
  form: {
    width: 300,
  },
  btn: {
    backgroundColor: vanumoColors.main,
    marginTop: 25,
  }
}

export default VanumoSignIn
