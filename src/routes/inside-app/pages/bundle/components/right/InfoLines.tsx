import React from 'react'
import SingleLineInfo from './SingleLineInfo'

const InfoLines = ({ project }: { project: any }) => {
    return (
        <>
            <SingleLineInfo title='Guaranteed return' info={project.guaranteedReturn.toString()} type='%' />
            <SingleLineInfo title='Expected end date' info={project.endDate.split(' ').slice(1).join(' ')} />
            <SingleLineInfo title='Finance goal' info={project.goal.toString()} type='€' />
            <SingleLineInfo title='Minimal investment' info={3} type='€' />
            <SingleLineInfo title='Received' info={project.currentlyInvested.toString()} type='€' isBlue />
        </>
    )
}

export default InfoLines
