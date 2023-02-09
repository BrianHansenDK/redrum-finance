import React from 'react'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import PLACEHOLDER from '../../../../../../../components/images/about_us_page_imgs/ab_img3.svg'

const PresentationCard = ({ project }: { project: any }) => {
    return (
        <div style={styles.presentationCard} className='flex-column'>

            <h1 style={styles.title}>Presentation of the {project.name} project</h1>
            <img src={project.overviewImage} alt={project.intro} style={styles.image} />
            <p style={styles.description}>
                {project.description}
            </p>
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
        fontSize: 35,
        textAling: 'center',
        color: mainColors.dark,
        marginBottom: 25,
    },
    description: {
        flex: 1,
        textAling: 'center',
        marginTop: 2 + 'rem',
        fontSize: 22.5,
        color: mainColors.dark,
        opacity: .9,
        width: '80%',
    },
    image: {
        width: 80 + '%',
        height: 'auto',
        borderRadius: 10,
        boxShadow: mainShadows.image,
    }
}

export default PresentationCard
