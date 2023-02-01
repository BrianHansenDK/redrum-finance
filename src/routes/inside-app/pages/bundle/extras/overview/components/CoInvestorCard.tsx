import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../../../firebase'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import CoInvestorRightSide from './CoInvestorRightSide'

const CoInvestorCard = ({ userId, investments, amount }: { userId: any, investments: any[], amount: number }) => {
  const [userImage, setUserImage] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    userRef(userId, '/image', setUserImage)
    userRef(userId, '/username', setUserName)
    userRef(userId, '/email', setUserEmail)
  }, [userId])
    return (
        <div style={styles.wrap}>
            {userImage !== '' ? (
                <img style={styles.image} src={userImage} alt={`Profile image for ${userName}`} />
            ) : (
                <div style={styles.avatar}>
                    {userName.split(' ').length == 2 ? userName.split(' ').map((w: any) => w[0]).join('.') : userName.slice(0, 1)}
                </div>
            )}
            <CoInvestorRightSide amount={amount} userName={userEmail == auth.currentUser?.email ? 'You' : userName} investments={investments} />
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
