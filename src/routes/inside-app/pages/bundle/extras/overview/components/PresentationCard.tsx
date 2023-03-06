import React from 'react'
import { mainColors } from '../../../../../themes/colors'
import mainShadows from '../../../../../themes/shadows'
import PLACEHOLDER from '../../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks'

const PresentationCard = ({ project }: { project: any }) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')

  const styles = {
    presentationCard: {
        display: 'flex',
        width: isMobile ? '100%' : 80 + '%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: mainColors.white,
        borderRadius: 15,
        boxShadow: mainShadows.card,
        padding: isMobile ? 20 : 1.5 + 'rem',
    },
    title: {
        flex: 1,
        fontSize: isMobile ? 22.5 : 35,
        textAling: 'center',
        color: mainColors.dark,
        marginBottom: 25,
        lineHeight: 1.5
    },
    description: {
        flex: 1,
        textAling: 'center',
        marginTop: 2 + 'rem',
        fontSize: 18.5,
        color: mainColors.dark,
        opacity: .9,
        width: isMobile ? '100%' : '80%',
    },
    image: {
        width: isMobile ? '100%' : 80 + '%',
        height: 'auto',
        borderRadius: 10,
        boxShadow: mainShadows.image,
    }
  }
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

export default PresentationCard
