import React, { useEffect, useState } from 'react'
import { auth, getCurrentUserFunction, userRef } from '../../../../../../../firebase'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import CoInvestorRightSide from './CoInvestorRightSide'
import { FirebaseUser } from '../../../../../../../database/Objects'
import RedrumProLoader from '../../../../../components/RedrumProLoader'

interface IProps {
  userId: any,
  investments: any[],
  amount: number,
  en: boolean,
  isMobile: boolean,
 }

const CoInvestorCard: React.FunctionComponent<IProps> = (props) => {
  const { userId, investments, amount, en, isMobile } = props
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    getCurrentUserFunction(userId, setUser, setLoading)
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
          {
            loading ? (<RedrumProLoader/>) : user === null ? null : (
              <>
                {user.image !== '' ? (
                  <img style={styles.image} src={user.image} alt={`Profile image for ${user.username}`} />
                ) : (
                    <div style={styles.avatar}>
                        {user.username.toUpperCase()[0]}
                    </div>
                )}
                <CoInvestorRightSide
                isMobile={isMobile}
                amount={amount}
                userName={user.email == auth.currentUser?.email ? 'You' : user.username}
                investments={investments}
                en={en}
                />
              </>
            )
          }

        </div>
    )
}

export default CoInvestorCard
