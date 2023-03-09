import React from 'react'
import { FlexboxGrid, Footer } from 'rsuite'
import { useMediaQuery } from '../../misc/custom-hooks'
import FooterAppBtns from './FooterAppBtns'
import Navigations from './Navigations'
import PaymentMethods from './PaymentMethods'
import Socials from './Socials'
import './styles/footer.scss'
interface IProps {en: boolean}
const Footer02 = (props: IProps) => {
  const {en} = props
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const colspan = isMobile ? 24 : 12
  return (
    <Footer className='main-footer'>
      <div className='footer-inner'>
        <FlexboxGrid className='footer-inner-1'>
          <FooterAppBtns colspan={colspan} en={en} />
          <Socials colspan={colspan}/>
      </FlexboxGrid>
      <FlexboxGrid className='footer-inner-2'>
        <Navigations colspan={colspan} en={en} isMobile={isMobile}/>
        <PaymentMethods colspan={colspan} en={en}/>
        </FlexboxGrid>
      </div>
    </Footer>
  )
}

export default Footer02
