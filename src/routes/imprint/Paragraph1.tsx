import React from 'react'
interface IProps {en: boolean}
const Paragraph1: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='juri-paragraph'>
      <h1 className="title">
        1. {en ? 'Content of the website:' : 'Inhalt der Webseite:'}
      </h1>
      <p className="content">
        {en ? (
          <span>
            The contents of this website were created carefully and according to the current knowledge of the author. We are responsible for them only within the framework of general laws, especially for our own content according to § 7 TMG, for external content according to §§ 8 -10 TMG. As a service provider, we are responsible for third-party content at the earliest when we become aware of a concrete infringement. We reserve theright to change or delete informational content in whole or in part, provided that contractual obligations remain unaffected.
          </span>
        ) : (
          <span>
            Die Inhalte dieser Webseite wurden sorgfältig und nach aktuellem Kenntnisstand des Autors erstellt. Wir sind für diese nur im Rahmen der allgemeinen Gesetze verantwortlich, insbesondere für eigene Inhalte nach § 7 TMG, für fremde Inhalte gem. §§ 8 -10 TMG. Als Diensteanbieter sind wir für fremde Inhalte frühestens ab Kenntniserlangung einer konkreten Rechtsverletzung verantwortlich. Wir behalten uns vor, dieinformatorischen Inhalte vollständig oder teilweise zu ändern oder löschen, soweit vertragliche Verpflichtungen unberührt bleiben.
          </span>
        )}
      </p>
    </div>
  )
}

export default Paragraph1
