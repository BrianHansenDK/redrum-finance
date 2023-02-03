import React, { MouseEventHandler } from 'react'
import MainBtn from './MainBtn'
import TooltipIdentify from './TooltipIdentify'
import TooltipLinks from './TooltipLinks'
import TooltipTitle from './TooltipTitle'

export interface ITooltipForAccount { ACCOUNTNAV: Array<{}>, auth: any, logout: MouseEventHandler }

const styles = {
    topPart: {
        display: 'flex',
        justifyContent: 'flex-start',
        columnGap: 45
    }
}


const TooltipForAccount: React.FunctionComponent<ITooltipForAccount> = (props) => {
    const { ACCOUNTNAV, auth, logout } = props

    return (
        <>
            <TooltipTitle auth={auth}/>
            <div className='mt-1' style={styles.topPart}>
                <TooltipIdentify auth={auth} />
                <MainBtn
                    content='Logout'
                    btnColor='red'
                    btnAppearance='primary'
                    btnSize='md'
                    isBlock={false}
                    pressed={logout} />
            </div>
            <TooltipLinks ACCOUNTNAV={ACCOUNTNAV} />
        </ >
    )
}

export default TooltipForAccount
