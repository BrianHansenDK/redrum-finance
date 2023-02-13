import { onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Message, useToaster } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseMovie } from '../../../../../database/Objects'
import { database } from '../../../../../firebase'
import { useMediaQuery } from '../../../../../misc/custom-hooks'
import { mainColors } from '../../../../../routes/inside-app/themes/colors'
import { msgInner, pushError, vanumoColors, vanumoMainBtn } from '../../../../theme/vanumoTheme'
import VanumoLoader from '../../VanumoLoader'
import VMoviePageInfo from './components/VMoviePageInfo'
import VMoviePageInfoForm from './components/VMoviePageInfoForm'
import './style/moviePage.scss'

const VanumoMoviesPage = () => {
  const {movieId} = useParams()
  const navigate = useNavigate()
  const toaster = useToaster()
  const isMobile = useMediaQuery('(max-width: 992px)')
  const [loading, setLoading] = useState<boolean>(false)
  const [movie, setMovie] = useState<FirebaseMovie>()
  const [editing, setEditing] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const reference = ref(database, 'movies/' + movieId)
    onValue(reference, (movie) => {
      setMovie(movie.val())
    })
    setLoading(false)
  }, [movieId])

  const deleteProject = () => {
    const msg = window.prompt('Are you sure you want to delete the movie from the database? \n Write: admin key to delete')
    if (msg == 'merhi@gmx.net') {
      const reference = ref(database, 'movies/' + movieId)
      remove(reference).then(() => {
        navigate('/vanumo')
        toaster.push(
          <Message style={pushError} type='success'>
          <p style={msgInner}>Movie was deleted fromm database</p>
        </Message>, {placement: 'bottomCenter'}
        )
      }).catch((err) => {
        toaster.push(
          <Message style={pushError} type='error'>
            <p style={msgInner}>{err.message}</p>
          </Message>, {placement: 'bottomCenter'}
        )
      }).finally(() => {
        window.setTimeout(() => {toaster.clear()}, 8000)
      })
    }
  }
  return (
    <FlexboxGrid justify='center' className='pt-3'>
      {loading ? (
        <VanumoLoader />
      ) : (
        <>
        <FlexboxGridItem colspan={isMobile ? 24 : 8} className='mb-3'>
          <img src={movie?.image} alt={movie?.title} className='m-dash-cover' />
        </FlexboxGridItem>
        <FlexboxGridItem colspan={isMobile ? 24 : 12}>
          {
            editing ? (
              <>
                <VMoviePageInfoForm movie={movie!} setEditing={setEditing} />
              </>
            ) : (
              <>
                <VMoviePageInfo movie={movie!}/>
                <div>
                  <Button style={styles.editBtn} size='lg' className='mt-2' onClick={() => setEditing(true)}>
                    Edit
                  </Button>
                </div>
                <Button style={styles.deleteBtn} size='lg' className='mt-2' onClick={deleteProject}>
                  Delete
                </Button>
              </>
            )
          }

        </FlexboxGridItem>
        </>
      )}
    </FlexboxGrid>
  )
}

const styles = {
  editBtn: {
    backgroundColor: vanumoMainBtn.backgroundColor,
    color: vanumoMainBtn.color,
    fontWeight: vanumoMainBtn.fontWeight,
    boxShadow: vanumoMainBtn.boxShadow,
    width: 200,
  },
  deleteBtn: {
    backgroundColor: vanumoColors.red,
    color: vanumoMainBtn.color,
    fontWeight: vanumoMainBtn.fontWeight,
    boxShadow: vanumoMainBtn.boxShadow,
    width: 200,
  }
}

export default VanumoMoviesPage
