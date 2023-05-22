import React from 'react'
import MainLayout from '../layouts/mainLayout';
import FAQEN from './FAQEN';
import FAQDE from './FAQDE';
import './styles/faqpage.scss'
import GeneralFaqSection from './GeneralFaqSection';
import DetailedFaqSection from './DetailedFaqSection';

interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}

const FAQPage = (props: IProps) => {
  const {en, setEn, isVisible, closeModal, openModal} = props;

  return (
    <MainLayout openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark={true} en={en} setEn={setEn}>
      <div className="faqpage-inner">
      <h1 className="page-title">{en ? 'Frequently asked questions' : 'Häufig gestellte Fragen'}</h1>
      <GeneralFaqSection en={en}/>
      <DetailedFaqSection en={en}/>
      </div>
    </MainLayout>
  )
}

export default FAQPage
