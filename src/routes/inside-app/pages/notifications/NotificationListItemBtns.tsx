import React from 'react'
import { Button, Divider } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'
import NotificationModal from './NotificationModal'
import { markNotificationAsRead } from '../../../../firebase'

interface IProps {
  en: boolean,
  notification: FirebaseNotification
}

const NotificationListItemBtns = (props: IProps) => {
  const {en, notification} = props;
  const [isOpen, setisOpen] = React.useState<boolean>(false)
  const openModal = () => {
    setisOpen(true)
    markNotificationAsRead(notification)
  }
  const closeModal = () => {
    setisOpen(false)
  }
  return (
    <>
    <FlexboxGridItem>
      <Button appearance='link' onClick={openModal}>{en ? 'View' : 'Anzeige'}</Button>
      <Divider vertical/>
      <Button appearance='link'>{en ? 'Delete' : 'Löschen'}</Button>
    </FlexboxGridItem>
    <NotificationModal en={en} notification={notification} isOpen={isOpen} closeModal={closeModal}/>
    </>
  )
}

export default NotificationListItemBtns
