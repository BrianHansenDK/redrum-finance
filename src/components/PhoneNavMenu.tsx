import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer, Nav } from 'rsuite'
import signUpModalStrings from '../library/string/SignUpModal'
import LanguageToggle from '../routes/inside-app/components/LanguageToggle'
interface IProps {
  mainLinks: Array<{}>,
  navLinks: Array<{}>,
  en: boolean,
  setEn: any,
  isMenuOpen: boolean,
  closeMenu: any,
  openModal: any,
}
const PhoneNavMenu: FunctionComponent<IProps> = (props) => {
  const {
    mainLinks,
    navLinks,
    en,
    setEn,
    isMenuOpen,
    closeMenu,
    openModal
  } = props
  const allLinks = mainLinks.concat(navLinks)
  return (
    <Drawer open={isMenuOpen} onClose={closeMenu} size='full'>
      <Drawer.Header>
        <Drawer.Title>
          Navigation
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body className='r-phone-menu-body'>
        <Nav className='r-phone-nav' vertical style={{width: '100%'}}>
          {allLinks.map((item: any) => (
            <Nav.Item key={item.t} as={Link} to={item.to}>
              {item.t}
            </Nav.Item>
          ))}
          <Button
          block
          appearance='primary'
          className='r-btn r-main-btn mb-2'
          onClick={openModal}
          >
            {en ? signUpModalStrings.EN.btn : signUpModalStrings.DE.btn}
          </Button>
          <div className='toggle-con'>
            <LanguageToggle en={en} setEn={setEn} />
          </div>
        </Nav>
      </Drawer.Body>
    </Drawer>
  )
}

export default PhoneNavMenu
