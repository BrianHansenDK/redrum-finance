import React from 'react'
import { RedrumCompany } from '../../database/CompanyInfo'
interface IProps {en: boolean}
const ImprintIntro: React.FunctionComponent<IProps> = (props) => {
  const {en} = props
  return (
    <div className='intro'>
      {/*<p className="juristiction">
        {en ? 'Information according to § 5 TMG:/ § 55 II R StV ' : 'Angaben gemäß § 5 TMG:/ § 55 II R StV '}
      </p>*/}
      <p className="contact-info">
        {RedrumCompany.name} <br/>
        {RedrumCompany.street} <br/>
        {RedrumCompany.city} <br/>
        {en ? 'Germany' : 'Deutschland'}
      </p>
      <p className="entry">
        {en ? (
          <span>
            Entry in the commercial register.<br/>
            Register Court: Amtsgericht Charlottenburg<br/>
            Registration number: HRB 255604 B
          </span>
        ) : (
          <span>
            Eintragung im Handelsregister.<br/>
            Registergericht: Amtsgericht Charlottenburg <br/>
            Registernummer: HRB 255604 B
          </span>
        )}
      </p>
      <p className="contact">
        {en ? (
          <span>
            Rabih Merhi <br/>
            Contact: {RedrumCompany.mail} <br/>
            Phone: 0176 80008510
          </span>
        ) : (
          <span>
            Rabih Merhi <br/>
            Kontakt: {RedrumCompany.mail} <br/>
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
