import React from 'react'
import { Button, Modal } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'

interface IProps {
  notification: FirebaseNotification,
  isOpen: boolean,
  closeModal: any,
}

const NotificationModal: React.FunctionComponent<IProps> = (props) => {
  const {notification, isOpen, closeModal} = props
  return (
    <Modal open={isOpen} onClose={() => closeModal}>
      <Modal.Header>
        <Modal.Title>
          {notification.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {notification.content}
      </Modal.Body>
      <Modal.Footer>
        <Button block appearance='primary' onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NotificationModal
