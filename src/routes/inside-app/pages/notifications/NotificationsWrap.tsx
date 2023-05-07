import React from 'react'
import { List } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'
import mainShadows from '../../themes/shadows'
import NotificationListItem from './NotificationListItem'

interface IProps {
  en: boolean,
  notifications: FirebaseNotification[]
}
const NotificationsWrap = (props: IProps) => {
  const {en, notifications} = props;
  return (
    <List bordered style={styles.list} hover>
      {notifications.reverse().map((notification) => (
        <List.Item key={notification.id}>
          <NotificationListItem en={en} notification={notification}/>
        </List.Item>
      ))}
    </List>
  )
}

const styles = {
  list: {
    width: '100%',
    marginTop: 35,
    borderRadius: 10,
    boxShadow: mainShadows.card,
  }
}

export default NotificationsWrap
