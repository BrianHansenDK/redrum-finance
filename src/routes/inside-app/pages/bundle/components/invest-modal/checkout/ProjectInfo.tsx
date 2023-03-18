import React from 'react'
import { Divider } from 'rsuite'
import { FirebaseBundle, FirebaseMovie } from '../../../../../../../database/Objects'
import DownArrow from '@rsuite/icons/ArrowDownLine'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../../firebase'

interface IProps {
  project: FirebaseBundle,
  movie: any,
  investAmount: number,
  bonus: number,
  en: boolean,
}

const CheckoutProjectInfo = (props: IProps) => {
  const {project, movie, investAmount, en, bonus} = props
  const [theMovie, setTheMovie] = React.useState<FirebaseMovie>()
  React.useEffect(() => {
      const reference = ref(database, 'movies/' + movie)
      onValue(reference, (snap) => {
        setTheMovie(snap.val())
      }, {onlyOnce: true})
  }, [movie])
  return (
    <div className="inner-card">
      <img src={theMovie?.image} alt={`${theMovie?.title} cover image`} className="project-banner-img" />
      <h2 className="project-name">
        {theMovie?.title}
      </h2>
      <p className="fake-select">
        {`${en ? 'Shares' : 'Anteile'}: ${
          project.movies ? (investAmount + bonus) / project.movies?.length :
          investAmount + bonus
        }`}
        <Divider vertical/>
        <DownArrow/>
      </p>
    </div>
  )
}

export default CheckoutProjectInfo
