import { onValue, ref } from 'firebase/database'
import React, { useEffect } from 'react'
import { Loader } from 'rsuite'
import { FirebaseNotification } from '../../../../database/Objects'
import { auth, database } from '../../../../firebase'
import TextTheme from '../../../../library/themes/TextTheme'
import RedrumProLoader from '../../components/RedrumProLoader'
import NoNotificationsItem from './NoNotificationsItem'
import NotificationsWrap from './NotificationsWrap'

interface IProps {en: boolean}

const NotificationsPage = (props: IProps) => {
  const {en} = props;
  const [loading, setLoading] = React.useState<boolean>(false)
  const [notifications, setNotifications] = React.useState<Array<FirebaseNotification>>([])
  useEffect(() => {
    setLoading(true)
    const data: Array<FirebaseNotification> = []
    const reference = ref(database, 'notifications')
    onValue(reference, (snap) => {
      snap.forEach((notification) => {
        if (notification.val().user_id == auth.currentUser?.uid.toString()) {
          data.push(notification.val())
        }
      })
    })
    setNotifications(data)
    window.setTimeout(() => {setLoading(false)},1500)
  }, [auth])
  return (
    <>
    <h1 style={TextTheme.mainTitle}>Notifications</h1>
    {loading ? (
      <div style={styles.loaderWrap}>
        <RedrumProLoader/>
      </div>
    ) : (
      <>
      {notifications.length < 1 ? ( <NoNotificationsItem /> ) :
      ( <NotificationsWrap notifications={notifications} en={en}/> )}
      </>
    )}

    </>
  )
}

const styles = {
  loaderWrap: {
    display: 'flex',
    width: '100%',
    height: 400,
    alignItems: 'center',
  }
}

export default NotificationsPage
