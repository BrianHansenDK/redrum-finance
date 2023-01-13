import React, { useState } from 'react'
import { Button } from 'rsuite'
import ProgressLine from 'rsuite/esm/Progress/ProgressLine'
import { toFixedIfNecessary } from '../../../../../../misc/custom-hooks'

const ProgressItem = ({ project }: { project: any }) => {
    const percent = toFixedIfNecessary((project.currentlyInvested / project.maxAmount) * 100, 2)
    return (
        <>
            <div style={styles.titleWrap}>
                <Button appearance='link'>
                    Recieved
                </Button>
            </div>
            <ProgressLine percent={percent} status={`${percent == 100 ? 'success' : 'active'}`} />
        </>
    )
}

const styles = {
    titleWrap: {
        width: 100 + '%',
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 0,
        paddingBottom: 0,
    }
}

export default ProgressItem