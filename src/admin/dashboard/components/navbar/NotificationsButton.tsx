import React, { useEffect } from 'react'
import { Badge, IconButton } from 'rsuite'
import RequestsIcon from '@rsuite/icons/Notice'
import { mainColors } from '../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../theme/vanumoTheme'
import { FirebaseRequest } from '../../../../database/Objects'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../firebase'
import { Link } from 'react-router-dom'

const NotificationsButton = () => {
  const [unread, setUnread] = React.useState<Array<FirebaseRequest>>([])
  useEffect(() => {
    const reference = ref(database, 'requests/')
    let data: any[] = []
    onValue(reference, (snap) => {
      snap.forEach((request) => {
        if (request.val().seen === false) {
          data.push(request.val())
        }
      })
    })
    setUnread(data)
  }, [])
  return (
    <>
    {
      unread.length == 0 ? (
        <IconButton as={Link} to='/vanumo/requests' style={styles.loneBtn} icon={<RequestsIcon />} />
      ) : (
        <Badge color='cyan' content={`${unread.length}`} style={{marginRight: 20}}>
          <IconButton as={Link} to='/vanumo/requests' style={styles.badgeBtn} icon={<RequestsIcon />} />
        </Badge>
      )
    }
    </>
  )
}
const styles = {
  loneBtn: {
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    fontWeight: '700',
    marginRight: 20,
  },
  badgeBtn: {
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    fontWeight: '700',
  }
}
export default NotificationsButton
