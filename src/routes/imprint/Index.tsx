import React from 'react'
import MainLayout from '../layouts/mainLayout'
import ImprintIntro from './Intro'
import Paragraph1 from './Paragraph1'
import Paragraph2 from './Paragraph2'
import Paragraph3 from './Paragraph3'
import Paragraph4 from './Paragraph4'
import './style/imprint.scss'

interface IProps {
  en: boolean,
  isOpen: boolean,
  setEn: any,
  openModal: any,
  closeModal: any,
}
const ImprintPage: React.FunctionComponent<IProps> = (props) => {
  const {en, setEn, isOpen, openModal, closeModal} = props
  return (
    <MainLayout
      openModal={openModal}
      closeModal={closeModal}
      isVisible={isOpen}
      dark={true}
      en={en}
      setEn={setEn}>
      <div className="r-page-wrap imprint-content">
        <h1 className="r-main-title">
          {en ? 'Imprint' : 'Impressum'}
        </h1>
        <div className="imprint-inner">
        <ImprintIntro en={en} />
        <Paragraph1 en={en} />
        <Paragraph2 en={en} />
        <Paragraph3 en={en}/>
        <Paragraph4 en={en}/>
        </div>
      </div>
    </MainLayout>
  )
}

export default ImprintPage