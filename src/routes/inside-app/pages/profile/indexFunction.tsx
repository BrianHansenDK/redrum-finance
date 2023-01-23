import React from 'react'
import { useParams } from 'react-router-dom'
import ProfilePage from '.'

const ProfilePageWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProfilePageWrapper(ProfilePage)