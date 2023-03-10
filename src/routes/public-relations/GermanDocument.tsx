import React from 'react'
import MainLayout from '../layouts/mainLayout'
interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}
const GermanRelations = (props: IProps) => {
  const {en, setEn, isVisible, closeModal, openModal} = props
  return (
    <MainLayout openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark={true} en={en} setEn={setEn}>
      <div className="WordSection1">

<h1 className="r-main-title"><b><span>Public Relations</span></b></h1>
<div className="inner">
<p className="MsoNormal">&nbsp;</p>

<p className="MsoNormal" ><span >Liebe Medienvertreter,</span></p>

<p className="MsoNormal" ><span >willkommen
im Bereich Public Relations. </span></p>

<p className="MsoNormal" ><span >Sie
möchten über REDRUM PRO berichten?&nbsp;Ein Zeitungsinterview führen, einen
Radio- oder TV-Beitrag senden&nbsp;oder zu einem Event einladen? </span></p>

<p className="MsoNormal" ><span >Daumen
hoch! Wir freuen uns über Ihr Interesse. </span></p>

<p className="MsoNormal" ><span >Wenden
Sie sich bitte an:&nbsp;<a href='mailto:info@redrumpro.de?subject=Support'>info@redrumpro.de.</a></span></p>

<p className="MsoNormal" >&nbsp;</p>

<p className="MsoNormal" >&nbsp;</p>

<p className="MsoNormal">&nbsp;</p>
</div>
</div>
    </MainLayout>
  )
}

export default GermanRelations
