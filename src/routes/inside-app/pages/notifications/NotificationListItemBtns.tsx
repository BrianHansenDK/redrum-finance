import React from 'react'
import { Button, Divider } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'

const NotificationListItemBtns = ({notification}: {notification: FirebaseNotification}) => {
  return (
    <FlexboxGridItem>
      <Button appearance='link'>View</Button>
      <Divider vertical/>
      <Button appearance='link'>Delete</Button>
    </FlexboxGridItem>
  )
}

export default NotificationListItemBtns
