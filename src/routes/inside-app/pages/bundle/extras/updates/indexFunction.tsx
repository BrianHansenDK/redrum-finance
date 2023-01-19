import React from 'react'
import { useParams } from 'react-router-dom'
import BundleUpdatesDetails from '.'

const ProjectDetailsUpdatesWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsUpdatesWrapper(BundleUpdatesDetails)