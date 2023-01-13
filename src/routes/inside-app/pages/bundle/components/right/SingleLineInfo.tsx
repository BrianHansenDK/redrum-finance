import React from 'react'

const SingleLineInfo = ({ title, info, type }: { title: string, info: any, type?: any }) => {
    return (
        <>
            <div style={styles.wrapper}>
                <p style={styles.title}>
                    {title}
                </p>
                <p style={styles.info}>
                    {info} {type}
                </p>
            </div>
            <div style={styles.line} />
        </>
    )
}

const styles = {
    wrapper: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    title: {
        fontSize: 18.2,
    },
    info: {
        fontSize: 18.2,
        fontWeight: '700',
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