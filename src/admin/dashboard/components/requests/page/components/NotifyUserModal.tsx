import { ref, update } from 'firebase/database'
import React, { useEffect } from 'react'
import { Button, ButtonToolbar, Input, Message, Modal, useToaster } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import { FirebaseRequest, FirebaseUser } from '../../../../../../database/Objects'
import { database, notifyUser, userRef } from '../../../../../../firebase'
import {msgInner, pushError, pushSuccess, vanumoMainBtn, vanumoSecondaryBtn} from '../../../../../theme/vanumoTheme'
interface IProps {
  request: FirebaseRequest,
  isOpen: boolean,
  closeModal: any,
  state: string,
  user: FirebaseUser
}
const NotifyUserModal: React.FunctionComponent<IProps> = (props) => {
  const {request, isOpen, closeModal, state, user} = props
  const toaster = useToaster()

  const [message, SetMessage] = React.useState<string>('')
  const created = new Date()



  const cancelUpdate = () => {
    SetMessage('')
    closeModal()
  }
  const updateRequest = () => {
    if (message !== '') {
      notifyUser(
        created.getTime(),
        created.toLocaleDateString(),
        `Request ${request.id} rejected.`,
        `Dear ${user.username}, \n We have rejected your request due to the following: \n ${message}`,
        request.creator)

      const updates: any = {}
      updates['state'] = state
      updates['seen'] = true
      const reference = ref(database, 'requests/' + request.id)

      update(reference, updates).catch((err) => {
        toaster.push(
          <Message type='error' style={pushError}>
            <p style={msgInner}>{err.message}</p>
          </Message>, {placement: 'bottomCenter'} )
      }) .finally(() => {
        toaster.push(
          <Message type='info' style={pushSuccess}>
            <p style={msgInner}>Request was updated </p>
          </Message>, {placement: 'bottomCenter'})
      })
    }
  }
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Modal.Header>
        <Modal.Title>
          Notify user of rejected request
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <label>Message</label>
        <Input as='textarea' rows={4} placeholder='Write message to user' onChange={SetMessage}/>
        <p className='mt-2'>Message:</p>
        <p>Title: Your request (id: {request.id}) was rejected.</p>
        <p>Dear {user.username},</p>
        <p>We have rejected your request due to the following:</p>
        <p>{message}</p>
      </ModalBody>
      <Modal.Footer>
        <div className='r-dash-btns-wrap'>
          <Button style={styles.mainBtn}  appearance='primary' onClick={updateRequest}>
            Send
          </Button>
          <Button style={styles.secondaryBtn} appearance='primary' onClick={cancelUpdate}>
            Cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

const styles = {
  mainBtn: {
    backgroundColor: vanumoMainBtn.backgroundColor,
    color: vanumoMainBtn.color,
    fontWeight: vanumoMainBtn.fontWeight,
    boxShadow: vanumoMainBtn.boxShadow,
    width: 'calc(50% - 12.5px)',
  },
  secondaryBtn: {
    backgroundColor: vanumoSecondaryBtn.backgroundColor,
    color: vanumoSecondaryBtn.color,
    fontWeight: vanumoSecondaryBtn.fontWeight,
    boxShadow: vanumoSecondaryBtn.boxShadow,
    width: 'calc(50% - 12.5px)',
  }
}

export default NotifyUserModal
