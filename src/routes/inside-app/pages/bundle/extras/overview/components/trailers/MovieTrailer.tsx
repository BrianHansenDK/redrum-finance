import React from 'react'
import { getMovieTrailers } from '../../../../../../../../firebase';
import RedrumProLoader from '../../../../../../components/RedrumProLoader';
import { YOUTUBE, useMediaQuery } from '../../../../../../../../misc/custom-hooks';
import './trailer.scss'
import { Button, IconButton } from 'rsuite';
import LeftBtn from '@rsuite/icons/ArrowLeftLine'
import RightBtn from '@rsuite/icons/ArrowRightLine'

interface IProps {
  trailers: string[], en: boolean
}

const MovieTrailer = (props: IProps) => {
  // Props
  const {trailers, en} = props;

  // Mark: - PROPERTIES

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Responsiveness
  const isSmall = useMediaQuery('(max-width: 500px');

  // Mark: - ON-MOUNT

  // Mark: - FUNCTIONS
  const goLeft = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1: currentIndex);
  const goRight = () => setCurrentIndex(currentIndex < trailers.length - 1 ? currentIndex + 1 : currentIndex);

  // Mark: - VIEW
  return (
    <div className="trailer-section">
      {trailers.length === 0 ? null : (
        <div className='trailer-embed'>
          <h3 className="title">{trailers.length === 1 ? en ? 'Trailer': 'Trailer' : en ? 'Trailers' : 'Trailers'}</h3>
          <div className="carousel">
            <div className={`carousel-inner ${trailers.length === 1 && 'rounded'}`}>
              {trailers.map((trailer, index) => (
                <div className="trailer-element" key={trailer + index} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                  <iframe
                  className='trailer'
                  src={YOUTUBE(trailer)}
                  title="PVRIS ft. Denzel Curry - Burn It All Down (League of Legends Worlds 2021) | AMV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen />
                </div>
              ))}
            </div>

            {
              trailers.length > 1 ? (
                <>
                  <div className="indication-arrows-con">
                  <IconButton icon={<LeftBtn/>} size={isSmall ? 'sm' : 'lg'} onClick={goLeft}
                  className='left r-btn r-secondary-btn' disabled={currentIndex === 0}>
                    {en ? 'Previous' : 'vorherig'}
                  </IconButton>

                  <IconButton placement='right' icon={<RightBtn/>} size={isSmall ? 'sm' : 'lg'} onClick={goRight}
                  className='right r-btn r-secondary-btn' disabled={currentIndex === trailers.length - 1}>
                    {en ? 'Next' : 'Nächste'}
                  </IconButton>
                  </div>

                  <IconButton icon={<LeftBtn/>} size='lg' circle onClick={goLeft}
                  className='left arrow-btn' disabled={currentIndex === 0}/>

                  <IconButton icon={<RightBtn/>} size='lg' circle onClick={goRight}
                  className='right arrow-btn' disabled={currentIndex === trailers.length - 1}/>
                </>
              ) : null
            }

          </div>
        </div>
      )}
    </div>
  )
}

export default MovieTrailer
