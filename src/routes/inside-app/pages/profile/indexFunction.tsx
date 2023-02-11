import React from 'react'
import { useParams } from 'react-router-dom'
import ProfilePage from '.'

interface IProps {en: boolean, setEn: any}

const ProfilePageWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en, setEn} = props
    return (
        <>
            <WrappedComponent params={params} en={en} setEn={setEn}/>
        </>
    )
}

export default ProfilePageWrapper(ProfilePage)
