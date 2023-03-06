import React, { useEffect, useState } from 'react'
import { auth, userRef } from '../../../../../../../firebase'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import CoInvestorRightSide from './CoInvestorRightSide'

interface IProps {
  userId: any,
  investments: any[],
  amount: number,
  en: boolean,
  isMobile: boolean,
 }

const CoInvestorCard: React.FunctionComponent<IProps> = (props) => {
  const { userId, investments, amount, en, isMobile } = props
  const [userImage, setUserImage] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    userRef(userId, '/image', setUserImage)
    userRef(userId, '/username', setUserName)
    userRef(userId, '/email', setUserEmail)
  }, [userId])

  const styles = {
    wrap: {
        display: 'flex',
    },
    image: {
        width: isMobile ? 75 : 125,
        height: isMobile ? 75 : 125,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        marginRight: 50,
        outline: '5px solid rgba(150,150,29, .5)',
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: isMobile ? 75 : 125,
        height: isMobile ? 75 : 125,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        color: mainColors.white,
        backgroundColor: mainColors.dark,
        fontSize: isMobile ? 25 : 50,
        marginRight: isMobile ? 25 : 50,
        outline: '5px solid rgba(150,150,29, .5)',
    },
}
    return (
        <div style={styles.wrap}>
            {userImage !== '' ? (
                <img style={styles.image} src={userImage} alt={`Profile image for ${userName}`} />
            ) : (
                <div style={styles.avatar}>
                    {userName.split(' ').length == 2 ? userName.split(' ').map((w: any) => w[0]).join('.') : userName.slice(0, 1)}
                </div>
            )}
            <CoInvestorRightSide
            isMobile={isMobile}
            amount={amount}
            userName={userEmail == auth.currentUser?.email ? 'You' : userName}
            investments={investments}
            en={en}
            />
        </div>
    )
}

export default CoInvestorCard
