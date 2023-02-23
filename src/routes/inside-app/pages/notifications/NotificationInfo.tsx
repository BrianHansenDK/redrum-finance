import React from 'react'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'
import { mainColors } from '../../themes/colors'

const NotificationInfo = ({notification}: {notification: FirebaseNotification}) => {
  return (
    <FlexboxGridItem colspan={12}>
      <h1 style={styles.title}>{notification.title}</h1>
    </FlexboxGridItem>
  )
}


const styles = {
  title: {
    fontSize: 25,
    color: mainColors.dark,
    lineHeight: 1,
  }
}

export default NotificationInfo
