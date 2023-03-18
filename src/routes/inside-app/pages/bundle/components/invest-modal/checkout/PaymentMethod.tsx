import { ref, update } from 'firebase/database'
import React from 'react'
import { auth, database, userRef } from '../../../../../../../firebase'
import PaypalComponent from '../../../../../../../paypal/PaypalComponent'

interface IProps {
  investAmount: number,
  en: boolean,
}

const PaymentMethod = (props: IProps) => {
  const {en, investAmount} = props
  const [available, setAvailable] = React.useState<any>(0)
    const [completion, setCompletion] = React.useState<any>(0)
    React.useEffect(() => {
        userRef(auth.currentUser?.uid, '/money_available', setAvailable)
        userRef(auth.currentUser?.uid, '/completion', setCompletion)
    })
    const userId = auth.currentUser?.uid

     // Update user balance when payment is approved
    const updateUserBalance = () => {
      const reference = ref(database, 'users/' + userId)
      const updates:any = {}
      updates['/money_available'] = available !== null ? parseInt(available) + investAmount : investAmount
      updates['/completion'] = available !== null ? completion : completion + 50
      return update(reference, updates)
    }
  return (
    <div className='checkout-card payment'>
      <h1 className="title">
        {en ? 'Payment method' : 'Zahlungsart'}
      </h1>
      <p className="under-title">
        {en ? 'How would you like to pay?' : 'Wie möchtest du bezahlen?'}
      </p>
      <PaypalComponent
      inModal={false}
      amountToPay={investAmount.toString()}
      updateUserBalance={updateUserBalance}
      closeModal={undefined}
      />
    </div>
  )
}

export default PaymentMethod
