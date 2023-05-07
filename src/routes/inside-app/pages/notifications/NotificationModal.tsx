import React from 'react'
import { Button, Modal } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'

interface IProps {
  en: boolean,
  notification: FirebaseNotification,
  isOpen: boolean,
  closeModal: any,
}

const NotificationModal: React.FunctionComponent<IProps> = (props) => {
  const {en, notification, isOpen, closeModal} = props
  return (
    <Modal open={isOpen} onClose={() => closeModal}>
      <Modal.Header>
        <Modal.Title>
          {en ? notification.title_en : notification.title_de}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          en ? notification.content_en.map((txt) => (
            <p key={txt}>
              {txt}
            </p>
          )) : notification.content_de.map((txt) => (
            <p key={txt}>
              {txt}
            </p>))
        }
      </Modal.Body>
      <Modal.Footer>
        <Button block appearance='primary' onClick={closeModal}>
          {en ? 'Close' : 'schließen'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NotificationModal
