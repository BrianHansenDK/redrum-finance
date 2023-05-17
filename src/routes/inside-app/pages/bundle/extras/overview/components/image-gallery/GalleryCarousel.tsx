import React from 'react'
import { IconButton } from 'rsuite';
import LeftBtn from '@rsuite/icons/ArrowLeftLine'
import RightBtn from '@rsuite/icons/ArrowRightLine'
import { useMediaQuery } from '../../../../../../../../misc/custom-hooks';

interface IProps {
  en: boolean,
  projectName: string,
  gallery: string[],
}

const GalleryCarousel = (props: IProps) => {
  const {en, projectName, gallery} = props;
  // Mark - PROPERTIES

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Responsiveness
  const isSmall = useMediaQuery('(max-width: 500px');

  // Mark: - FUNCTIONS

  const goLeft = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1: currentIndex);
  const goRight = () => setCurrentIndex(currentIndex < gallery.length - 1 ?
    currentIndex + 1 : 0);



  return (
    <>
      <h2 className="overview-image-gallery-title mb-2 mt-2">
        {en ? 'Gallery' : 'Galleri'}
      </h2>
      <div className="overview-image-gallery">
        <div className="carousel">
          {gallery.map((image, index) => (
            <img src={image} alt={`${projectName} gallery image-${index}`}
            style={{transform: `translateX(-${currentIndex * 100}%)`}} />
            ))
          }
        </div>
        {
        gallery.length > 1 ? (
          <>
            <div className="indication-arrows">
            <IconButton icon={<LeftBtn/>} size={isSmall ? 'sm' : 'lg'} onClick={goLeft}
            className='r-btn r-secondary-btn' disabled={currentIndex === 0}>
              {en ? 'Previous' : 'vorherig'}
            </IconButton>
            <IconButton placement='right' icon={<RightBtn/>} size={isSmall ? 'sm' : 'lg'} onClick={goRight}
            className='fl-right r-btn r-secondary-btn' disabled={currentIndex === gallery.length - 1}>
              {en ? 'Next' : 'Nächste'}
            </IconButton>
            </div>
            <IconButton appearance='primary' icon={<LeftBtn/>} size='lg' circle onClick={goLeft}
            className='arrow-btn left r-btn r-main-btn' disabled={currentIndex === 0}/>
            <IconButton appearance='primary' icon={<RightBtn/>} size='lg' circle onClick={goRight}
            className='arrow-btn right r-btn r-main-btn' disabled={currentIndex === gallery.length - 1}/>
          </>
        ) : null
      }
      </div>
    </>
  )
}

export default GalleryCarousel
