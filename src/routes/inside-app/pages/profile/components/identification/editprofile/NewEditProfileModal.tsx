import React from 'react'
import { Modal } from 'rsuite'
import { FirebaseUser } from '../../../../../../../database/Objects'
import { getCurrentUserFunction, getCurrentUserOnValue } from '../../../../../../../firebase'
import RedrumProLoader from '../../../../../components/RedrumProLoader'
import './edit-modal.scss'
import ProfileForm from './ProfileForm'

interface IProps {
  userId: any,
  close: any,
  visible: boolean,
  en: boolean,
}

const NewEditProfileModal = (props: IProps) => {
  const {userId, close, visible, en} = props;
  const [currentUser, setCurrentUser] = React.useState<FirebaseUser | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [extraModalOpen, setExtraModalOpen] = React.useState<boolean>(false);
  const [changed, setChanged] = React.useState<boolean>(false);
  function exitEditing() {
    if (changed) {
      setExtraModalOpen(true);
    } else {
      close();
    }
  }
  const closeEModal = () => setExtraModalOpen(false);
  React.useEffect(() => {
    getCurrentUserOnValue(userId, setCurrentUser)
    // getCurrentUserFunction(userId, setCurrentUser, setLoading)
  }, [userId])
  return (
    <Modal open={visible} onClose={() => exitEditing()} size='full' className='edit-account-modal'>
      <Modal.Header className='modal-header'>
        <Modal.Title className='modal-title'>
          {en ? 'Edit profile' : 'Profil Bearbeiten'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        {loading ? (<RedrumProLoader/>) : currentUser === null ? (<RedrumProLoader/>) : (
          <ProfileForm user={currentUser} en={en} close={close} setChanged={setChanged}
          eModalOpen={extraModalOpen} closeEModal={closeEModal}/>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default NewEditProfileModal
