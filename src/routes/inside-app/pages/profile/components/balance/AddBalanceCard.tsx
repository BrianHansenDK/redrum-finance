import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'rsuite'
import { userRef } from '../../../../../../firebase'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import MainBtn from '../../../../components/MainBtn'
import RequestWithdrawModal from '../../../../components/money/request/RequestWithdrawModal'
import WithdrawMoneyModal from '../../../../components/money/WithdrawMoneyModal'
import { mainCard } from '../../../../themes/cardStyles'
import { profileCardTitle } from '../../../../themes/textStyles'
import TransferMoneyModal from '../../../bundle/components/TransferMoneyModal'
import BankData from './BankData'

const AddBalanceCard = ({userId, en}: {userId: any, en: boolean}) => {
  const [currentAvailable, setCurrentAvailable] = useState(0)
  const [isVisible, setVisible] = useState(false)
  const [wVisible, setWVisible] = useState(false)
  const [rVisible, setRVisible] = useState(false)
  useEffect(() => {
    userRef(userId, '/money_available', setCurrentAvailable)
  }, [userId])

  const openModal = () => {
    setVisible(true)
  }
  const closeModal = () => {
    setVisible(false)
  }
  const openWModal = () => {
    setWVisible(true)
  }
  const closeWModal = () => {
    setWVisible(false)
  }
  const openRModal = () => {
    setRVisible(true)
  }
  const closeRModal = () => {
    setRVisible(false)
  }
  return (
    <div className='mt-4 profile-card'>
      <h1 className="title">
        Bank Data
      </h1>
      <div className="balance-con">
        <h2 className='balance-title'>Account balance: {numberWithCommas(currentAvailable)}€</h2>
        <BankData userId={userId} en={en}/>
        <div className='btn-wrap'>
          <Button appearance='primary'
          onClick={openModal}
          className='r-btn r-main-btn'>
            Deposit
          </Button>
          <Button appearance='primary'
          onClick={openWModal}
          className='r-btn r-secondary-btn'>
            Withdraw
          </Button>
        </div>
      </div>
      <TransferMoneyModal navPressed={false} close={closeModal} visible={isVisible} />
      <WithdrawMoneyModal
      userId={userId}
      visible={wVisible}
      closeModal={closeWModal}
      openRModal={openRModal}
      />
      <RequestWithdrawModal isOpen={rVisible} closeModal={closeRModal} />
    </div>
  )
}

export default AddBalanceCard
