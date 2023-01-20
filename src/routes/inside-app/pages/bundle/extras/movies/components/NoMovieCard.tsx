import React from 'react'
import EMPTY from '../../../../../../../assets/empty_img.png'
import { mainColors } from '../../../../../themes/colors'

const NoMovieCard = () => {
    return (
        <div style={styles.wrap} className='flex-column'>
            <h1 style={styles.title}>
                No movies
            </h1>
            <p style={styles.des}>
                This project doesn't have any movies yet.
            </p>
            <img
                src={EMPTY}
                alt="EMpty box indicating that no movies are in this project"
                width={200}
                height={200}
            />
        </div>
    )
}

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: 27.5,
        fontWeight: 'bold',
        color: mainColors.dark,
    },
    des: {
        fontSize: 22.5,
        color: mainColors.dark,
        opacityy: .8,
        marginBottom: 10,
    }
}

export default NoMovieCard