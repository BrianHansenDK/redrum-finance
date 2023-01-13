import React from 'react'
import ProgressCircle from 'rsuite/esm/Progress/ProgressCircle'
import './styles/index.scss'

const Rank = () => {
    return (
        <div style={styles.wrap} className='rank-wrap'>
            <ProgressCircle percent={100} showInfo={false} />
            <div style={styles.titleWrap} className='rank-el'>
                <p>B</p>
            </div>
        </div>
    )
}

const styles = {
    wrap: {
        width: 120,
        height: 120,
    },
    titleWrap: {
        top: 0, bottom: 0,
        left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default Rank