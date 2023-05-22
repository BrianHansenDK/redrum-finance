import React from 'react'
import { Panel } from 'rsuite';

interface IProps {en: boolean}

const GeneralFaqSection = (props: IProps) => {
  const {en} = props;
  return (
    <div className="faq-section">
      <h2 className="title">
        {en ? 'General' : 'Allgemein'}
      </h2>
      <div className="faq-elements-con">
        <Panel className='faq-box' collapsible shaded
        header={en ? 'How can I register?' : 'Wie kann ich mich registrieren?'}>
          <div className="inner">
            <p>
              {en ?
              'To register, you can download the RedrumPro app from ' +
              'the Google Play Store or Apple Store or visit our website. ' +
              'We offer various registration and login options, including:'
              :
              'Um Dich zu registrieren, kannst Du entweder die RedrumPro-App im Google Play ' +
              'Store oder im Apple Store herunterladen oder unsere Website besuchen. ' +
              'Wir bieten verschiedene Registrierungs- & Anmeldemöglichkeiten an, einschließlich: '
              }
            </p>
            <ul>
              <li>Google</li>
              <li>{en ? 'or using your email address.' : 'oder klassisch mit Deiner E-Mail-Adresse.'}</li>
            </ul>
          </div>
        </Panel>
        <Panel className='faq-box' collapsible shaded
        header={en ? 'Is RedrumPro a web app?' : 'Ist RedrumPro eine Web-App?'}>
          <div className="inner">
            <p>
              {en ?
              'Yes! This means that you can use the RedrumPro features on both the mobile app ' +
              'and the website.'
              :
              'Ja! Das bedeutet, dass du die RedrumPro Funktionen sowohl auf deiner ' +
              'Handyapp, als auch auf der Website nutzen kannst.'
              }
            </p>
          </div>
        </Panel>
        <Panel className='faq-box' collapsible shaded
        header={en ? 'Who can use RedrumPro?' : 'Wer kann RedrumPro nutzen?'}>
          <div className="inner">
            <p>
              {en ?
              'You can use RedrumPro if you meet the following requirements:'
              :
              'Du kannst RedrumPro nutzen, wenn Du folgende Eigenschaften erfüllst:'
              }
            </p>
            <ul>
              <li>{en ? 'You have reached the age of 18.' : 'Du hast das 18. Lebensjahr vollendet.'}</li>
              <li>{en ? 'You have a valid ID card or passport.' : 'Du besitzt einen gültigen Personalausweis oder Reisepass.'}</li>
              <li>{en ? 'You have a SEPA bank account.' : 'Du hast ein SEPA-Bankkonto.'}</li>
              <li>{en ? 'You are not subject to tax outside the EU.' : 'Du bist nicht außerhalb der EU steuerpflichtig.'}</li>
              <li>{en ? 'You have a permanent residence.' : 'Du hast einen dauerhaften Wohnsitz.'}</li>
            </ul>
          </div>
        </Panel>
        <Panel className='faq-box' collapsible shaded
        header={en ? 'Can I invest as a company?' : 'Kann ich als Unternehmen investieren?'}>
          <div className="inner">
            <p>
              {en ?
              'Yes! You only need to indicate the "Company" option during registration and confirm ' +
              'that you are authorized to make contractual decisions for the company.'
              :
              'Ja! Dafür musst du bei der Registrierung lediglich die Option „Unternehmen“ ' +
              'angeben und bestätigen, dass du bevollmächtigt bist für das Unternehmen ' +
              'vertragsrechtliche Entscheidungen zu treffen.'
              }
            </p>
          </div>
        </Panel>
        <Panel className='faq-box' collapsible shaded
        header={en ?
        'Is it possible to open an account with the power of attorney of my parents if I am under 18 years old?' :
        'Ist es möglich, einen Account mit der Vollmacht meiner Eltern zu eröffnen, wenn Ich unter 18 Jahre alt bin?'}>
          <div className="inner">
            <p>
              {en ?
              'No. You can only use RedrumPro if you have reached the age of 18.'
              :
              'Nein. Du kannst RedrumPro nur nutzen, wenn du das 18. Lebensjahr vollendet hast.'
              }
            </p>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default GeneralFaqSection
