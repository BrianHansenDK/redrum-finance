import React from 'react'
import { Button, Divider, Message, useToaster } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'
import NotificationModal from './NotificationModal'
import { deleteNotification, markNotificationAsRead } from '../../../../firebase'

interface IProps {
  en: boolean,
  notification: FirebaseNotification
}

const NotificationListItemBtns = (props: IProps) => {
  const {en, notification} = props;
  const [isOpen, setisOpen] = React.useState<boolean>(false)
  const toaster = useToaster()
  const openModal = () => {
    setisOpen(true)
    markNotificationAsRead(notification)
  }
  const closeModal = () => {
    setisOpen(false)
  }
  const deleteIt = () => {
    const areYouSure = window.prompt(
      en ? 'Are you sure you want to delete the notification? Once deleted, it cannot be recovered. \nIf yes write "DELETE".' :
    'Sind Sie sicher, dass Sie die Benachrichtigung löschen möchten? Sobald gelöscht, kann sie nicht wiederhergestellt werden. \nWenn ja, schreiben Sie bitte "DELETE".')
    if (areYouSure === "DELETE") {
      deleteNotification(notification.id, () => {
        toaster.push(<Message type='warning' closable duration={10000} title={en ? 'Notification deleted' : 'Benachrichtigung gelöscht'}>
          {en ? `
          You have deleted a notification, once deleted you will not be able to recover the notification again.
          However important documents, such as invoices and agreements are available in the producer database.
          `:
          `
          Sie haben eine Benachrichtigung gelöscht. Sobald gelöscht, können Sie die Benachrichtigung nicht wiederherstellen.
          Wichtige Dokumente wie Rechnungen und Vereinbarungen sind jedoch in der Datenbank des Herstellers verfügbar.
          `}
        </Message>)
      })
    }
  }
  return (
    <>
    <FlexboxGridItem>
      <Button appearance='link' onClick={openModal}>{en ? 'View' : 'Anzeige'}</Button>
      <Divider vertical/>
      <Button appearance='link' onClick={deleteIt}>{en ? 'Delete' : 'Löschen'}</Button>
    </FlexboxGridItem>
    <NotificationModal en={en} notification={notification} isOpen={isOpen} closeModal={closeModal}/>
    </>
  )
}

export default NotificationListItemBtns
