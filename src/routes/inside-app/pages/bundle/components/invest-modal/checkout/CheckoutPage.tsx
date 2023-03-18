import { onValue, ref } from 'firebase/database'
import React from 'react'
import { FirebaseBundle, FirebaseMovie } from '../../../../../../../database/Objects'
import { auth, database, userRef } from '../../../../../../../firebase'
import AppNavBar from '../../../../../components/AppNavBar'
import RedrumProLoader from '../../../../../components/RedrumProLoader'
import PaymentMethod from './PaymentMethod'
import PersonalData from './PersonalData'
import CheckoutProjectInfo from './ProjectInfo'
import CheckoutSummary from './Summary'

interface IProps {
  en: boolean,
  navOpen: boolean,
  visible: boolean,
  investAmount: number,
  available?: number,
  bonus: number,
  setEn: any,
  openMenu: any,
  openNav: any,
  closeNav: any,
  project: FirebaseBundle,
  investInBundle: any,
}
const CheckoutPage = (props: IProps) => {
  const {
    en, navOpen, visible, investAmount, available,
    setEn, openMenu, openNav, closeNav, project,
    bonus, investInBundle,
  } = props

  const [address, setAddress] = React.useState<any>('')
  const [fullName, setFullName] = React.useState<any>('')
  const [knownState, setKnownState] = React.useState<any>('')
  const [knownCountry, setKnownCountry] = React.useState<any>('')

  React.useEffect(() => {
    const reference = ref(database, 'users/' + auth.currentUser?.uid)
    onValue(reference, (snap) => {
      setAddress(snap.val().address)
      setFullName(snap.val().full_name)
      setKnownState(snap.val().state)
      setKnownCountry(snap.val().country)
    })
  }, [])


  return (
    <div id="checkout-page" className={visible ? 'active' : ''}>
      <AppNavBar
      fixed
      en={en}
      setEn={setEn}
      openMenu={openMenu}
      navOpen={navOpen}
      openNav={openNav}
      closeNav={closeNav}
      />
          <div className="inner">
        <h1 className="title">
          Checkout
        </h1>
        <div className="content">
          <div className="left-side">
          <div className='checkout-card project'>
            {
              project.movies?.map((movie: FirebaseMovie) => (
                <CheckoutProjectInfo project={project} movie={movie} investAmount={investAmount} en={en} bonus={bonus}/>
              ))
            }
          </div>
          <PersonalData
              en={en} address={address} fullName={fullName} knownState={knownState} knownCountry={knownCountry}/>
              {
                available && available >= investAmount ? null : (
                  <PaymentMethod investAmount={investAmount} en={en}/>
                )
              }

          </div>
          <div className="right-side">
            <CheckoutSummary en={en} investAmount={investAmount} bonus={bonus} address={address} investInBundle={investInBundle}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
