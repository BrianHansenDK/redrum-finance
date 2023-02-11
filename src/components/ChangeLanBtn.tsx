import React, { FunctionComponent } from 'react'
import NavItem from 'rsuite/esm/Nav/NavItem'
import NavMenu from 'rsuite/esm/Nav/NavMenu'
import { mainColors } from '../routes/inside-app/themes/colors'

interface IProps {en: boolean, setEn: any}

const ChangeLanBtn: FunctionComponent<IProps> = (props) => {
  const {en, setEn} = props
  return (
    <NavMenu className='nav-ul' title={`${en ? 'EN' : 'DE'}`} style={styles.wrap}>
        <NavItem style={styles.item} onClick={setEn} className='text-center'>
            {en ? 'DE' : 'EN'}
        </NavItem>
    </NavMenu>
  )
}

const styles = {
  wrap: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: mainColors.white,
  },
  item: {
    display: 'block',
    width: 75,
    color: mainColors.dark,
  }
}
export default ChangeLanBtn
