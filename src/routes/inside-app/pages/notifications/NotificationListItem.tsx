import React from 'react'
import { FlexboxGrid } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'
import { mainColors } from '../../themes/colors'
import NotificationImage from './NotificationImage'
import NotificationInfo from './NotificationInfo'
import NotificationListItemBtns from './NotificationListItemBtns'

interface IProps {
  en: boolean,
  notification: FirebaseNotification
}

const NotificationListItem = (props: IProps) => {
  const {en, notification} = props;
  return (
    <FlexboxGrid align='middle' justify='space-between' className='notification-item'>
      <NotificationImage/>
      <NotificationInfo en={en} notification={notification}/>
      <NotificationListItemBtns en={en} notification={notification} />
    </FlexboxGrid>
  )
}


export default NotificationListItem
