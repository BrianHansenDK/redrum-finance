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
        <div style={{width: 100}}>Movies</div>
        <div style={styles.titleElement}>Created</div>
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
    paddingLeft: 10,
  },
  titleElement: {
    width: 150,
  },
  divider: {
    margin: '7.5px 50px 0 0'
  }
}

export default InvestmentsTableHeader
