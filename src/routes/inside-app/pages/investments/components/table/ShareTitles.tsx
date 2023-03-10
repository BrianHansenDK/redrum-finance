import React from 'react'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'

const ShareTitles = () => {
  const isLimit = useMediaQuery('(max-width: 650px)')
  return (
    <thead>
      <tr>
      <th>
        Movie
      </th>
      <th>
        Value
      </th>
      <th>
        {isLimit ? 'Return' : 'Minimum return'}
      </th>
      {isLimit ? null : (
      <th>
        Bought
      </th> )}
      </tr>
    </thead>
  )
}

export default ShareTitles
