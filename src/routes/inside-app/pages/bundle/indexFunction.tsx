import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailsPage from '.'

const ProjectDetailsPageWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsPageWrapper(ProjectDetailsPage)