import { onValue, ref } from 'firebase/database'
import React from 'react'
import { Button, Divider } from 'rsuite'
import { FirebaseUser } from '../../../../../../database/Objects'
import { database } from '../../../../../../firebase'
import PaypalIcon from '../../../../../../assets/svgs/PaypalCard'
import RedrumDeposits from '@rsuite/icons/legacy/GithubAlt'
import {Icon} from '@rsuite/icons'
import PaymentMethodModal from './PaymentMethodModal'

interface IProps {
  userId: string,
  en: boolean,
}

const BankData = (props: IProps) => {
  const {userId, en} = props
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser>()
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  function openModal() {setModalOpen(true)}
  function closeModal() {setModalOpen(false)}

  // Check if Payment method is PayPal. If not defined yet, be Paypal by default
  const isPaypal =
    currentUser?.payment_method == undefined ||
    currentUser?.payment_method == 'PayPal' ||
    currentUser?.payment_method == null
  React.useEffect(() => {
    const reference = ref(database, 'users/' + userId)
    onValue(reference, (snap) => setCurrentUser(snap.val()))
  }, [userId])
  return (
    <>
      <div className='payment-method'>
        <h3 className="payment-method-title">
          Payment method
        </h3>
        <div className="payment-method-box">
          <Icon
          as={isPaypal ? PaypalIcon : RedrumDeposits}
          className={`icon ${isPaypal ? '' : 'dark'}`}
          />
          <h4 className="payment-method-name">
            {isPaypal ? 'PayPal' : 'Redrum Pro Deposit'}
          </h4>
          <Button
          appearance='link'
          className='payment-method-btn'
          onClick={() => openModal()}
          >
            Edit
          </Button>
        </div>
      </div>
      <PaymentMethodModal
      isPayPal={isPaypal}
      currentUser={currentUser!}
      isOpen={modalOpen}
      closeModal={closeModal}
      en={en}
      />
    </>
  )
}

export default BankData
