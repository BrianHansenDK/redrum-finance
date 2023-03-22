import { onValue, ref, update } from 'firebase/database'
import React from 'react'
import { Radio, RadioGroup } from 'rsuite'
import FormGroup from 'rsuite/esm/FormGroup'
import { auth, database, userRef } from '../../../../../../../firebase'
import PaypalIcon from '../../../../../../../assets/svgs/PaypalCard'
import RedrumDeposits from '@rsuite/icons/legacy/GithubAlt'
import Exchange from '@rsuite/icons/legacy/Exchange'
import {Icon} from '@rsuite/icons'
import PaypalComponent from '../../../../../../../paypal/PaypalComponent'
import { FirebaseUser } from '../../../../../../../database/Objects'
import RedrumProLoader from '../../../../../components/RedrumProLoader'

interface IProps {
  investAmount: number,
  en: boolean,
  makeItPaypal: Function,
  makeItDeposit: Function,
}

const PaymentMethod = (props: IProps) => {
  const {en, investAmount, makeItPaypal, makeItDeposit} = props
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser>()
  const [currentMethod, setCurrentMethod] = React.useState<string | undefined>('')
  const [available, setAvailable] = React.useState<any>(0)
  const [completion, setCompletion] = React.useState<any>(0)
  const [loading, setLoading] = React.useState<boolean>(false)
    React.useEffect(() => {
      setLoading(true)
        onValue(ref(database, 'users/' + auth.currentUser?.uid), (snap) => {
          setCurrentUser(snap.val())
          setAvailable(snap.val().money_available)
          setCompletion(snap.val().completion)
          setCurrentMethod(snap.val().payment_method)
        })
        if (currentMethod === 'Redrum_Pro_deposit') {
          makeItDeposit()
        } else {
          makeItPaypal()
        }
        setLoading(false)
    }, [])
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
      {
        loading ? (
          <RedrumProLoader/>
        ) : (
          <div className="radio-btns-con">
        <FormGroup controlId="payment_method" >
          <RadioGroup name='payment_method'
          value={currentMethod !== null && currentMethod !== undefined ? currentMethod : 'Redrum_Pro_deposit'}
          onChange={(val:any, e:any) => {
            setCurrentMethod(val)
            if (val === 'PayPal') {
              makeItPaypal()
            } else {
              makeItDeposit()
            }
          }}>
            <div className="radio-btn-con">
              <Radio value={'PayPal'}>
                <div className="radio-inner">
                  <p className='option-brand'>PayPal</p> <Icon as={PaypalIcon} className='icon'/>
                </div>
              </Radio>
            </div>
            <div className="radio-btn-con">
              <Radio value={'Redrum_Pro_deposit'} >
                <div className="radio-inner">
                  <p className='option-brand'>Redrum Pro deposit</p> <Icon as={RedrumDeposits} className='icon dark'/>
                </div>
              </Radio>
            </div>
          </RadioGroup>
        </FormGroup>
      </div>
        )
      }

    </div>
  )
}

export default PaymentMethod
