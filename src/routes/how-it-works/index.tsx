import React, {FunctionComponent} from 'react'
import MainLayout from '../layouts/mainLayout'
import HIWHero from './components/Hero'
import HIWIntroSection from './components/Introduction'
import InvExample from './components/InvExample'
import HIWRights from './components/Rights'
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
      <div style={styles.wrap}>
        <HIWHero en={en} />
        <HIWIntroSection en={en} />
        <HIWRights en={en} />
        <InvExample en={en} />
      </div>
    </MainLayout>
  )
}


const styles = {
  wrap: {
    paddingTop: 150,
  }
}

export default HowItWorksPage
