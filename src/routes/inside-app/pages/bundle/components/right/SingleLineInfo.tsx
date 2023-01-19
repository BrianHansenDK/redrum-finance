import React from 'react'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'

const SingleLineInfo = ({ title, info, type, line = true }: { title: string, info: any, type?: any, line?: boolean }) => {
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
    },
    line: {
        width: 100 + '%',
        height: 2,
        marginTop: 2.5,
        backgroundColor: '#444',
        marginBottom: 2.5,
    }
}

export default SingleLineInfo