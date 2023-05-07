import { get, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Loader, Table } from 'rsuite'
import { database } from '../../../../../../firebase'
import { numberWithCommas, useMediaQuery } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'

interface IProps {
  share: any, sum: number
}

const ShareRow = (props: IProps) => {
  const {share, sum} = props;
  const [movieTitle, setMovieTitle] = useState('')
  const [gReturn, setGReturn] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const date = new Date(parseInt(share.id.toString().split('-')[0]))

  const isLimit = useMediaQuery('(max-width: 650px)')
  useEffect(() => {
    setLoading(true)
    const movieRef = ref(database, 'movies/' + share.movie)
    get(movieRef).then((snap) => {
      setMovieTitle(snap.val().title)
    })
    const projectRef = ref(database, 'projects/' + share.project)
    get(projectRef).then((snap) => {
      setGReturn(snap.val().guaranteedReturn)
    })
    setLoading(false)
  }, [])
  return (
    <>
    {loading ? (
      <div>
        <Loader size='lg' speed='slow' content='Loading...' />
      </div>
    ) : (
      <tr>
        <td>
          {movieTitle}
        </td>
        <td>
          {share.amount}€
        </td>
        <td
        style={{
          color: share.amount < share.amount + (share.amount * ((gReturn) / 100)) ? mainColors.success : mainColors.red
        }}
        >
          {numberWithCommas((share.amount + (share.amount * (gReturn / 100))).toFixed(2)).toString().replace('.', ',')}€
        </td>
        { isLimit ? null : (
        <td>
        {date.toLocaleDateString()} -  {date.toLocaleTimeString()}
        </td>
        )}
      </tr>
    )}

    </>
  )
}

export default ShareRow
