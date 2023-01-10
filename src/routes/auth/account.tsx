import React from 'react'
import { Button } from 'rsuite'
import { getAuth } from 'firebase/auth'

export interface IAccountPageProps {}

const AccountPage: React.FunctionComponent<IAccountPageProps> = (props) => {
    const auth = getAuth()

    return (
        <div>
            <h1>
                Account {auth.currentUser?.displayName}
            </h1>
            <p>
                User Email: {auth.currentUser?.email}
            </p>
            <Button onClick={() => auth.signOut()} >Logout</Button>
        </div>
    )
}

export default AccountPage