import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'rsuite'
import { auth, userRef } from '../../../../../firebase'

interface IProps {
  isVisible: any,
  close: any,
}

const RecieptModal: React.FunctionComponent<IProps> = (props) => {
  const {isVisible, close} = props
  return (
    <Modal open={isVisible} onClose={close}>
      <Modal.Header>
        <Modal.Title>
          Thank you for your purchase
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Reciept for purchase</h1>
        <p>
          This Reciept works as proof of your investment.
          You have recieved a more detailed reciept in your profile. <br/>
          you can find your reciept under <span className='bold'>"Databank"</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button block color='red' appearance='primary' onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RecieptModal
