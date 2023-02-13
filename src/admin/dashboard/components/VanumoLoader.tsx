import React from 'react'
import { Loader } from 'rsuite'
import { vanumoColors } from '../../theme/vanumoTheme'

const VanumoLoader = () => {
  return (
    <div style={styles.wrap}>
      <Loader size='lg' speed='slow' content='Loading...' vertical />
    </div>
  )
}
const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 150px)',
    paddingBottom: 150,
  }
}
export default VanumoLoader
