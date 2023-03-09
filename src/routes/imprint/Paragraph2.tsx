import React from 'react'
interface IProps {en: boolean}
const Paragraph2: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='juri-paragraph'>
      <h1 className="title">
        2. {en ? 'Reference to external pages:' : 'Verweisung auf fremde Seiten:'}
      </h1>
      <p className="content">
        {en ? (
          <span>
            Contents of external websites to which we refer directly or indirectly (through "hyperlinks" or "deep links") are outside our area of responsibility and we do not adopt them as our own. At the time of linking, we were not aware of any illegal content on the linked websites. Since we have no influence whatsoever on the current and future design and content of the linked websites, we expressly distance ourselves from all content of linked websites that has been changed since the link was created. The provider of the linked website is solely liable for all contents and in particular for damages resulting from the use of the information available on the linked websites. If we become aware of illegal, unlawful or incorrect content on websites that we link to, we will remove the link.
          </span>
        ) : (
          <span>
            Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen (durch „Hyperlinks“ oder „Deeplinks“), liegen außerhalb unseres Verantwortungsbereiches und machen wir uns nicht zu Eigen. Zum Zeitpunkt der Linksetzung waren für uns keine illegalen Inhalte auf den verlinkten Webseiten erkennbar. Da wir auf die aktuelle und zukünftige Gestaltung die Inhalte der verlinkten Webseiten keinerlei Einfluss haben, distanzieren wir uns ausdrücklich von allen Inhalten verlinkter Webseiten, die nach der Linksetzung verändert wurden. Für alle Inhalte und insbesondere für Schäden, die aus der Nutzungder in den verlinkten Webseiten aufrufbaren Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verlinkt wurde. Erhalten wir von illegalen, rechtswidrigen oder fehlerhaften Inhalten auf Webseiten Kenntnis, die wir verlinken, werden wir die Verlinkung aufheben.
          </span>
        )}
      </p>
    </div>
  )
}

export default Paragraph2
