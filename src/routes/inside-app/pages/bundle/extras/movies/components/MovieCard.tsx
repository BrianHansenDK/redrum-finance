import React from 'react'
import MainBtn from '../../../../../components/MainBtn'
import mainShadows from '../../../../../themes/shadows'
import { IMovie } from '../../../../dashboard/components/util'

const MovieCard = ({ movie }: { movie: IMovie }) => {
    return (
        <div>
            <div className='cover-wrap' style={styles.coverWrap}>
                <img src={movie.cover} alt={`Cover for ${movie.title}`} style={styles.cover} />
                <div className='overlay' style={styles.overlay}>
                    <MainBtn
                        content={'Read more'}
                        pressed={() => null}
                        btnColor='violet'
                        btnAppearance='primary'
                        btnSize='lg'
                        isBlock={false} />
                </div>
            </div>
            <h1 style={styles.title} className='txt-center'>
                {movie.title}
            </h1>
        </div>
    )
}
const styles = {
    coverWrap: {
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: mainShadows.card,
    },
    cover: {
        width: 300,
        height: 450,
    },
    overlay: {
        left: 0, top: 0,
        height: 100 + '%',
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 29, .25)',
    },
    title: {
        fontSize: 45.5,
    },
}

export default MovieCard