import React from 'react'
import { Toggle } from 'rsuite'
import { mainColors } from '../themes/colors'
interface IProps {
  en: boolean, setEn: any
}
const LanguageToggle: React.FunctionComponent<IProps> = (props) => {
  const {en, setEn} = props
  return (
    <div style={styles.wrap}>
      <span style={{
        display: 'block',
        color: en ? mainColors.blueAccent : mainColors.dark
      }}>
        EN
      </span>
      <Toggle defaultChecked={!en} onChange={setEn} style={styles.toggle} />
      <span style={{
        display: 'block',
        color: !en ? mainColors.blueAccent : mainColors.dark
      }}>
        DE
      </span>
    </div>
  )
}

const styles = {
  wrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggle: {
    marginLeft: 15,
    marginRight: 15,
  }
}

export default LanguageToggle
