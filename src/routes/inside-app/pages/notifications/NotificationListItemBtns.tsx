import React from 'react'
import { Button, Divider } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'
import NotificationModal from './NotificationModal'

const NotificationListItemBtns = ({notification}: {notification: FirebaseNotification}) => {
  const [isOpen, setisOpen] = React.useState<boolean>(false)
  const openModal = () => {
    setisOpen(true)
  }
  const closeModal = () => {
    setisOpen(false)
  }
  return (
    <>
    <FlexboxGridItem>
      <Button appearance='link' onClick={openModal}>View</Button>
      <Divider vertical/>
      <Button appearance='link'>Delete</Button>
    </FlexboxGridItem>
    <NotificationModal notification={notification} isOpen={isOpen} closeModal={closeModal}/>
    </>
  )
}

export default NotificationListItemBtns
