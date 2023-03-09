import React from 'react'
import { IconButton, Modal } from 'rsuite'
import ExitIcon from '@rsuite/icons/legacy/Close'
import BackIcon from '@rsuite/icons/ArrowLeftLine'

interface IProps {
  withMail: boolean,
  goBack: any,
  closeModal: any,
}

const AuthModalHeader: React.FunctionComponent<IProps> = (props) => {
  const {withMail, goBack, closeModal} = props
  return (
    <Modal.Header className='auth-modal-header'>
      <div className='modal-header-inner'>
        <IconButton circle appearance='primary' icon={<ExitIcon/>} onClick={closeModal} className='exit'/>
        {withMail ? <IconButton circle appearance='primary' icon={<BackIcon/>} onClick={goBack} className='back'/> : null}
      </div>
    </Modal.Header>
  )
}

export default AuthModalHeader
