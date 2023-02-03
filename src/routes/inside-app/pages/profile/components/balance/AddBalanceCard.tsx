import React, { useEffect, useState } from 'react'
import { userRef } from '../../../../../../firebase'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import MainBtn from '../../../../components/MainBtn'
import { mainCard } from '../../../../themes/cardStyles'
import { profileCardTitle } from '../../../../themes/textStyles'
import TransferMoneyModal from '../../../bundle/components/TransferMoneyModal'

const AddBalanceCard = ({userId}: {userId: any}) => {
  const [currentAvailable, setCurrentAvailable] = useState(0)
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    userRef(userId, '/money_available', setCurrentAvailable)
  }, [userId])

  const openModal = () => {
    setVisible(true)
  }
  const closeModal = () => {
    setVisible(false)
  }
  return (
    <div style={mainCard} className='mt-4 d-flex flex-column align-items-center'>
      <h1 style={profileCardTitle}>Account balance: {numberWithCommas(currentAvailable)}€</h1>
      <div style={{width: 300, marginTop: 35,}}>
      <MainBtn
      content={'Add to balance'}
      pressed={openModal}
      btnColor={'blue'}
      btnAppearance={'primary'}
      btnSize={'lg'}
      isBlock/>
      </div>
      <TransferMoneyModal close={closeModal} visible={isVisible} />
    </div>
  )
}

export default AddBalanceCard
