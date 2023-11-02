import React from 'react'
import MainLayout from '../layouts/mainLayout'
import './contact.scss'
import { RedrumCompany } from '../../database/CompanyInfo'
import BANNER from '../../assets/comic-images/pictureredrumapp02_11_2023/Banner_CONTACTus.jpg'

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
        <img src={BANNER} alt="Banner" style={{display: 'block', margin: '0 auto 50px'}} />
        <h1 className="page-title" style={{textAlign: 'center'}}>
          {en ? 'Contact Us' : 'Kontaktiere Uns'}
        </h1>
        <div className="inner">
          <p className="company">
            {RedrumCompany.name}
          </p>
          <p className="street">{RedrumCompany.street}</p>
          <p className="city">{RedrumCompany.city}</p>
          <a href={`mailto:${RedrumCompany.mail}`} className="mail">
            {RedrumCompany.mail}
          </a>
          <p className="phone">0176 8000 8510</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage
