import { ref, update } from 'firebase/database'
import React from 'react'
import { Button, Message, useToaster } from 'rsuite'
import { FirebaseRequest } from '../../../../../../database/Objects'
import { database } from '../../../../../../firebase'
import { mainColors } from '../../../../../../routes/inside-app/themes/colors'
import { msgInner, pushError, pushSuccess, vanumoColors } from '../../../../../theme/vanumoTheme'

const SaveRequestStateBtn = ({request, state}: {request: FirebaseRequest, state: string}) => {
  const toaster = useToaster()

  const updateRequest = () => {
    const reference = ref(database, 'requests/' + request.id)
    let updates: any = {}
    updates['state'] = state
    updates['seen'] = state === 'new' ? false : true
    if (state !== request.state) {
      update(reference, updates).catch((err) => {
      toaster.push(
        <Message type='error' style={pushError}>
        <p style={msgInner}>{err.message}</p>
      </Message>, {placement: 'bottomCenter'} )
      })
      .finally(() => {
      toaster.push(
        <Message type='info' style={pushSuccess}>
        <p style={msgInner}>Request was updated <br/> Browser will reload</p>
      </Message>, {placement: 'bottomCenter'})
      window.setTimeout(() => {location.reload()},2000)
      })
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
  )
}

export default SaveRequestStateBtn
