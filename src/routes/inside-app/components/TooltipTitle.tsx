import React from 'react'
import { userRef } from '../../../firebase'
import { mainColors } from '../themes/colors'

interface IProps {auth:any}

const TooltipTitle: React.FunctionComponent<IProps> = (props) => {
  const {auth} = props
  const [available, setAvailable] = React.useState<any>(0)

  React.useEffect(() => {
    userRef(auth.currentUser?.uid, '/money_available', setAvailable)
  })

  return (
    <div style={styles.titleWrap} >
      <h3 className='' style={styles.title} >Account</h3>
      <p style={styles.desc}>Account balance: {available !== null ? `${available}` : '0'} €</p>
    </div>
  )
}

const styles = {
  titleWrap: {
      display: 'flex',
      width: 75 + '%',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  title: {
      color: '#333',
  },
  desc: {
    color: mainColors.dark,
    opacity: .8
  }
}

export default TooltipTitle