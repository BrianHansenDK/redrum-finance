import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { FlexboxGrid } from 'rsuite'
import { FirebaseBundle, FirebaseMovie } from '../../../../../../../../database/Objects'
import { database } from '../../../../../../../../firebase'
import VProjectMovieItem from './ProjectMovieItem'

const ProjectMovies = ({project} : {project: FirebaseBundle}) => {
  const [movies, setMovies] = useState<Array<FirebaseMovie>>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    let data: Array<FirebaseMovie> = []
    project.movies?.forEach((movieId) => {
      const reference = ref(database, 'movies/' + movieId)
      onValue(reference, (snap) => {
        data.push(snap.val())
      })
    })
    setMovies(data)
    setLoading(false)
  }, [project.movies])
  return (
    <div className='project-section' style={{paddingTop: 25}}>
      <h1 className="section-title">Movies</h1>
      <FlexboxGrid className='project-movies-con'>
        {movies.map(movie => (
          <VProjectMovieItem movie={movie} key={movie.id} />
        ))}
      </FlexboxGrid>
    </div>
  )
}

export default ProjectMovies
