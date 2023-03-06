import React from 'react'
import { useParams } from 'react-router-dom'
import BundleQAndADetails from '.'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'

interface IProps {en: boolean}

const ProjectDetailsQAndAWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en} = props
    const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <>
            <WrappedComponent isMobile={isMobile} params={params} en={en}/>
        </>
    )
}

export default ProjectDetailsQAndAWrapper(BundleQAndADetails)
