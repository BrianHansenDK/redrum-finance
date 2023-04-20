import React from 'react'
import { Link } from 'react-router-dom'
import { FlexboxGrid, Nav } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { checkIfFirefox } from '../../misc/custom-hooks'
interface IProps {
  en: boolean,
  colspan: any,
  isMobile: boolean
}
const Navigations: React.FunctionComponent<IProps> = (props) => {
  const {en, colspan, isMobile} = props;
  const isFirefox = checkIfFirefox();
  return (
    <>
      {isFirefox ? (
        <FlexboxGridItem as={FlexboxGrid} colspan={colspan} className='left-side'>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 8} className='nav-element'>
            <p className='title'>
              {en ? 'Information' : 'Wissenswertes'}
            </p>
            <Nav.Item as={'a'} href='/how-it-works'>
              {en ? 'How It Works' : 'So Funktioniert Es'}
            </Nav.Item>
            <Nav.Item as={'a'} href='/'>
              FAQ
            </Nav.Item>
          </Nav>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 5} className='nav-element'>
            <p className='title'>
              {en ? 'About Us' : 'Über Uns'}
            </p>
            <Nav.Item as={'a'} href='/contact'>
              {en ? 'Contact' : 'Kontakt'}
            </Nav.Item>
            <Nav.Item as={'a'} href='/about-us'>
              {en ? 'About Us' : 'Über Uns'}
            </Nav.Item>
            <Nav.Item as={'a'} href='/why-movies'>
              {en ? 'Why Movies' : 'Warum Filme'}
            </Nav.Item>
          </Nav>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 8} className='nav-element'>
            <p className='title'>
              {en ? 'Legal' : 'Rechtliches'}
            </p>
            <Nav.Item as={'a'} href='/terms-and-conditions'>
              {en ? 'GTC' : 'AGB'}s
            </Nav.Item>
            <Nav.Item as={'a'} href={'/privacy-policy'}>
              {en ? 'Privacy & Data Protection' : 'Privatsphäre & Datenschutz'}
            </Nav.Item>
            <Nav.Item as={'a'} href='/imprint'>
              {en ? 'Imprint' : 'Impressum'}
            </Nav.Item>
            <Nav.Item as={'a'} href='/public-relations'>
              Public Relations
            </Nav.Item>
            <Nav.Item as={'a'} href='/withdrawal-rights'>
              {en ? 'Withdrawal Rights' : 'Widerrufsrecht'}
            </Nav.Item>
          </Nav>
        </FlexboxGridItem>
      ) : (
        <FlexboxGridItem as={FlexboxGrid} colspan={colspan} className='left-side'>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 8} className='nav-element'>
            <p className='title'>
              {en ? 'Information' : 'Wissenswertes'}
            </p>
            <Nav.Item as={Link} to='/how-it-works'>
              {en ? 'How It Works' : 'So Funktioniert Es'}
            </Nav.Item>
            <Nav.Item as={Link} to='/'>
              FAQ
            </Nav.Item>
          </Nav>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 5} className='nav-element'>
            <p className='title'>
              {en ? 'About Us' : 'Über Uns'}
            </p>
            <Nav.Item as={Link} to='/contact'>
              {en ? 'Contact' : 'Kontakt'}
            </Nav.Item>
            <Nav.Item as={Link} to='/about-us'>
              {en ? 'About Us' : 'Über Uns'}
            </Nav.Item>
            <Nav.Item as={Link} to='/why-movies'>
              {en ? 'Why Movies' : 'Warum Filme'}
            </Nav.Item>
          </Nav>
          <Nav vertical as={FlexboxGridItem} colspan={isMobile ? 24 : 8} className='nav-element'>
            <p className='title'>
              {en ? 'Legal' : 'Rechtliches'}
            </p>
            <Nav.Item as={Link} to='/terms-and-conditions'>
              {en ? 'GTC' : 'AGB'}s
            </Nav.Item>
            <Nav.Item as={Link} to={'/privacy-policy'}>
              {en ? 'Privacy & Data Protection' : 'Privatsphäre & Datenschutz'}
            </Nav.Item>
            <Nav.Item as={Link} to='/imprint'>
              {en ? 'Imprint' : 'Impressum'}
            </Nav.Item>
            <Nav.Item as={Link} to='/public-relations'>
              Public Relations
            </Nav.Item>
            <Nav.Item as={Link} to='/withdrawal-rights'>
              {en ? 'Withdrawal Rights' : 'Widerrufsrecht'}
            </Nav.Item>
          </Nav>
        </FlexboxGridItem>
      )}

    </>

  )
}

export default Navigations
