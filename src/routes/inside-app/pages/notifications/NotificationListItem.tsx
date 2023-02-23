import React from 'react'
import { FlexboxGrid } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'
import { mainColors } from '../../themes/colors'
import NotificationImage from './NotificationImage'
import NotificationInfo from './NotificationInfo'
import NotificationListItemBtns from './NotificationListItemBtns'

const NotificationListItem = ({notification}: {notification: FirebaseNotification}) => {
  return (
    <FlexboxGrid align='middle' justify='space-between' className='notification-item'>
      <NotificationImage/>
      <NotificationInfo notification={notification}/>
      <NotificationListItemBtns notification={notification} />
    </FlexboxGrid>
  )
}


export default NotificationListItem
