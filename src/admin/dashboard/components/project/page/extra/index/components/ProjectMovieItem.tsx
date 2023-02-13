import React from 'react'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseMovie } from '../../../../../../../../database/Objects'
import { useMediaQuery } from '../../../../../../../../misc/custom-hooks'

const VProjectMovieItem = ({movie} : {movie: FirebaseMovie}) => {
  const isMobile = useMediaQuery('(max-width: 992px)')
  return (
    <FlexboxGridItem colspan={isMobile ? 24 : 8} className='movie-img-con'>
      <img src={movie.image} alt={movie.title} className='movie-image' />
    </FlexboxGridItem>
  )
}

export default VProjectMovieItem
