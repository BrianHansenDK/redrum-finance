import React from 'react'
import { Button, Divider, Toggle, Tooltip, Whisper } from 'rsuite'
import { numberWithCommasAsString, useMediaQuery } from '../../../../../../../misc/custom-hooks'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { Link } from 'react-router-dom';
import { auth, userRef } from '../../../../../../../firebase';
import PaypalComponent from '../../../../../../../paypal/PaypalComponent';
import AGBFile from '../../../../../../../misc/donwloadable-pdfs/AGB_AllgemeineGeschäftsbedingungenderRedrumPro27.1.2_FILM.pdf';
import AGBEnglish from '../../../../../../../misc/donwloadable-pdfs/terms_and_conditions.pdf';
import EditSharesBtn from './EditSharesBtn';
import ContractComponent from '../../../../../../test/ContractComponent';
import { FirebaseBundle, FirebaseUser } from '../../../../../../../database/Objects';
import jsPDF from 'jspdf';
import ContractGerman from '../../../../../../test/ContractGerman';
import PaypalModal from './PaypalModal';

interface IProps {
  en: boolean,
  investAmount: number,
  bonus: number,
  address: string | null,
  project: FirebaseBundle,
  investInBundle: any,
  isPaypal: boolean,
  makeOrder: any,
  approve: any,
  editing: boolean,
  editShares: any,
  finishEdit: any,
  user: FirebaseUser,
  ppmodalOpen: boolean,
  openPP: any, closePP: any
}
const CheckoutSummary = (props: IProps) => {
  const {en, investAmount, bonus, address, investInBundle, isPaypal, makeOrder, approve,
  editing, editShares, finishEdit, user, project, ppmodalOpen, openPP, closePP} = props
  const [checked, setChecked] = React.useState<boolean>(false);
  const [checked2, setChecked2] = React.useState<boolean>(false);

  const todayDT = Date.now()
  const today = new Date(todayDT)

  const haveAllInfo =
      (!user?.company_account && ((user?.full_name !== "" && user?.full_name.split(" ").length > 1) && user?.address !== ""
      && user?.birth_date !== "" && user?.title !== undefined
      && user.phone_number && user.country !== "")) || (
        (user?.company_account) && (user?.full_name !== "" && user?.address !== ""
        && user?.birth_date !== "" && user?.title !== undefined
        && user.phone_number && user.country !== ""
        && user.company_name !== undefined && user.role !== "" && user.company_address !== undefined )
      )

  const isMobile = useMediaQuery('(max-width: 1200px)')

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    // @ts-ignore
    doc.html(document.querySelector(en ? "#english-document" : "#german-document"), {
      // @ts-check
      callback: function(pdf){
        pdf.save(`redrum_pro_${project.name!.split(' ').join('_')}_${en ? 'framework_agreement' : 'rahmenvertrag'}.pdf`);
      }
    })
  }

  return (
    <>
    <div className='checkout-card summary'>
      <h2 className="title">
        {en ? 'Summary' : 'Übersicht'}
      </h2>
      <div className="all-summary-info">
        <div className="summary-info">
          <p>
            {en ? 'Amount of shares' : 'Anzahl Anteile'}:
          </p>
          <p className="shares value">
            {numberWithCommasAsString(investAmount)}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Bonus shares' : 'Bonusanteile'}:
          </p>
          <p className="bonus value">
            {bonus}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Price pr. share' : 'Preis je Anteil'}:
          </p>
          <p className="price value">
            1<span className="type-sign">€</span>
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Management fee' : 'Management -Gebühr'}:
          </p>
          <p className="bonus value">
            0 <span className="type-sign">%</span>
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Sum' : 'Summe'}:
          </p>
          <p className="sum value">
            {numberWithCommasAsString(investAmount * 1)} <span className="type-sign">€</span>
          </p>
        </div>
      </div>
      <Divider/>
      <div className="all-summary-sums">
        <div className="summary-info">
          <p>
            {en ? 'Overall shares' : 'Gesamtanteile'}:
          </p>
          <p className="overall-shares value">
            {numberWithCommasAsString(investAmount + bonus)}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Overall sum' : 'Gesamtsumme'}:
            {/*<br/>
            <span className='small'>{en ? 'incl.' : 'inkl.'} MwSt.</span>*/}
          </p>
          <p className="overall-sum value">
            {numberWithCommasAsString(investAmount * 1)} <span className="type-sign">€</span>
          </p>
        </div>
      </div>
      <div className="juristics">
      <Toggle
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        checkedChildren={<CheckIcon />}
        unCheckedChildren={<CloseIcon />}
        />
        <p className="txt">
          {en ?
          `I hereby confirm that I agree with the` :
          'Hiermit bestätige ich, dass ich mit den'
          } <a href={en ? AGBEnglish : AGBFile}
          download={en ? 'redrum_pro_terms_and_conditions' : 'redrum_pro_allgemeine_gescheftsbedingungen'}
          >{en ? 'terms and conditions' : 'AGB'}</a> {en ?
            `and that I am older than 18 years old.` :
            'einverstanden bin und dass ich älter als 18 Jahre alt bin.'
            }
       </p>
      </div>
      <div className="juristics">
      <Toggle
        defaultChecked={checked2}
        onChange={() => setChecked2(!checked2)}
        checkedChildren={<CheckIcon />}
        unCheckedChildren={<CloseIcon />}
        />
        <p className="txt">
          {en ?
          `I hereby agree to the Redrum` :
          'Hiermit stimme ich dem Redrum'
          } <Button appearance='link' onClick={generatePDF}
          style={{padding: 0}}>
            {en ? 'Framework Agreement.' : 'Rahmenvertrag'}
          </Button> {en ?
            `` :
            'zu.'
            }
       </p>
      </div>
      <Whisper
      placement='top'
      trigger={!checked || !checked2 ? isMobile ? 'active' : 'hover' : 'none'}
      speaker={
        <Tooltip>
          {en ?
          'You must agree to our terms and conditions & Framework agreement to continue.' :
          'Sie müssen unseren Allgemeinen Geschäftsbedingungen & Framework agreement zustimmen, um fortzufahren.'
          }
        </Tooltip>
      }>
        <span style={{width: '100%'}} className='mt-2'>
          <Button
          appearance='primary'
          className='r-btn r-main-btn'
          disabled={address == null || !checked || !checked2}
          block
          style={{ pointerEvents: !checked || !checked2 ? 'none' : 'auto' }}
          onClick={isPaypal ? haveAllInfo ? () => openPP() : investInBundle : investInBundle}
          >
            {en ?
            'Order with obligation to pay' :
            'Jetzt Zahlungspflichtig bestellen'}
          </Button>
        </span>
      </Whisper>
      <EditSharesBtn editing={editing} startEditing={editShares} finishEditing={finishEdit}/>
      <div className="hide-this">
        {
          user !== null ? en ? (
            <ContractComponent day={today.toDateString()} user={user} project={project} investAmount={investAmount} bonus={bonus}/>
          ) : (
            <ContractGerman day={today.toDateString()} user={user} project={project} investAmount={investAmount} bonus={bonus}/>
          ) : null
        }

      </div>
    </div>
    <PaypalModal
    investAmount={investAmount}
    investInBundle={investInBundle}
    makeOrder={makeOrder}
    approve={approve}
    close={closePP}
    isOpen={ppmodalOpen} en={en}/>
    </>
  )
}

export default CheckoutSummary
