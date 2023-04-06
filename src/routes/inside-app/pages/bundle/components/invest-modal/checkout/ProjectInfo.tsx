import React from 'react'
import { Divider, SelectPicker } from 'rsuite'
import { FirebaseBundle, FirebaseMovie } from '../../../../../../../database/Objects'
import DownArrow from '@rsuite/icons/ArrowDownLine'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../../firebase'
import { makeRange } from '../../../../../../../misc/custom-hooks'

interface IProps {
  project: FirebaseBundle,
  movie: any,
  investAmount: number,
  bonus: number,
  en: boolean,
  editing: boolean,
  setInvestAmount: any,
}

const CheckoutProjectInfo = (props: IProps) => {
  const {project, movie, investAmount, en, bonus, editing, setInvestAmount} = props
  const [theMovie, setTheMovie] = React.useState<FirebaseMovie>()
  const currentRange = makeRange(1, 1, 10000).map((n) => ({label: `${n}`, value: n}))
  React.useEffect(() => {
      const reference = ref(database, 'movies/' + movie)
      onValue(reference, (snap) => {
        setTheMovie(snap.val())
      }, {onlyOnce: true})
  }, [movie])
  console.log(currentRange)
  return (
    <div className="inner-card">
      <img src={theMovie?.image} alt={`${theMovie?.title} cover image`} className="project-banner-img" />
      <h2 className="project-name">
        {theMovie?.title}
      </h2>
      <SelectPicker
      disabled={!editing}
      className='fake-select'
      label={en ? 'Shares' : 'Anteile'}
      onChange={setInvestAmount}
      value={investAmount}
      data={currentRange}
      />
    </div>
  )
}

export default CheckoutProjectInfo
