import React from 'react'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'

const SingleLineInfo = ({ title, info, type, line = true, isBlue = false }: { title: string, info: any, type?: any, line?: boolean, isBlue?: boolean }) => {
  const styles = {
    wrapper: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    title: {
        fontSize: 18.2,
    },
    info: {
        fontSize: 18.2,
        fontWeight: '700',
        marginTop: 0,
        color: isBlue ? mainColors.main : mainColors.dark
    },
    line: {
        width: 100 + '%',
        height: 2,
        marginTop: 2.5,
        backgroundColor: '#444',
        marginBottom: 2.5,
    }
}
    return (
        <>
            <div style={styles.wrapper}>
                <p style={styles.title}>
                    {title}
                </p>
                <p style={styles.info}>
                    {type == '€' ? numberWithCommas(info) : info} {type}
                </p>
            </div>
            {
                line ? (
                    <div style={styles.line} />
                ) : null
            }
        </>
    )
}

export default SingleLineInfo
