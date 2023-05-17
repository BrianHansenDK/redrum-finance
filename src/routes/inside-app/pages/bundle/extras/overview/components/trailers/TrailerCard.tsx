import React from 'react'
import { getMovieTrailers } from '../../../../../../../../firebase';
import RedrumProLoader from '../../../../../../components/RedrumProLoader';
import MovieTrailer from './MovieTrailer';

interface IProps {
  movieIds: number[], en: boolean
}

const TrailerCard = (props: IProps) => {
  const {movieIds, en} = props;

  // Mark: - PROPERTIES

  const [loading, setLoading] = React.useState(false);
  const [trailers, setTrailers] = React.useState<string[] | null>(null)

  // Mark: - ON-MOUNT
  React.useEffect(() => {
    getMovieTrailers(movieIds, setTrailers, setLoading);
  }, [])
  React.useEffect(() => {
    if (trailers === null) {
      getMovieTrailers(movieIds, setTrailers, setLoading);
    }
  }, [])



  return (
    <div className='overview-card'>
      {loading || trailers === null ? (<RedrumProLoader/>) :
      trailers.length === 0 || (trailers.length === 1 && trailers[0].split('you').length < 2) ? (
        <h1>
          {en ? 'There are currently no trailers for the movies included in this bundle.' :
          'Aktuell sind keine Trailer für die in diesem Bundle enthaltenen Filme verfügbar.'}
          </h1>
      ) : (
        <MovieTrailer trailers={trailers} en={en}/>
      )}
    </div>
  )
}

export default TrailerCard
