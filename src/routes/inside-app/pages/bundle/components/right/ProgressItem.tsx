import React, { useState } from 'react'
import { Tooltip, Whisper } from 'rsuite'
import ProgressLine from 'rsuite/esm/Progress/ProgressLine'
import { numberWithCommas, toFixedIfNecessary } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'



const ProgressItem = ({ project }: { project: any }) => {
    const tooltip = (
        <Tooltip>
            Currently invested: {numberWithCommas(project.currentlyInvested)} €
        </Tooltip>
    )

    const percent = toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2)
    return (
        <Whisper speaker={tooltip} trigger='hover' placement='top' >
            <div style={styles.progressWrap}>
                <p style={styles.title}>

                    Recieved
                </p>
                <ProgressLine style={styles.bar} percent={percent} status={`${percent == 100 ? 'success' : 'active'}`} />
                <div style={styles.goalWrap}>
                    <p style={styles.goalTxt}>Goal</p>
                    <p style={styles.goalTxt}>{numberWithCommas(project.goal)} €</p>
                </div>
            </div>
        </Whisper>
    )
}

const styles = {
    progressWrap: {
        width: 100 + '%',
        marginTop: 15,
        paddingTop: 7.5,
        paddingBottom: 7.5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 0,
        paddingBottom: 0,
        color: mainColors.main,
        fontWeight: '700',
    },
    bar: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0,
    },
    goalWrap: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    goalTxt: {
        fontSize: 15.2,
        fontWeight: '700',
        margin: 0,
        padding: 0,
        lignHeight: 1,
    }
}

export default ProgressItem