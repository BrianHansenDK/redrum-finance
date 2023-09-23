import React from 'react'
import MainLayout from '../layouts/mainLayout'
import './contact.scss'
interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}
const ContactPage = (props: IProps) => {
  const {en, setEn, isVisible, closeModal, openModal} = props
  return (
    <MainLayout openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark={true} en={en} setEn={setEn}>
      <div className="content">
        <h1 className="page-title">
          {en ? 'Contact Us' : 'Kontaktiere Uns'}
        </h1>
        <div className="inner">
          <p className="company">
            Redrum Films & Entertainment GmbH
          </p>
          <p className="street">Hauptstr. 26</p>
          <p className="city">10827 Berlin</p>
          <a href="mailto:info@redrum.com" className="mail">
            info@redrum.com
          </a>
          <p className="phone">0176 8000 8510</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage
