import { ref, update } from 'firebase/database'
import React from 'react'
import { Button, Message, useToaster } from 'rsuite'
import { FirebaseRequest, FirebaseUser } from '../../../../../../database/Objects'
import { database } from '../../../../../../firebase'
import { mainColors } from '../../../../../../routes/inside-app/themes/colors'
import { msgInner, pushError, pushSuccess, vanumoColors } from '../../../../../theme/vanumoTheme'
import NotifyUserModal from './NotifyUserModal'

const SaveRequestStateBtn = ({request, state, user}: {request: FirebaseRequest, state: string, user: FirebaseUser}) => {
  const toaster = useToaster()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const closeModal = () => setIsOpen(false)

  const updateRequest = async () => {
    const reference = ref(database, 'requests/' + request.id)
    let updates: any = {}
    updates['state'] = state
    updates['seen'] = state === 'new' ? false : true
    if (state !== request.state) {
      if (state == 'rejected') {
        setIsOpen(true)
      }
      else {
        update(reference, updates).catch((err) => {
          toaster.push(
            <Message type='error' style={pushError}>
        <p style={msgInner}>{err.message}</p>
      </Message>, {placement: 'bottomCenter'} )
      })
      .finally(() => {
        toaster.push(
          <Message type='info' style={pushSuccess}>
        <p style={msgInner}>Request was updated</p>
      </Message>, {placement: 'bottomCenter'})
      })
      }
  }

  }

  const btnStyle = {
    backgroundColor:
    state == 'new' ? vanumoColors.main :
    state == 'in progress' ? mainColors.blueAccent :
    state == 'complete' ? mainColors.success :
    vanumoColors.red,
    boxShadow: `0 4px 8px 0 ${
    state == 'new' ? vanumoColors.main :
    state == 'in progress' ? mainColors.blueAccent :
    state == 'complete' ? mainColors.success :
    vanumoColors.red}`,
    color: vanumoColors.white,
    opacity: state == request.state ? 0 : 1,
  }
  return (
    <>
    <Button
    className={`${state == request.state ? '' : 'active'} r-dash-save-btn`}
    style={btnStyle} disabled={state == request.state} onClick={updateRequest}>
      {
        state == 'new' ? 'Reset':
        state == 'in progress' ? 'Update' :
        state == 'complete' ? 'complete' :
        'Notify user'
      }
    </Button>
    <NotifyUserModal request={request} isOpen={isOpen} closeModal={closeModal} state={state} user={user} />
    </>
  )
}

export default SaveRequestStateBtn
