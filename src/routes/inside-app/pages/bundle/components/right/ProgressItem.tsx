import React, { useState } from 'react'
import { Tooltip, Whisper } from 'rsuite'
import ProgressLine from 'rsuite/esm/Progress/ProgressLine'
import bundleStrings from '../../../../../../library/string/Bundle'
import { numberWithCommas, toFixedIfNecessary } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'



const ProgressItem = ({ project, en }: { project: any, en: boolean }) => {
    const tooltip = (
        <Tooltip>
            Currently invested: {numberWithCommas(project.currentlyInvested)} €
        </Tooltip>
    )

    const percent = toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2)
    return (
        <Whisper speaker={tooltip} trigger='hover' placement='top' >
            <div style={styles.progressWrap}>
                <ProgressLine style={styles.bar} percent={percent} status={`${percent >= 100 ? 'success' : 'active'}`} />
                <div style={styles.goalWrap}>
                    <p style={styles.goalTxt}>
                      {en ? bundleStrings.infoCardEN.aI : bundleStrings.infoCardDE.aI}
                    </p>
                    <p style={styles.goalTxt}>{numberWithCommas(project.currentlyInvested)} €</p>
                </div>
                <div style={styles.goalWrap}>
                    <p style={styles.goalTxt}>{en ? bundleStrings.infoCardEN.iT : bundleStrings.infoCardDE.iT}</p>
                    <p style={styles.goalTxt}>{numberWithCommas(project.goal)} €</p>
                </div>
            </div>
        </Whisper>
    )
}

const styles = {
    progressWrap: {
        width: 100 + '%',
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        // paddingLeft: 20,
        // paddingRight: 20,
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
