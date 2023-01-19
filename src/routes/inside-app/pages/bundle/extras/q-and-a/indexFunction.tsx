import React from 'react'
import { useParams } from 'react-router-dom'
import BundleQAndADetails from '.'

const ProjectDetailsQAndAWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsQAndAWrapper(BundleQAndADetails)