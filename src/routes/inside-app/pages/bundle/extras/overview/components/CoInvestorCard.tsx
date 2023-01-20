import React from 'react'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import CoInvestorRightSide from './CoInvestorRightSide'

const CoInvestorCard = ({ user, users }: { user: any, users: any[] }) => {
    return (
        <div style={styles.wrap}>
            {user?.image ? (
                <img style={styles.image} src={user.image} alt={`Profile image for ${user.username}`} />
            ) : (
                <div style={styles.avatar}>
                    {user?.username.split(' ').length == 2 ? user?.username.split(' ').map((w: any) => w[0]).join('.') : user?.username.slice(0, 1)}
                </div>
            )}
            <CoInvestorRightSide user={user} users={users} />
        </div>
    )
}
const styles = {
    wrap: {
        display: 'flex',
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        marginRight: 50,
        outline: '5px solid rgba(150,150,29, .5)',
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 125,
        height: 125,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        color: mainColors.white,
        backgroundColor: mainColors.dark,
        fontSize: 50,
        marginRight: 50,
        outline: '5px solid rgba(150,150,29, .5)',
    },
}

export default CoInvestorCard