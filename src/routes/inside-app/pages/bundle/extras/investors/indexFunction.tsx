import React from 'react'
import { useParams } from 'react-router-dom'
import BundleInvestorsDetails from '.'

const ProjectDetailsInvestorWrapper = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <>
            <WrappedComponent params={params} />
        </>
    )
}

export default ProjectDetailsInvestorWrapper(BundleInvestorsDetails)