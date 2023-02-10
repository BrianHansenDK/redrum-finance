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

const AddBalanceCard = ({userId}: {userId: any}) => {
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
    <div style={mainCard} className='mt-4 d-flex flex-column align-items-center'>
      <h1 style={profileCardTitle}>Account balance: {numberWithCommas(currentAvailable)}€</h1>
      <div style={{width: 300, marginTop: 35,}}>
      <ButtonGroup style={styles.btnWrap}>
        <Button appearance='primary' onClick={openModal} size='lg' style={styles.btn}>
          Deposit
        </Button>
        <Button appearance='ghost' onClick={openWModal} size='lg' style={styles.btn}>
          Withdraw
        </Button>
      </ButtonGroup>
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

const styles = {
  btnWrap: {
    width: '100%',
    borderRadius: 7.5,
    boxShadow: '0 3px 6px 0 rgba(0,0,29, .15)',
  },
  btn: {width: '50%'},
}

export default AddBalanceCard
