import React from 'react'
import { Divider } from 'rsuite'
import { mainColors } from '../../../themes/colors'

const InvestmentsTableHeader = () => {
  return (
    <>
      <div style={styles.wrap}>
        <div style={styles.titleElement}>Project</div>
        <div style={styles.titleElement}>Amount invested</div>
        <div style={styles.titleElement}>Guaranteed return</div>
        <div style={styles.titleElement}>Movies</div>
      </div>
      <Divider style={styles.divider} />
    </>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14.5,
    color: mainColors.dark,
    opacity: .7,
    paddingTop: 25,
  },
  titleElement: {
    width: 200,
  },
  divider: {
    margin: '7.5px 50px 15px 0'
  }
}

export default InvestmentsTableHeader
