import React from 'react'
import { useParams } from 'react-router-dom'
import BundleQAndADetails from '.'

interface IProps {en: boolean}

const ProjectDetailsQAndAWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en} = props
    return (
        <>
            <WrappedComponent params={params} en={en}/>
        </>
    )
}

export default ProjectDetailsQAndAWrapper(BundleQAndADetails)
