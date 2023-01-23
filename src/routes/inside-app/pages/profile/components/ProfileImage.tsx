import { onValue, ref } from 'firebase/database'
import React, { Component, useState } from 'react'
import { Avatar } from 'rsuite'
import { auth, database } from '../../../../../firebase'
import MainBtn from '../../../components/MainBtn'
import { mainColors } from '../../../themes/colors'
import mainShadows from '../../../themes/shadows'
import EditImageModal from './EditImageModal'

interface IState {
    user: any,
    visible: boolean
}

class ProfileImage extends Component<{}, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            user: undefined,
            visible: false,
        }
    }
    componentDidMount(): void {
        const reference = ref(database, 'users/' + auth.currentUser?.uid)
        onValue(reference, (snap) => {
            this.setState((_prev) => ({
                user: snap.val()
            }))
        })
    }

    render(): React.ReactNode {

        return (
            <>
                {
                    this.state.user?.image ? (
                        <Avatar size='lg' circle src={this.state.user?.image} />
                    ) : (
                        <div style={styles.profileImgWrap} className='flex-column'>

                            <div style={styles.avatar}>
                                {this.state.user?.username}
                            </div>
                            <MainBtn
                                content={'Add profile image'}
                                pressed={this.openModal}
                                btnColor={'blue'}
                                btnAppearance={'primary'}
                                btnSize={'lg'}
                                isBlock={false} />
                        </div>
                    )
                }
                <EditImageModal isVisible={this.state.visible} close={this.closeModal} user={this.state.user} />
            </>
        )
    }
    openModal = () => {
        this.setState((_prev) => ({
            visible: true
        }))
    }
    closeModal = () => {
        this.setState((_prev) => ({
            visible: true
        }))
    }
}

const styles = {
    profileImgWrap: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        backgroundColor: mainColors.dark,
        color: mainColors.white,
        fontSize: 45,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: mainShadows.image,
        marginBottom: 15,
    }
}

export default ProfileImage