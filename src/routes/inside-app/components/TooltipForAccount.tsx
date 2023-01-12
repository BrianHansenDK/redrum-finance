import React, { MouseEventHandler } from 'react'
import { Button } from 'rsuite'
import MainBtn from './MainBtn'
import TooltipIdentify from './TooltipIdentify'
import TooltipLinks from './TooltipLinks'

export interface ITooltipForAccount { ACCOUNTNAV: Array<{}>, auth: any, logout: MouseEventHandler }

const styles = {
    title: {
        color: '#333',
    },
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
            <h3 className='' style={styles.title} >Account</h3>
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