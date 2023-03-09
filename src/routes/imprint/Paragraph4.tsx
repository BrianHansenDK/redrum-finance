import React from 'react'
interface IProps {en: boolean}
const Paragraph4: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='juri-paragraph'>
      <h1 className="title">
        4. {en ? 'General equality:' : 'Allgemeine Gleichstellung:'}
      </h1>
      <p className="content">
        {en ? (
          <span>
            In the texts mostly only one gender form is chosen to ensure better readability. Unaffected by this, the information on this website refers to all genders.
          </span>
        ) : (
          <span>
            In den Texten wird meist nur eine Geschlechtsform gewählt um eine bessere Lesbarkeit zu gewährleisten. Davon unbeeinflusst beziehen sich die Angaben dieser Webseite auf alle Geschlechter.
          </span>
        )}
      </p>
    </div>
  )
}

export default Paragraph4
