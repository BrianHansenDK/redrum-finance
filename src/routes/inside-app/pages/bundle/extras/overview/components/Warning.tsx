import React from 'react'
import { mainColors } from '../../../../../themes/colors'

const Warning = () => {
    return (
        <div style={styles.wrap}>
            <h2 style={styles.title}>Notice</h2>
            <p style={styles.content}>
                The acquisition of the offered securities and investments is associated with considerable risks and can lead to the complete loss of the invested assets.
                The prospective yield is not guaranteed and may also be lower.
                You can find out whether it is a security or an investment from the description of the investment opportunity.
            </p>
        </div>
    )
}

const styles = {
    wrap: {
        marginTop: 50,
        width: 80 + '%',
    },
    title: {
        marginBottom: 15,
        color: mainColors.dark,
    },
    content: {
        fontSize: 25,
    },
}

export default Warning