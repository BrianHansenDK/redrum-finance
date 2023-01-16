import React from 'react'
import { useParams } from 'react-router-dom'
import { PROJECTS } from '../../../dashboard/components/util'

const BundleMoviesDetals = () => {
    const { bundleId } = useParams()
    const project = PROJECTS[Number(bundleId)]
    return (
        <>
            {project.movies.map((movie) => (
                <div>

                    <h1>
                        {movie.title}
                    </h1>
                    <p>
                        {movie.description}
                    </p>
                    <p>Genres: {movie.genres.join(', ')}</p>
                    <p>
                        Trailer link: {movie.trailer}
                    </p>
                </div>
            ))}
        </>
    )
}

export default BundleMoviesDetals