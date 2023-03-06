import React from 'react'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../../themes/colors'

const Warning = () => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const styles = {
    wrap: {
        marginTop: isMobile ? 25 : 50,
        width: isMobile ? '100%' : 80 + '%',
    },
    title: {
        marginBottom: 15,
        color: mainColors.dark,
        fontSize: isMobile ? 25 : 35,
    },
    content: {
        fontSize: isMobile ? 20 : 25,
    },
}
    return (
        <div style={styles.wrap}>
            <h2 style={styles.title}>Notice</h2>
            <p
            style={styles.content}
            className='r-bundle-notice-content'
            >
                The acquisition of the offered securities and investments is associated with considerable risks and can lead to the complete loss of the invested assets.
                The prospective yield is not guaranteed and may also be lower.
                You can find out whether it is a security or an investment from the description of the investment opportunity.
            </p>
        </div>
    )
}

export default Warning
