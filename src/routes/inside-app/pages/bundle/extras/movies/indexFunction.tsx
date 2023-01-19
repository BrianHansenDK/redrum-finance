import React from 'react'
import { useParams } from 'react-router-dom'
import BundleMoviesDetals from '.'

const ProjectDetailsMovieWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsMovieWrapper(BundleMoviesDetals)