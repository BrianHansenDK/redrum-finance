import React from 'react'
import { Message, useToaster } from 'rsuite'

interface IProps {
    setIsAdmin: any
}

const LoginFirst = (props: IProps) => {
    const {setIsAdmin} = props
    const toaster = useToaster()
    const [email, setEmail] = React.useState<any>('')
    const [password, setPassword] = React.useState<any>('')

    const loginToPage = () => {
        console.log('Email:', email,'Password:', password)
        if (email == import.meta.env.VITE_PAGE_ADMIN_MAIL && password == import.meta.env.VITE_PAGE_ADMIN_KEY) {
            setIsAdmin(true);
            toaster.push(<Message type='success' showIcon duration={8000}>
                Logged in succesfully
            </Message>, {placement: 'topCenter'})
        } else {
            setEmail(''); setPassword('');
            toaster.push(<Message type='error' showIcon duration={8000}>
                The email address or the password does not match any existing admin accounts
            </Message>, {placement: 'topCenter'})
        }
    };

  return (
    <div style={{margin: 25}}>
        <h1>This page is currently only available for admins</h1>
        <p>If you are an admin you can sign in here</p>
        <input type="text" placeholder='Admin email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Admin password' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        <button onClick={loginToPage}>Sign in</button>
    </div>
  )
}

export default LoginFirst