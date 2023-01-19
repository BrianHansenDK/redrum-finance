import React from 'react'
import { useParams } from 'react-router-dom'
import BundleOverview from '.'

const ProjectDetailsOverviewWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsOverviewWrapper(BundleOverview)