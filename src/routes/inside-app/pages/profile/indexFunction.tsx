import React from 'react'
import { useParams } from 'react-router-dom'
import ProfilePage from '.'

interface IProps {en: boolean}

const ProfilePageWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en} = props
    return (
        <>
            <WrappedComponent params={params} en={en}/>
        </>
    )
}

export default ProfilePageWrapper(ProfilePage)
