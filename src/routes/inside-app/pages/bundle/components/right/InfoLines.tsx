import React from 'react'
import SingleLineInfo from './SingleLineInfo'

const InfoLines = ({ project }: { project: any }) => {
    return (
        <>
            <SingleLineInfo title='Expected end date' info={project.endDate.toLocaleDateString().split('/').join(' / ')} />
            <SingleLineInfo title='Finance goal' info={project.goal.toString()} type='€' />
            <SingleLineInfo title='Minimal investment' info={3} type='€' />
            <SingleLineInfo title='Bundle value' info={project.value.toString()} type='€' />
            <SingleLineInfo title='Facilitator' info='Redrum Gmbh' line={false} />
        </>
    )
}

export default InfoLines