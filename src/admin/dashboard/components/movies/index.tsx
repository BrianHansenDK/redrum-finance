import React, { useEffect, useState } from 'react'
import { Carousel } from 'rsuite'
import { FirebaseMovie } from '../../../../database/Objects'
import { getMovies } from '../../../../firebase'
import VanumoLoader from '../VanumoLoader'
import MovieLinkElement from './MovieLinkElement'

const VanumoMoviesSection = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState<Array<FirebaseMovie>>([])

  useEffect(() => {
    getMovies(setMovies, setLoading)
  }, [])
  const [activeIndex, setActiveIndex] = React.useState(0);
  console.log(movies)
  return (
    <div className='vanumo-dashboard-section mt-2'>
      <h1 className='mb-1'>Movies</h1>
      <div className='v-dash-movies-con'>
        {loading ? (
          <VanumoLoader />
        ) : (
          <>
          {movies.map((movie: FirebaseMovie) => (
            <MovieLinkElement movie={movie} key={movie.id} />
            ))}
          </>
          )}
      </div>
    </div>
  )
}

const styles = {
}

export default VanumoMoviesSection
