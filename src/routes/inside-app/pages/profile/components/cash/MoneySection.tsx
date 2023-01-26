import React from 'react'
import { mainCard } from '../../../../themes/cardStyles'
import { mainColors } from '../../../../themes/colors'
import mainShadows from '../../../../themes/shadows'
import { profileCardTitle } from '../../../../themes/textStyles'
import AccountMoneySection from './AccountMoneySection'

interface IProps { userId: any }

const MoneySection: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
    return (
        <div style={styles.card} className='mt-5'>
            <h1 style={styles.title} className='text-center'>Portfolio</h1>
            <AccountMoneySection userId={userId} />
        </div>
    )
}

const styles = {
    card: mainCard,
    title: profileCardTitle,
}

export default MoneySection