import React from 'react'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseNotification } from '../../../../database/Objects'
import { mainColors } from '../../themes/colors'

interface IProps {
  en: boolean,
  notification: FirebaseNotification
}

const NotificationInfo = (props: IProps) => {
  const {en, notification} = props;
  return (
    <FlexboxGridItem colspan={12}>
      <h1 style={styles.title}>{en ? notification.title_en : notification.title_de}</h1>
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
