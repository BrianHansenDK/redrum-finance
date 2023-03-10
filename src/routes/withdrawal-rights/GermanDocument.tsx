import React from 'react'
import { Button } from 'rsuite'
import MainLayout from '../layouts/mainLayout'
import DocumentModal from './DocumentModal'
interface IProps {
  en: boolean,
  setEn: any,
  isVisible: boolean,
  closeModal: any,
  openModal: any,
}
const GermanWithdrawalRights = (props: IProps) => {
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

<h1 className="r-main-title"><b><span>Widerrufsrecht &amp;
Muster-Widerrufsformular</span></b></h1>
<div className="inner">
<p className="MsoNormal">&nbsp;</p>

<p className="MsoNormal" ><span >Sie
haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag
zu widerrufen.</span></p>

<p className="MsoNormal" ><span >Die
Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen
benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen
haben bzw. hat. </span></p>

<p className="MsoNormal" ><span >Um Ihr
Widerrufsrecht auszuüben, müssen Sie uns (Redrum Films &amp; Entertainment GmbH,
Hauptstr.26, 10827 Berlin, E-Mail:&nbsp;info@redrumpro.de, vertreten durch,
Rabih Merhi, Tel. +49 176 8000 85 10, Eintragung im Handelsregister.,
Registergericht: Amtsgericht Charlottenburg, Registernummer: <b>HRB 209180 B</b>)&nbsp;mittels
einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder
E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie
können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch
nicht vorgeschrieben ist. </span></p>

<p className="MsoNormal" ><span >Zur Wahrung
der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. </span></p>

<p className="MsoNormal" ><b><span >Folgen
des Widerrufs</span></b></p>

<p className="MsoNormal" ><span >Wenn Sie
diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen
Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die
von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich
und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für
diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung
Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren
wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie
die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist. </span></p>

<p className="MsoNormal" ><span >Sie haben
die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab
dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns
zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor
Ablauf der Frist von vierzehn Tagen absenden. </span></p>

<p className="MsoNormal" ><span >Sie tragen
die unmittelbaren Kosten der Rücksendung der Waren.&nbsp;Sie müssen für einen
etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen
zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren
nicht notwendigen Umgang mit ihnen zurückzuführen ist.<br/>
&nbsp; </span></p>

<p className="MsoNormal"><span>Muster-Widerrufsformular</span></p>

<p className="MsoNormal"><span >Unser Muster-Widerrufsformular im PDF-Format: DOWNLOAD
  <Button appearance='link' onClick={openDocumentModal}>
    <span>(Formular ist im AnhanG)</span>
  </Button><br/>
<br/>
<br/>
Um die zum Download angebotenen PDF-Dateien zu öffnen, benötigen Sie ein
Zusatzprogramm, wie zum Beispiel den Adobe Reader, welchen Sie im Internet
kostenfrei herunterladen können. Die aktuelle Version des Adobe Readers finden
Sie <i>hier</i>.</span></p>
</div>
</div>
<DocumentModal en={en} isOpen={DocumentOpen} closeModal={closeDocumentModal}/>
    </MainLayout>
  )
}

export default GermanWithdrawalRights
