import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'rsuite';
import { useMediaQuery } from '../../../../misc/custom-hooks';
import AppNavBar from '../../components/AppNavBar';

interface IProps {
  en: boolean,
  setEn: any
}

const DepositedPage = (props: IProps) => {
  const {en, setEn} = props;
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
        'Your money was succesfully deposited to your account' :
        'Ihr Geld wurde erfolgreich auf Ihr Konto eingezahlt.'
        }
       </p>
       <p className="welcome">
        {en ? 'Welcome to the team!' : 'Willkommen im Team'} 😁
       </p>
       <p className="extra-information">
        {
          en ?
          'You can now invest in various projects and be a part of the production! ' +
          'The projects can be found in the ' :
          'Sie können nun in verschiedene Projekte investieren und Teil der Produktion werden! ' +
          'Die Projekte finden Sie auf dem'
        } <Link to={'/app'}>{en ? 'Dashboard' : 'Dashboard'}
        </Link>
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

export default DepositedPage
