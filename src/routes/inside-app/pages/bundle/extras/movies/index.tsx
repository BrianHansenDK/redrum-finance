import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'rsuite'
import MainBtn from '../../../../components/MainBtn'
import mainShadows from '../../../../themes/shadows'
import { PROJECTS } from '../../../dashboard/components/util'
import MovieCard from './components/MovieCard'
import './styles/index.scss'

const BundleMoviesDetals = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    const [loading, setLoading] = useState(true)

    window.setTimeout(() => {
        setLoading(false)
    }, 1000)

    return (
        <div style={styles.pageWrap} className='flex-column'>
            {
                loading ? (
                    <Loader size='lg' content='Loading' />
                ) : (
                    <>
                        <h1 style={styles.pageTitle} className='txt-center'> Movies in {project.name}</h1>
                        <div style={styles.wrapper}>
                            {project.movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    </>
                )
            }

        </div>
    )
}

const styles = {
    pageWrap: {
        minHeight: 400,
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        marginBottom: 75,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 100 + '%',
    },
}

export default BundleMoviesDetals