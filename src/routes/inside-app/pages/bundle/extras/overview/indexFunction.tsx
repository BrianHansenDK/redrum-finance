import React from 'react'
import { useParams } from 'react-router-dom'
import BundleOverview from '.'

interface IProps {en: boolean}

const ProjectDetailsOverviewWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en} = props
    return (
        <>
            <WrappedComponent params={params} en={en} />
        </>
    )
}

export default ProjectDetailsOverviewWrapper(BundleOverview)
