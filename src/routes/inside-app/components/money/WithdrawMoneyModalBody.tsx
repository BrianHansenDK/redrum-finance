import React, { FunctionComponent, useState } from 'react'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { mainP } from '../../themes/textStyles'
import WithdrawMoneyBtn from './WithdrawMoneyBtn'
import WithdrawMoneyInput from './WithdrawMoneyInput'
import WithdrawPhoto from '../../../../assets/withdraw_img.svg'

interface IProps {user: any, closeModal: any, openRModal: any}
const WithdrawMoneyModalBody: FunctionComponent<IProps> = (props) => {
  const {user, closeModal, openRModal} = props
  const [amount, setAmount] = useState<any>(0)
  return (
    <>
    <ModalHeader>
      <ModalTitle>Withdraw</ModalTitle>
    </ModalHeader>
    <ModalBody style={styles.wrap} className='flex-column'>
      <img src={WithdrawPhoto} alt="Withdraw money" style={styles.image} />
      <p style={mainP} className='text-center'>
        Send us a request for the amount of money you wish to withdraw from your account.
        If you have the wished amount available in your account, we will be sure to send you the amount as soon as possible.
      </p>
      <p style={styles.smallP} className='mb-2'>
      Please note that the requested amount will no longer be available in your balance.
      </p>
      <WithdrawMoneyInput setAmount={setAmount} />
    </ModalBody>
    <ModalFooter>
      <WithdrawMoneyBtn
      user={user}
      closeModal={closeModal}
      available={user.money_available ? user.money_available : 0}
      wished={amount}
      openRModal={openRModal}
      />
    </ModalFooter>
    </>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: '2rem',
  },
  smallP: {
    marginTop: 10,
  }
}

export default WithdrawMoneyModalBody
