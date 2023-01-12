import React from 'react'

export interface ITooltipIdentifyProps { auth: any }

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 7.5,
    },
    avatar: {
        display: 'flex',
        width: 50,
        height: 50,
        borderRadius: 50 + '%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        color: '#333',
        fontSize: 1 + 'rem',
        fontWeight: '600',
    },
    mail: {
        fontSize: 13.5,
        color: '#777',
        fontWeight: '400',
    },
}

const TooltipIdentify: React.FunctionComponent<ITooltipIdentifyProps> = (props) => {
    const { auth } = props
    return (
        <div style={styles.wrap}>
            <div className='dark-bg' style={styles.avatar} >
                {auth.currentUser?.displayName?.split(' ').map((el: any) => el[0]).join('')}
            </div>
            <p className='ml-1' style={styles.name}>
                {auth.currentUser?.displayName} <br />
                <span style={styles.mail}>{auth.currentUser?.email}</span>
            </p>
        </div>
    )
}

export default TooltipIdentify