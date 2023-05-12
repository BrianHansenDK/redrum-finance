import React from 'react'
import { FirebaseBundle, FirebaseMovie } from '../../../../../../database/Objects'

const VMoviePageInfo = ({movie} : {movie: FirebaseMovie}) => {
  return (
    <>
      <h1 className='v-dash-title'>{movie?.title}</h1>
      <p className='m-dash-intro'>
        {movie?.intro}
      </p>
      <p className='m-dash-des'>
        {movie?.description}
      </p>
      <p className='m-dash-genres'>
        Genres: <span className='bold'>{movie?.genres}</span>
      </p>
      <p className='m-dash-genres'>
        Trailer: <span className='bold'>{movie?.trailer_url}</span>
      </p>
      <p className='m-dash-release_date'>
        Release date: <span className='bold'>{movie?.releaseDate}</span>
      </p>
    </>
  )
}

export default VMoviePageInfo
