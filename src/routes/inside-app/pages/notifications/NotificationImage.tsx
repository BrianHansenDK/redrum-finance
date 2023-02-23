import React from 'react'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import CAT from '../../../../components/images/redrum_cat.png'
import { mainColors } from '../../themes/colors'
import mainShadows from '../../themes/shadows'

const NotificationImage = () => {

  return (
    <FlexboxGridItem>
      <div style={styles.wrap}>
        <img className='notification-image' src={CAT} alt="Redrum Pro Cat" style={styles.image} />
      </div>
    </FlexboxGridItem>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColors.dark,
    width: 75,
    height: 75,
    borderRadius: '50%',
    boxShadow: mainShadows.image,
  },
  image: {
    width: 50,
    height: 50,
  }
}

export default NotificationImage
