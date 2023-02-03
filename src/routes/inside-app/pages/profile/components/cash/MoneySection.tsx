import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainBtn from '../../../../components/MainBtn'
import { mainCard } from '../../../../themes/cardStyles'
import { mainColors } from '../../../../themes/colors'
import mainShadows from '../../../../themes/shadows'
import { profileCardTitle, profileCardUnderTitle } from '../../../../themes/textStyles'
import RadialChart from '../../../investments/components/RadialChart'
import AccountMoneySection from './AccountMoneySection'

interface IProps { userId: any }

const MoneySection: React.FunctionComponent<IProps> = (props) => {
    const { userId } = props
    const navigate = useNavigate()
    return (
        <div style={styles.card} className='mt-5'>
            <h1 style={styles.title} className='text-center'>Portfolio</h1>
          <h1 style={profileCardUnderTitle} className='mt-2 mb-3 text-center'>All of your investments</h1>
            <RadialChart />
            <div style={{maxWidth: 300, margin: 'auto'}} className='mb-4'>
              <MainBtn
              content={'View reciepts'}
              pressed={() => navigate('/app/databank')}
              btnColor={'violet'}
              btnAppearance={'primary'}
              btnSize={'lg'}
              isBlock
              />
            </div>
            <AccountMoneySection userId={userId} />
        </div>
    )
}

const styles = {
    card: mainCard,
    title: profileCardTitle,
}

export default MoneySection
