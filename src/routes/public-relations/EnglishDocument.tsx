import React from 'react'
import MainLayout from '../layouts/mainLayout'
import BANNER from '../../assets/comic-images/pictureredrumapp02_11_2023/appbannerpicure/Banner_PublicRelation.jpg'

interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}
const EnglishRelations = (props: IProps) => {
  const {en, setEn, isVisible, closeModal, openModal} = props
  return (
    <MainLayout openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark={true} en={en} setEn={setEn}>
      <div className="WordSection1">

      <img className='banner-image' src={BANNER} alt="Banner" />

<h1 className="r-main-title"><b><span >Public Relations</span></b></h1>
<div className="inner">
<p className="MsoNormal">&nbsp;</p>

<p className="MsoNormal" ><span >Dear
media representatives,</span></p>

<p className="MsoNormal" ><span >Welcome
to the Public Relations department.</span></p>

<p className="MsoNormal" ><span >Do you
want to report on REDRUM PRO? Conduct a newspaper interview, broadcast a radio
or TV segment, or invite us to an event?</span></p>

<p className="MsoNormal" ><span >Thumbs
up! We appreciate your interest.</span></p>

<p className="MsoNormal" ><span >Please
contact us at: <a href='mailto:info@redrumpro.com?subject=Support'>info@redrumpro.com.</a></span></p>

<p className="MsoNormal" >&nbsp;</p>

<p className="MsoNormal" >&nbsp;</p>

<p className="MsoNormal">&nbsp;</p>
</div>
</div>
    </MainLayout>
  )
}

export default EnglishRelations
