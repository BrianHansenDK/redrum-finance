import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
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
    const isPhone = useMediaQuery('(max-width: 768px)')
    const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <div className=' profile-card mt-5 d-flex flex-column align-items-center'>
            <h1 className='title'>Portfolio</h1>
          <h1 className='under-title'>All of your investments</h1>
            <RadialChart isMobile={isMobile}/>
            <div style={{maxWidth: isMobile? '100%': 800, margin: 'auto', width: '100%',}} className='mb-4'>
              <Button
              appearance='primary'
              className='r-btn r-main-btn'
              style={{fontSize: 'x-large'}}
              onClick={() => navigate('/app/databank')}
              block
              >
                View Reciepts
              </Button>
            </div>
            {/* Unneccesary atm

              <AccountMoneySection userId={userId} />
            */}
        </div>
    )
}

const styles = {
    card: mainCard,
    title: profileCardTitle,
}

export default MoneySection
