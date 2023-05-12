import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import { useMediaQuery } from '../../../../misc/custom-hooks'
import AppNavBar from '../../components/AppNavBar'
import './thank-you.scss'
interface IProps {
  en: boolean,
  setEn: any,
}
const ThankYouPage = (props: IProps) => {
  const {en, setEn} = props
  const isMobile = useMediaQuery('(max-width: 1100px)')
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
    const [navOpen, setNavOpen] = React.useState<boolean>(false)
    const openMenu = () => setMenuOpen(true)
    const closeMenu = () => setMenuOpen(false)
    const openNav = () => setNavOpen(true)
    const closeNav = () => setNavOpen(false)
    const navigate = useNavigate()
  return (
    <div className='thank-you-page'>
      <AppNavBar
      fixed
      en={en}
      setEn={setEn}
      openMenu={openMenu}
      navOpen={navOpen}
      openNav={openNav}
      closeNav={closeNav}
       />
       <h1 className="thank-you-title">
        {en ? 'Congratulations!' : 'Herzlichen Glückwunsch! '}
       </h1>
       <p className="under-title">
        {en ?
        'You are now an official producer of' :
        'Du bist nun offizieller Producer von'
        } <strong>The Basement Games</strong>
       </p>
       <p className="welcome">
        {en ? 'Welcome to the team!' : 'Willkommen im Team'} 😁
       </p>
       <p className="extra-information">
        {
          en ?
          'In the' :
          'Im Meine'
        } <Link to={'/app/databank'}>{en ? 'Databank' : 'Meine Dokumente'}
        </Link> {
          en ?
          'section you will find your invoice and the framework contract.' :
          'Bereich findest du deine Rechnung und den Rahmenvertrag.'
        }
       </p>
       <Button
       appearance='primary'
       className='r-btn r-main-btn mt-4'
       onClick={() => navigate('/app')}
       >
        {
          en ? 'Go to dashboard' : 'Zum Dashboard gehen'
        }
       </Button>
    </div>
  )
}

export default ThankYouPage
