import { ref, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input, Message, toaster, useToaster } from 'rsuite'
import { database, userRef } from '../../../firebase'
import MainBtn from '../../inside-app/components/MainBtn'
import { mainCard } from '../../inside-app/themes/cardStyles'
import { mainColors } from '../../inside-app/themes/colors'
import { avatarPlaceholder, profileImage } from '../../inside-app/themes/imageStyles'
import { profileCardTitle } from '../../inside-app/themes/textStyles'


const UserCard = () => {
    const toaster = useToaster()
    const { userId } = useParams()
    const [username, setUsername] = useState<string>('')
    const [userImage, setUserImage] = useState<any>('')
    const [email, setEmail] = useState<string>('')
    const [available, setAvailable] = useState<any>(0)
    useEffect(() => {
        userRef(userId, '/image', setUserImage)
        userRef(userId, '/username', setUsername)
        userRef(userId, '/email', setEmail)
        userRef(userId, '/money_available', setAvailable)
    }, [userId])

    const saveChanges = () => {
        const reference = ref(database, 'users/' + userId)
        const updates: any = {}
        updates['username'] = username
        updates['money_available'] = parseInt(available)
        update(reference, updates).then(() => {
            toaster.push(
                <Message showIcon type='info' duration={10000} closable>
                    Data was updated for {username}!
                </Message>, { placement: 'topCenter' }
            )
        }).catch((err) => {
            toaster.push(
                <Message showIcon type='error' duration={10000} closable>
                    Error occured: {err.code}
                </Message>, { placement: 'topCenter' }
            )
        })
    }
    return (
        <div style={mainCard} >
            <h1 style={profileCardTitle} className='text-center mb-2'>
                {username}
            </h1>
            <div className='d-flex'>
                <div className='mr-5'>

                    {userImage !== null ? (
                        <img style={profileImage} src={userImage} alt={username} className='ml-5' />
                    ) : (
                        <div style={avatarPlaceholder} className='ml-5'>
                            {username.split(' ').length > 1 ? username.split(' ').map((w: any) => w[0]).join('.') : username.slice(0, 1).split('').join('.')}
                        </div>
                    )}
                </div>
                <div style={styles.formWrap}>

                    <div style={styles.formItem} className='d-flex column-gap-2 align-items-center'>
                        <p style={styles.label} className='text-start'>Username: </p>
                        <Input style={styles.input} defaultValue={username} placeholder={username} onChange={setUsername} />
                    </div>
                    <div style={styles.formItem} className='d-flex column-gap-2 align-items-center'>
                        <p style={styles.label} className='text-start'>Email address: </p>
                        <Input disabled style={styles.input} defaultValue={email} placeholder={email} onChange={setEmail} />
                    </div>
                    <div style={styles.formItem} className='d-flex column-gap-2 align-items-center'>
                        <p style={styles.label} className='text-start'>Money available: </p>
                        <Input style={styles.input} type='number' placeholder={available !== null ? available : 0} onChange={setAvailable} />
                    </div>
                    <div style={styles.btnWrap}>
                        <MainBtn
                            content={'Save changes'}
                            pressed={saveChanges}
                            btnColor={'violet'}
                            btnAppearance={'primary'}
                            btnSize={'lg'}
                            isBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    formWrap: {
        width: 400,
    },
    formItem: {
        width: '100%',
        marginBottom: 10,
        color: mainColors.dark,
    },
    label: {
        minWidth: 120,
    },
    input: {
        width: 300,
        color: mainColors.dark,
    },
    btnWrap: {
        marginTop: 25,
    }
}

export default UserCard
