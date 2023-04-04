import React from 'react'
import { FirebaseUser } from '../../../../../../../database/Objects'
import { Button, IconButton, Input, InputGroup, Message, Modal, useToaster } from 'rsuite'
import './changepassword.scss'
import { auth } from '../../../../../../../firebase'
import { updatePassword } from 'firebase/auth'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

interface IProps {
  en: boolean,
  open: boolean, close: any,
  user: FirebaseUser,
}
const ChangePasswordModal = (props: IProps) => {
  const {en, open, close, user} = props
  const toaster = useToaster()
  const [newPassword, setNewPassword] = React.useState('')
  const [hidden, setHidden] = React.useState(true)
  const changeVisibility = () => setHidden(!hidden)

  const changePw = () => {
    updatePassword(auth.currentUser!, newPassword).then(() => {
      toaster.push(<Message showIcon type='success'>
        {en ? 'Your password was updated succesfully' : 'Ihr Passwort wurde erfolgreich aktualisiert'}
      </Message>, {placement: 'topCenter'}); window.setTimeout(() => toaster.clear(), 10000)
    }).catch((err) => {
      toaster.push(<Message showIcon type='error'>
        {err.message}
      </Message>, {placement: 'topCenter'}); window.setTimeout(() => toaster.clear(), 10000)
    }).finally(() => {
      close()
    })
  }
  return (
    <Modal open={open} onClose={close} size='lg' className='cp-modal'>
      <Modal.Header>
        <Modal.Title className='change-pw-title'>{en ? 'Change password' : 'Passwort beendern'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cp-modal-body'>
        <div className="form-element">
          <label className="label">{en ? 'New password' : 'Neues Passwort'}</label>
          <InputGroup>
          <Input type={hidden ? 'password' : 'text'} className='input' placeholder={en ? 'Password...' : 'Passwort...'}
          onChange={setNewPassword}/>
          <IconButton icon={hidden ? (<EyeSlashIcon/>) : (<EyeIcon/>)} onClick={changeVisibility}/>
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer className='cp-modal-footer'>
        <Button appearance='primary' className='r-btn r-main-btn' onClick={changePw}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangePasswordModal
