import React from 'react'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'

const PresentationCard = ({ project }: { project: any }) => {
    return (
        <div style={styles.presentationCard} className='flex-column'>

            <h1 style={styles.title}>Presentation of the {project.name} project</h1>
            <p style={styles.description}>
                {project.description}
            </p>
            <img src={project.image} alt={project.intro} style={styles.image} />
        </div>
    )
}

const styles = {
    presentationCard: {
        display: 'flex',
        width: 80 + '%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainColors.white,
        borderRadius: 15,
        boxShadow: mainShadows.card,
        padding: 1.5 + 'rem',
    },
    title: {
        flex: 1,
        textAling: 'center'
    },
    description: {
        flex: 1,
        textAling: 'center',
        marginBottom: 2 + 'rem',
    },
    image: {
        width: 80 + '%',
        height: 'auto',
        borderRadius: 10,
        boxShadow: mainShadows.image,
    }
}

export default PresentationCard