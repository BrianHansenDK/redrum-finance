import React from 'react'
import MainLayout from '../layouts/mainLayout';
import FAQEN from './FAQEN';
import FAQDE from './FAQDE';

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
      {en ? (
        <FAQEN/>
      ) : (
        <FAQDE/>
      )}
    </MainLayout>
  )
}

export default FAQPage
