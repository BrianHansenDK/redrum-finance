import React from 'react'
import { mainColors } from '../../../../../../themes/colors'
import mainShadows from '../../../../../../themes/shadows'
import PLACEHOLDER from '../../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { useMediaQuery } from '../../../../../../../../misc/custom-hooks'
import { FirebaseBundle } from '../../../../../../../../database/Objects'
import './gallery.scss'
import { IconButton } from 'rsuite'
import GalleryCarousel from './GalleryCarousel'
import PitchVideo from './PitchVideo'


interface IProps {
  en: boolean,
  project: FirebaseBundle,
  showGallery?: boolean,
}

const PresentationCard = (props: IProps) => {
  const {en, project, showGallery} = props;

  // Mark: - PROPERTIES
  const isMobile = useMediaQuery('(max-width: 1100px)')

  const gallery = project.image_gallery_urls
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Mark: - ON-MOUNT

  // Mark: - FUNCTIONS
  const goLeft = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1: currentIndex);
  const goRight = () => setCurrentIndex(currentIndex < gallery.length - 1 ?
    currentIndex + 1 : 0);

  const styles = {
    presentationCard: {
        display: 'flex',
        width: isMobile ? '100%' : 80 + '%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe',
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
          {/*
            showGallery ? (<h1 style={styles.title}>Presentation of the {project.name} project</h1>) : null
          */}

            {
              project.image_gallery_urls.length > 0 && showGallery ? (
                <GalleryCarousel en={en} projectName={project.name!} gallery={project.image_gallery_urls} />
              ) : null
            }
            <PitchVideo en={en} project={project} />
        </div>
    )
}

export default PresentationCard
