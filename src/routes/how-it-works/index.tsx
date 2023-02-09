import React, {FunctionComponent} from 'react'
import MainLayout from '../layouts/mainLayout'
interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  openModal: any,
  closeModal: any,
}

const HowItWorksPage: FunctionComponent<IProps> = (props) => {
  const {en, setEn, isVisible, openModal, closeModal} = props
  return (
    <MainLayout
    en={en}
    setEn={setEn}
    openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark
    >
      index
    </MainLayout>
  )
}

export default HowItWorksPage
