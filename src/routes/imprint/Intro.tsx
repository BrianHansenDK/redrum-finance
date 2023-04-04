import React from 'react'
interface IProps {en: boolean}
const ImprintIntro: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='intro'>
      <p className="juristiction">
        {en ? 'Information according to § 5 TMG:/ § 55 II R StV ' : 'Angaben gemäß § 5 TMG:/ § 55 II R StV '}
      </p>
      <p className="contact-info">
        Redrum Films & Entertainment GmbH <br/>
        Hauptstr.26 <br/>
        10827 Berlin <br/>
        {en ? 'Germany' : 'Deutschland'}
      </p>
      <p className="entry">
        {en ? (
          <span>
            Entry in the commercial register.<br/>
            Register Court: Amtsgericht Charlottenburg<br/>
            Registration number: HRB 209180 B
          </span>
        ) : (
          <span>
            Eintragung im Handelsregister.<br/>
            Registergericht: Amtsgericht Charlottenburg <br/>
            Registernummer: HRB 209180 B
          </span>
        )}
      </p>
      <p className="contact">
        {en ? (
          <span>
            Rabih Merhi <br/>
            Contact: info@redrumpro.de <br/>
            Phone: 0176 80008510
          </span>
        ) : (
          <span>
            Rabih Merhi <br/>
            Kontakt: info@redrumpro.de <br/>
            Telefon: 0176 80008510
          </span>
        )}
      </p>
      <p style={{fontSize: 'x-large', fontWeight: '700'}}>
        Disclaimer
      </p>
    </div>
  )
}

export default ImprintIntro
