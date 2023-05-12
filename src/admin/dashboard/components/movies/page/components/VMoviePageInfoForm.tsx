import React, { useState } from 'react'
import { Button, IconButton, Input, Message, useToaster } from 'rsuite'
import { FirebaseMovie } from '../../../../../../database/Objects'
import { msgInner, pushError, pushSuccess, vanumoMainBtn, vanumoSecondaryBtn } from '../../../../../theme/vanumoTheme'
import ExitIcon from '@rsuite/icons/Exit'
import { ref, remove, update } from 'firebase/database'
import { database } from '../../../../../../firebase'
import { useNavigate } from 'react-router-dom'

const VMoviePageInfoForm = ({movie, setEditing} : {movie: FirebaseMovie, setEditing: any}) => {
  const toaster = useToaster()
  const navigate = useNavigate()
  const [title, setTitle] = useState(movie.title)
  const [intro, setIntro] = useState(movie.intro)
  const [description, setDescription] = useState(movie.description)
  const [genres, setGenres] = useState(movie.genres)
  const [releaseDate, setReleaseDate] = useState(movie.releaseDate)
  const [trailerUrl, setTrailerUrl] = useState(movie.trailer_url)
  const [resetting, setResetting] = useState<boolean>(false)

  const resetValues = () => {
    setResetting(true)
    setTitle(movie.title)
    setIntro(movie.intro)
    setDescription(movie.description)
    setGenres(movie.genres)
    setReleaseDate(movie.releaseDate)
    setTrailerUrl(movie.trailer_url)
    setResetting(false)
  }

  const updateMovie = async () => {
    const reference = ref(database, 'movies/' + movie.id)
    let updates: any = {}
    updates['title'] = title
    updates['intro'] = intro
    updates['description'] = description
    updates['genres'] = genres
    updates['releaseDate'] = releaseDate
    updates['trailer_url'] = trailerUrl
    await update(reference, updates).then(() => {
      toaster.push(
        <Message style={pushSuccess} type='success' duration={10000} closable>
          <p style={msgInner}>Movie was updated successfully</p>
        </Message>, {placement: 'bottomCenter'}
      )
    }).catch((err) => {
      toaster.push(
        <Message style={pushError} type='error' duration={10000} closable>
          <p style={msgInner}>{err.message}</p>
        </Message>, {placement: 'bottomCenter'}
      )
    })
  }
  return (
    <>
    <Input defaultValue={title} onChange={setTitle} className='v-dash-title' value={resetting ? movie.title! : title} />
    <Input defaultValue={intro} onChange={setIntro} className='m-dash-intro' value={resetting ? movie.intro! : intro} />
    <Input
    defaultValue={description} as={'textarea'}
    rows={5} onChange={setDescription} className='m-dash-des'
    value={resetting ? movie.description! : description} />
    <Input defaultValue={genres} onChange={setGenres}
    className='m-dash-genres bold' value={resetting ? movie.genres! : genres} />
    <Input defaultValue={trailerUrl} onChange={setTrailerUrl}
    className='m-dash-genres bold' value={resetting ? movie.trailer_url! : trailerUrl} />
    <Input defaultValue={releaseDate} onChange={setReleaseDate}
    className='m-dash-release_date bold' value={resetting ? movie.releaseDate! : releaseDate} />
    <p className='pl-1'>Format: YYYYY-MM-dd</p>
    <div className='m-dash-edit-btn-con'>
      <Button style={styles.saveBtn} size='lg' className='mt-2' onClick={updateMovie}>
        Save
      </Button>
      <Button style={styles.resetBtn} size='lg' className='mt-2' onClick={resetValues}>
        Reset
      </Button>
      <Button style={vanumoSecondaryBtn} size='lg' className='mt-2' onClick={() => setEditing(false)}>
        X
      </Button>
    </div>
    </>
  )
}

const styles = {
  saveBtn: {
    backgroundColor: vanumoMainBtn.backgroundColor,
    color: vanumoMainBtn.color,
    fontWeight: vanumoMainBtn.fontWeight,
    boxShadow: vanumoMainBtn.boxShadow,
    width: 200,
  },
  resetBtn: {
    backgroundColor: vanumoSecondaryBtn.backgroundColor,
    color: vanumoSecondaryBtn.color,
    fontWeight: vanumoSecondaryBtn.fontWeight,
    boxShadow: vanumoSecondaryBtn.boxShadow,
    width: 200,
  },
}

export default VMoviePageInfoForm
