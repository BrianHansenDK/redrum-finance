import React from 'react'
import { mainColors } from '../../../../../themes/colors'

const CoInvestorRightSide = ({ user, users }: { user: any, users: any[] }) => {
    return (
        <div>
            <h3 style={styles.name}>
                {user?.username}
            </h3>
            <p style={styles.others}>
                {users?.length} other investors
            </p>
            <p style={styles.amount}>
                420 €
            </p>
        </div>
    )
}

const styles = {
    name: {
        fontSize: 25,
        fontWeight: '700',
        color: mainColors.dark,
        lineHeight: 1,
    },
    others: {
        fontSize: 18.5,
        color: mainColors.dark,
        marginTop: 8,
        opacity: .8,
        lineHeight: 1,
    },
    amount: {
        fontSize: 30,
        letterSpacing: 2.5,
        color: mainColors.dark,
        marginTop: 12.5,
        lineHeight: 1,
    }
}

export default CoInvestorRightSide