import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../../../../../firebase'
import { mainColors } from '../../../themes/colors'
import mainShadows from '../../../themes/shadows'

const RecieptSharesInfo = ({share}: {share:any}) => {
  const [movie, setMovie] = useState<any>(null)
  const reference = ref(database, 'movies/' + parseInt(share.movie))
  useEffect(() => {
    onValue(reference, (snap) => {setMovie(snap.val())})
  }, [share.movie])
  return (
    <div style={styles.wrap}>
      {movie !== null && (<img src={movie.image} alt={movie.title} style={styles.cover} />) }
      <div style={styles.infoWrap}>
        <h2 style={styles.title}>{movie !== null && movie.title}</h2>
        <h3 style={styles.des}>
          You gained: {share.amount} shares
        </h3>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
  infoWrap: {
    marginLeft: 45,
  },
  title: {
    fontSize: 22.5,
    color: mainColors.dark,
    lineHeight: 1,
    marginBottom: 7.5,
  },
  des: {
    fontSize: 16.5,
    color: mainColors.dark,
    lineHeight: 1,
  },
  cover: {
    width: 122.5,
    height: 200,
    borderRadius: 5,
    boxShadow: mainShadows.image,
  }
}

export default RecieptSharesInfo
