import React from 'react'
import { List } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'
import mainShadows from '../../themes/shadows'
import NotificationListItem from './NotificationListItem'

const NotificationsWrap = ({notifications}: {notifications: Array<FirebaseNotification>}) => {
  return (
    <List bordered style={styles.list} hover>
      {notifications.map((notification) => (
        <List.Item key={notification.id}>
          <NotificationListItem notification={notification}/>
        </List.Item>
      ))}
    </List>
  )
}

const styles = {
  list: {
    marginTop: 35,
    borderRadius: 10,
    boxShadow: mainShadows.card,
  }
}

export default NotificationsWrap
