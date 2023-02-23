import React from 'react'
import { FirebaseNotification } from '../../../../database/Objects'
import TextTheme from '../../../../library/themes/TextTheme'
import NoNotificationsItem from './NoNotificationsItem'
import NotificationsWrap from './NotificationsWrap'

const NotificationsPage = () => {
  const testNotifications: Array<FirebaseNotification> = [
    {
      id: 0,
      created_at: 1,
      read: false,
      user_id: 'me',
      title: 'Test notification',
      content: 'This is just a test notification',
    },
    {
      id: 1,
      created_at: 2,
      read: false,
      user_id: 'me',
      title: 'Test notification 2',
      content: 'This is just another test notification',
    },
  ]
const [notifications, setNotifications] = React.useState<Array<FirebaseNotification>>(testNotifications)
  return (
    <>
    <h1 style={TextTheme.mainTitle}>Notifications</h1>
    {
      notifications.length == 1 ? (
        <NoNotificationsItem />
      ) : (
        <NotificationsWrap notifications={notifications}/>
      )
    }
    </>
  )
}

export default NotificationsPage
