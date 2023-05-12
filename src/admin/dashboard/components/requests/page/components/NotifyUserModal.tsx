import { ref, update } from 'firebase/database'
import React, { useEffect } from 'react'
import { Button, ButtonToolbar, Input, Message, Modal, Notification, useToaster } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import { FirebaseRequest, FirebaseUser } from '../../../../../../database/Objects'
import { database, notifyUser, userRef } from '../../../../../../firebase'
import {msgInner, pushError, pushSuccess, vanumoColors, vanumoMainBtn, vanumoSecondaryBtn} from '../../../../../theme/vanumoTheme'
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
  const [messageDE, setMessageDE] = React.useState<string>('')



  const cancelUpdate = () => {
    SetMessage('')
    closeModal()
  }
  const updateRequest = () => {
    if (message !== '' && messageDE !== '') {
      notifyUser(
        request.creator,
        `Request ${request.id} rejected.`,
        `Anfrage ${request.id} abgelehnt.`,
        [`Dear ${user.username}`,
        'We regret to inform you that we have rejected your request due to the following reason:',
        message
        ],
        [`Liebe(r) ${user.username}`,
        'wir müssen Ihnen leider mitteilen, dass wir Ihren Antrag aufgrund des folgenden Grundes abgelehnt haben:',
        message
        ]
        )

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
        close();
        toaster.push(
          <Notification duration={12000} closable title='Request was updated' type='info' >
            <div className='d-flex flex-column align-items-center'>
            <p> You successfully updated the request and a notification was sent to the user. </p>
            <p>Be sure to <Button appearance='link' onClick={() => location.reload()}>REFRESH</Button>
              your browser, to see the changes.
            </p>
            <Button className='mt-2' appearance='primary' size='lg' block onClick={() => location.reload()} style={{
              backgroundColor: vanumoColors.main,
              color: vanumoColors.white,
              fontWeight: '700',
              boxShadow: '0 3px 6px 0 #a274ff3d',
            }}>
              Refresh
            </Button>
            </div>
          </Notification>, {placement: 'topCenter'})
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
        <div className="mb-3">
          <label style={styles.label}>English Message</label>
          <Input as='textarea' rows={4} placeholder='Write message to user' onChange={SetMessage}/>
          <p className='mt-2'>Message:</p>
          <p>Title: Your request (id: {request.id}) was rejected.</p>
          <p>Dear {user.username},</p>
          <p>We have rejected your request due to the following:</p>
          <p>{message}</p>
        </div>
        <div className="mb-3">
          <label style={styles.label}>German Message</label>
          <Input as='textarea' rows={4} placeholder='Write message to user' onChange={setMessageDE}/>
          <p className='mt-2'>German:</p>
          <p>Title: Anfrage (id: {request.id}) abgelehnt.</p>
          <p>Liebe(r) {user.username},</p>
          <p>wir müssen Ihnen leider mitteilen, dass wir Ihren Antrag aufgrund des folgenden Grundes abgelehnt haben:</p>
          <p>{messageDE}</p>
        </div>
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
  label: {
    color: vanumoColors.main
  },
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
