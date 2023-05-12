import React from 'react'
import { getMovieTrailers } from '../../../../../../../../firebase';
import RedrumProLoader from '../../../../../../components/RedrumProLoader';
import { YOUTUBE } from '../../../../../../../../misc/custom-hooks';
import './trailer.scss'
import { IconButton } from 'rsuite';
import LeftBtn from '@rsuite/icons/ArrowLeftLine'
import RightBtn from '@rsuite/icons/ArrowRightLine'

interface IProps {
  movieIds: number[], en: boolean
}

const MovieTrailer = (props: IProps) => {
  // Props
  const {movieIds, en} = props;

  // Mark: - PROPERTIES

  const [loading, setLoading] = React.useState(false);
  const [trailers, setTrailers] = React.useState<string[] | null>(null)

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Mark: - ON-MOUNT
  React.useEffect(() => {
    getMovieTrailers(movieIds, setTrailers, setLoading);
  }, [])
  React.useEffect(() => {
    getMovieTrailers(movieIds, setTrailers, setLoading);
  }, [])


  // Mark: - FUNCTIONS
  const goLeft = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1: currentIndex);
    console.log(currentIndex)
  }
  const goRight = () => {
    setCurrentIndex(currentIndex < movieIds.length - 1 ? currentIndex + 1 : currentIndex);
    console.log(currentIndex);
  }

  // Mark: - VIEW
  return (
    <div className="trailer-section">
      {loading || trailers === null ? (<RedrumProLoader/>) : trailers.length === 0 ? null : (
        <div className='trailer-embed'>
          <h3 className="title">{trailers.length === 1 ? en ? 'Trailer': 'Trailer' : en ? 'Trailers' : 'Trailers'}</h3>
          <div className="carousel">
            <div className="carousel-inner">
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
                  <IconButton icon={<LeftBtn/>} size='lg' circle onClick={goLeft}
                  className='left arrow-btn' disabled={currentIndex === 0}/>

                  <IconButton icon={<RightBtn/>} size='lg' circle onClick={goRight}
                  className='right arrow-btn' disabled={currentIndex === movieIds.length - 1}/>
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
