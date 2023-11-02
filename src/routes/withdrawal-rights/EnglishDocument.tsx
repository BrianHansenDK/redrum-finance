import React from 'react'
import { Button } from 'rsuite'
import MainLayout from '../layouts/mainLayout'
import DocumentModal from './DocumentModal'
import BANNER from '../../assets/comic-images/pictureredrumapp02_11_2023/Banner_Wiederufsrecht.jpg'


interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}
const EnglishWithdrawalRights = (props: IProps) => {
  const {en, setEn, isVisible, closeModal, openModal} = props
  const [DocumentOpen, setDocumentOpen] = React.useState<boolean>(false)
    const openDocumentModal = () => setDocumentOpen(true)
    const closeDocumentModal = () => setDocumentOpen(false)
  return (
    <MainLayout openModal={openModal}
    closeModal={closeModal}
    isVisible={isVisible}
    dark={true} en={en} setEn={setEn}>
      <div className="WordSection1">

      <img className='banner-image' src={BANNER} alt="Banner" />

<h1 className="r-main-title"><b><span >Withdrawal right &amp;
Withdrawal</span></b></h1>
<div className="inner">
<p className="MsoNormal">&nbsp;</p>

<p className="MsoNormal"><span >You have the right to withdraw from this contract within
fourteen days without giving any reason.</span></p>

<p className="MsoNormal"><span >The withdrawal period will expire after fourteen days from the
day on which you acquire, or a third party other than the carrier and indicated
by you acquires, physical possession of the goods.</span></p>


<p className="MsoNormal"><span >To exercise the right of withdrawal, you must inform us (Redrum
Films &amp; Entertainment GmbH, Hauptstr.26, 10827 Berlin, email:
info@redrumpro.de, represented by Rabih Merhi, phone: +49 176 8000 85 10,
registered in the commercial register, Register court: Amtsgericht
Charlottenburg, Register number: HRB 209180 B) of your decision to withdraw
from this contract by an unequivocal statement (e.g. a letter sent by post, fax
or e-mail). You may use the attached model withdrawal form, but it is not
obligatory.</span></p>

<p className="MsoNormal"><span >To meet the withdrawal deadline, it is sufficient for you to send
your communication concerning your exercise of the right of withdrawal before
the withdrawal period has expired.</span></p>

<p className="MsoNormal">&nbsp;</p>

<h4 className="MsoNormal"><span >Effects of withdrawal</span></h4>

<p className="MsoNormal"><span >If you withdraw from this contract, we shall reimburse to you
all payments received from you, including the costs of delivery (with the
exception of the supplementary costs resulting from your choice of a type of
delivery other than the least expensive type of standard delivery offered by
us), without undue delay and in any event not later than fourteen days from the
day on which we are informed about your decision to withdraw from this
contract. We will carry out such reimbursement using the same means of payment
as you used for the initial transaction, unless you have expressly agreed
otherwise; in any event, you will not incur any fees as a result of such
reimbursement. We may withhold reimbursement until we have received the goods
back or you have supplied evidence of having sent back the goods, whichever is
the earliest.</span></p>

<p className="MsoNormal"><span >You shall send back the goods or hand them over to us, without
undue delay and in any event not later than fourteen days from the day on which
you communicate your withdrawal from this contract to us. The deadline is met
if you send back the goods before the period of fourteen days has expired.</span></p>

<p className="MsoNormal"><span >You will have to bear the direct cost of returning the goods.
You are only liable for any diminished value of the goods resulting from the
handling other than what is necessary to establish the nature, characteristics
and functioning of the goods.</span></p>

<p className="MsoNormal">&nbsp;</p>

<h4 className="MsoNormal"><span >Model withdrawal form</span></h4>

<p className="MsoNormal"><span >Our Model withdrawal as a PDF document:
  <Button appearance='link' onClick={openDocumentModal}>
  DOWNLOAD
  </Button></span></p>

<p className="MsoNormal"><i >To open the offered PDF files for download, you need an
additional program such as Adobe Reader, which you can download for free on the
internet. You can find the current version of Adobe Reader
<a href="https://get.adobe.com/reader" target='_blank' rel='noreferrer'> here. </a>
</i></p>
</div>
</div>
<DocumentModal isOpen={DocumentOpen} closeModal={closeDocumentModal} en={en}/>
    </MainLayout>
  )
}

export default EnglishWithdrawalRights
