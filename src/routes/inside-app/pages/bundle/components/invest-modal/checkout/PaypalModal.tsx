import React from 'react'
import { Button, Modal } from 'rsuite';
import PaypalComponent from '../../../../../../../paypal/PaypalComponent';
interface IProps {
  investAmount: number,
  investInBundle: any,
  makeOrder: any,
  approve: any,
  close: any,
  isOpen: boolean,
  en: boolean,
}

const PaypalModal = (props: IProps) => {
  const {investAmount, investInBundle, isOpen,
    makeOrder, approve, close, en} = props;
  return (
    <Modal open={isOpen} onClose={close} className='paypal-modal'>
      <Modal.Header>
        <Modal.Title className='text-center'>
          {en ? 'Please choose a PayPal payment method' : 'Wählen Sie bitte die PayPal-Methode'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-2 pb-2'>
        <PaypalComponent
        amountToPay={investAmount}
        updateUserBalance={investInBundle}
        fromOutside
        makeOrderFromOutside={makeOrder}
        approveFromOutside={approve}
        closeModal={undefined}
        inModal={false}
        />
      </Modal.Body>
      <Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
        <Button appearance='primary' className='r-btn r-main-btn' style={{width: 200}} onClick={close}>
          {en ? 'Cancel' : 'Zurück'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PaypalModal
