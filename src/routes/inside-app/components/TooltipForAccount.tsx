import React, { MouseEventHandler } from 'react'
import { Button } from 'rsuite'
import { mainColors } from '../themes/colors'
import MainBtn from './MainBtn'
import TooltipIdentify from './TooltipIdentify'
import TooltipLinks from './TooltipLinks'
import TooltipTitle from './TooltipTitle'
import './styles/navbar.scss'
import dashboardStrings from '../../../library/string/Dashboard'

export interface ITooltipForAccount {
  ACCOUNTNAV: Array<{}>,
  auth: any,
  logout: MouseEventHandler,
  en: boolean
}

const styles = {
    topPart: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 45
    },
    btn: {
      height: 35,
      display: 'flex',
      alignItems: 'center'
    }
}

window.addEventListener('mouseenter', (event) => {
  const target = event.target as HTMLButtonElement
  target.style.color = mainColors.white
  target.style.backgroundColor = mainColors.red
})

const TooltipForAccount: React.FunctionComponent<ITooltipForAccount> = (props) => {
    const { ACCOUNTNAV, auth, logout, en } = props

    return (
        <>
            <TooltipTitle auth={auth} en={en}/>
            <div className='mt-1' style={styles.topPart}>
                <TooltipIdentify auth={auth} />
                <Button style={styles.btn} className='logout-btn' color='red' appearance='ghost' size='lg' onClick={logout}>
                  {en ? dashboardStrings.tooltipEN.btn : dashboardStrings.tooltipDE.btn}
                </Button>
            </div>
            <TooltipLinks ACCOUNTNAV={ACCOUNTNAV} />
        </ >
    )
}

export default TooltipForAccount
