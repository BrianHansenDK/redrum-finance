import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Loader, Table } from 'rsuite'
import { database } from '../../../../../../firebase'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'

const ShareRow = ({share}: {share: any}) => {
  const [movieTitle, setMovieTitle] = useState('')
  const [gReturn, setGReturn] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const date = new Date(parseInt(share.id.toString().split('-')[0]))
  useEffect(() => {
    setLoading(true)
    const movieRef = ref(database, 'movies/' + share.movie)
    onValue(movieRef, (snap) => {
      setMovieTitle(snap.val().title)
    })
    const projectRef = ref(database, 'projects/' + share.project)
    onValue(projectRef, (snap) => {
      setGReturn(snap.val().guaranteedReturn)
    })
    setLoading(false)
  })
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
          {numberWithCommas((share.amount + (share.amount * ((gReturn) / 100))).toFixed(2)
          .toString().replace('.', ','))}€
        </td>
        <td>
          {date.toLocaleDateString()} -  {date.toLocaleTimeString()}
        </td>
      </tr>
    )}

    </>
  )
}

export default ShareRow
