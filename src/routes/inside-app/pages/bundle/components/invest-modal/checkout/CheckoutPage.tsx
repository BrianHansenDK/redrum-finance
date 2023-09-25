import { onValue, ref } from 'firebase/database'
import React from 'react'
import { FirebaseBundle, FirebaseMovie, FirebaseUser } from '../../../../../../../database/Objects'
import { auth, database, userRef } from '../../../../../../../firebase'
import AppNavBar from '../../../../../components/AppNavBar'
import RedrumProLoader from '../../../../../components/RedrumProLoader'
import PaymentMethod from './PaymentMethod'
import PersonalData from './PersonalData'
import CheckoutProjectInfo from './ProjectInfo'
import CheckoutSummary from './Summary'
import CloseCheckoutBtn from './CloseCheckoutBtn'

interface IProps {
  closeSelf: any,
  en: boolean,
  navOpen: boolean,
  visible: boolean,
  investAmount: number,
  setInvestAmount: any,
  available?: number,
  bonus: number,
  setEn: any,
  openMenu: any,
  openNav: any,
  closeNav: any,
  project: FirebaseBundle,
  allCodes: string[]
  code: string,
  setPromoCode: any,
  investInBundle: any,
  isPaypal: boolean,
  makeItPaypal: Function,
  makeItDeposit: Function,
  makeOrder: any,
  approveOrder: any,
  ppmodalOpen: boolean,
  openPP: any, closePP: any
}
const CheckoutPage = (props: IProps) => {
  const {
    en, navOpen, visible, investAmount, available,
    setEn, openMenu, openNav, closeNav, project,
    bonus, allCodes, code, setPromoCode, investInBundle, isPaypal, makeItPaypal, makeItDeposit,
    makeOrder, approveOrder, closeSelf, setInvestAmount,
    ppmodalOpen, openPP, closePP
  } = props

  const [user, setUser] = React.useState<FirebaseUser | null>(null)
  const [zip, setZip] = React.useState<any>('')
  const [city, setCity] = React.useState<any>('')
  const [street, setStreet] = React.useState<any>('')
  const [hNum, setHNum] = React.useState<any>('')
  const [aA1, setaA1] = React.useState<any>('')
  const [aA2, setaA2] = React.useState<any>('')
  const [fullName, setFullName] = React.useState<any>('')
  const [knownState, setKnownState] = React.useState<any>('')
  const [knownCountry, setKnownCountry] = React.useState<any>('')
  const [sharesEditable, setSharesEditable] = React.useState<boolean>(false);

  const editTheShares = () => setSharesEditable(true);
  const finishEditing = () => setSharesEditable(false);

  React.useEffect(() => {
    const reference = ref(database, 'users/' + auth.currentUser?.uid)
    onValue(reference, (snap) => {
      setZip(snap.val().zip_code)
      setCity(snap.val().city)
      setStreet(snap.val().street)
      setHNum(snap.val().house_number)
      setaA1(snap.val().address_extra_1)
      setaA2(snap.val().address_extra_2)
      setFullName(snap.val().full_name)
      setKnownState(snap.val().state)
      setKnownCountry(snap.val().country)
      setUser(snap.val())
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
              project.movies?.map((movie: number) => (
                <CheckoutProjectInfo
                  project={project}
                  movie={movie}
                  investAmount={investAmount / project.movies!.length}
                  en={en}
                  bonus={bonus} editing={sharesEditable} setInvestAmount={setInvestAmount}
                />
              ))
            }
          </div>
            <PersonalData
            en={en}
            zip={zip} city={city} street={street}
            hNum={hNum} aA1={aA1} aA2={aA2}
            fullName={fullName}
            knownState={knownState}
            knownCountry={knownCountry}
            user={user!}
            />
           <PaymentMethod
           investAmount={investAmount}
           en={en}
           makeItPaypal={makeItPaypal}
           makeItDeposit={makeItDeposit}
           />
          </div>
          <div className="right-side">
            <CheckoutSummary
              en={en}
              investAmount={investAmount}
              project={project}
              bonus={bonus}
              address={`${street} ${hNum}, ${zip} ${city}${aA1 !== '' ? `, ${aA1}`: ''}${aA2 !== '' ? `, ${aA2}`: ''}`}
              investInBundle={investInBundle}
              isPaypal={isPaypal}
              makeOrder={makeOrder}
              approve={approveOrder}
              editing={sharesEditable}
              editShares={editTheShares}
              finishEdit={finishEditing}
              allCodes={allCodes}
              promoCode={code}
              setPromoCode={setPromoCode}
              user={user!} ppmodalOpen={ppmodalOpen} openPP={openPP} closePP={closePP}/>
          </div>
        </div>
      </div>
      <CloseCheckoutBtn en={en} closeCheckout={closeSelf}/>
    </div>
  )
}

export default CheckoutPage
function makeItDeposit() {
  throw new Error('Function not implemented.')
}
