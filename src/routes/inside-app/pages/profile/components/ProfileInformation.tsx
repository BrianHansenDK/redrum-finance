import React from 'react'
import { mainColors } from '../../../themes/colors'

const ProfileInformation = ({ user }: { user: any }) => {
    return (
        <div style={styles.wrap}>
            <h1 style={styles.username}>
                {user?.username}
            </h1>
            <p style={styles.email}>
                Email address: {user?.email}
            </p>
        </div>
    )
}

const styles = {
    wrap: {
        marginLeft: 100,
    },
    username: {
        fontSize: 32.5,
        color: mainColors.dark,
        lineHeight: 1,
    },
    email: {
        fontSize: 20.5,
        color: mainColors.dark,
        marginTop: 10,
    }
}

export default ProfileInformation