import React from 'react'
import { Tag } from 'rsuite'
import ProgressCircle from 'rsuite/esm/Progress/ProgressCircle'
import { mainColors } from '../../../../themes/colors'
import './styles/index.scss'

const Rank = () => {
    return (
        <div style={styles.wrapper} className='flex-column'>
            <Tag style={styles.tag}>Redrum ranking</Tag>
            <div style={styles.innerWrapper} className='rank-wrap'>
                <div style={styles.rankWrap} className='rank-wrap'>
                    <ProgressCircle percent={100} showInfo={false} />
                    <div style={styles.titleWrap} className='rank-el'>
                        <p>B</p>
                    </div>
                </div>
                <p style={styles.rankTxt} className='rank-el'>Rank</p>
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        display: 'flex',
        width: 100 + '%',
        marginTop: 15,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColors.white,
        borderRadius: 15,
        boxShadow: '0 -5px 15px 0 rgba(0,0,29, .15)',
    },
    tag: {
        width: 'max-content',
        border: '1px solid #999',
        color: mainColors.dark,
        padding: '0 25px',
        marginBottom: 20,
    },
    innerWrapper: {
        display: 'flex',
        height: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rankWrap: {
        width: 120,
        height: 120,
    },
    titleWrap: {
        top: 0, bottom: 0,
        left: 0, right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
        fontWeight: '700',
    },
    rankTxt: {
        top: 0,
        right: -50,
        fontSize: 18.5,
    }
}

export default Rank