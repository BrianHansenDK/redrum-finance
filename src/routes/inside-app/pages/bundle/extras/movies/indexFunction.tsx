import React from 'react'
import { useParams } from 'react-router-dom'
import BundleMoviesDetals from '.'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'

const ProjectDetailsMovieWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <>
            <WrappedComponent isMobile={isMobile} params={params} />
        </>
    )
}

export default ProjectDetailsMovieWrapper(BundleMoviesDetals)
