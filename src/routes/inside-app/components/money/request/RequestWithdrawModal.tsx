import React, { FunctionComponent } from 'react'
import { Button, Modal } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { mainColors } from '../../../themes/colors'
import mainShadows from '../../../themes/shadows'
import { mainP } from '../../../themes/textStyles'

interface IProps {isOpen: boolean, closeModal: any}
const RequestWithdrawModal: FunctionComponent<IProps> = (props) => {
  const {isOpen, closeModal} = props
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <ModalHeader>
        <ModalTitle>
          Request recieved
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h3 style={styles.title} className='text-center'>
          We have recieved your request
        </h3>
        <p style={mainP} className='text-center'>
          We hereby confirm that your request has been recieved.
          You will recieve the amount in the next 5 week days.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
        appearance='primary'
        block
        size='lg'
        style={styles.btn}
        onClick={closeModal}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

const styles = {
  title: {
    color: mainColors.dark
  },
  btn: {
    boxShadow: mainShadows.btn
  }
}

export default RequestWithdrawModal
