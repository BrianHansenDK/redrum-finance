import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import { FirebaseMovie } from '../../../../database/Objects'
import { vanumoMainBtn } from '../../../theme/vanumoTheme'

const MovieLinkElement = ({movie} : {movie: FirebaseMovie}) => {
  return (
    <Link className='v-dash-img-con' to={`/vanumo/movie/${movie.id!}`}>
      <img src={movie.image!} alt={movie.title} className='movie-cover' />
      <div className="overlay">
        <Button appearance='primary' style={vanumoMainBtn} size='md'>
          Go to movie
        </Button>
      </div>
    </Link>
  )
}

export default MovieLinkElement
