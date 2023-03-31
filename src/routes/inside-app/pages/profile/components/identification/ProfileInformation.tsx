import React from 'react'
import { auth } from '../../../../../../firebase'
import MainBtn from '../../../../components/MainBtn'
import ProfileProgress from './ProfileProgress'
import { FirebaseUser } from '../../../../../../database/Objects'

interface IProps {
    user: FirebaseUser,
    isMobile: boolean,
}

const ProfileInformation: React.FunctionComponent<IProps> = (props) => {
    const { user, isMobile } = props
    return (
        <div className='profile-info'>
            <div className='text-inner'>
                <h1 className='username'>
                    {user.username}
                </h1>
                <p className='email'>
                  {user.email}
                </p>
                <p className='badge'>
                  Rookie
                </p>
            </div>
            {
              user.id == auth.currentUser?.uid ? (
                <>
                <ProfileProgress
                completion={user.completion}
                userId={user.id}
                isMobile={isMobile}
                />
                </>
              ) : <MainBtn
              content={'Add friend'}
              pressed={() => null}
              btnColor={'blue'}
              btnAppearance={'primary'}
              btnSize={'lg'}
              isBlock={false} />
            }

        </div>
    )
}

export default ProfileInformation
