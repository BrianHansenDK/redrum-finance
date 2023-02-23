import React from 'react'
import EMPTY from '../../../../assets/empty_img.png'
import TextTheme from '../../../../library/themes/TextTheme'
import './styles/notifications.scss'

const NoNotificationsItem = () => {
  return (
    <div className='no-notifications-con'>
      <h2 style={styles.title}>
        No notifications
      </h2>
      <img src={EMPTY} alt="Empty box" style={styles.img} />
      <p style={styles.des}>
        You do not have any notifications at the moment
      </p>
    </div>
  )
}

const styles = {
  title: TextTheme.secondaryTitle,
  des: TextTheme.mainPara,
  img: {
    width: 150,
    height: 150,
    marginTop: 25,
    marginBottom: 15,
  }
}

export default NoNotificationsItem
