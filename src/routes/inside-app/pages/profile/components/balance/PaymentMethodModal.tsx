import React from 'react'
import { Button, Modal, Radio, RadioGroup } from 'rsuite'
import FormGroup from 'rsuite/esm/FormGroup'
import { FirebaseUser } from '../../../../../../database/Objects'
import PaypalIcon from '../../../../../../assets/svgs/PaypalCard'
import RedrumDeposits from '@rsuite/icons/legacy/GithubAlt'
import {Icon} from '@rsuite/icons'

interface IProps {
  currentUser: FirebaseUser,
  closeModal: Function,
  isOpen: boolean,
  isPayPal: boolean,
  en: boolean
}

const PaymentMethodModal = (props: IProps) => {
  const {currentUser, isOpen, isPayPal, closeModal, en} = props
  const [currentMethod, setCurrentMethod] = React.useState(isPayPal ? 'PayPal' : 'Redrum_Pro_deposit')
  return (
    <Modal className='payment-method-modal' size='lg' onClose={() => closeModal()} open={isOpen}>
      <Modal.Header className='modal-header'>
        <Modal.Title className='modal-title'>
          {en ? 'Payment method' : 'Zahlungsmetode'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <h1 className="content-title">
          {en ?
          'Choose preferable payment method when investing' :
          'Wählen Sie bei der Investition die bevorzugte Zahlungsmethode'}
        </h1>
        {currentMethod}
        <div className="radio-btns-con">
          <FormGroup controlId="payment_methods">
            <RadioGroup name='payment_methods' onChange={(val:any, e:any) => {
              setCurrentMethod(val)
            }}>
              <div className="radio-btn-con">
                <Radio value={'PayPal'} >
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
      </Modal.Body>
      <Modal.Footer className='modal-footer'>
        <Button className='r-btn r-main-btn' appearance='primary'>
          {en ? 'Save' : 'Speichern'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PaymentMethodModal
