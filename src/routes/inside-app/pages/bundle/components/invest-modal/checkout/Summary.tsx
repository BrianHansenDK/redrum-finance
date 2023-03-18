import React from 'react'
import { Button, Divider, Toggle } from 'rsuite'
import { numberWithCommasAsString } from '../../../../../../../misc/custom-hooks'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { Link } from 'react-router-dom';
import { auth, userRef } from '../../../../../../../firebase';

interface IProps {
  en: boolean,
  investAmount: number,
  bonus: number,
  address: string | null,
  investInBundle: any,
}
const CheckoutSummary = (props: IProps) => {
  const {en, investAmount, bonus, address, investInBundle} = props
  const [checked, setChecked] = React.useState<boolean>(false)

  return (
    <div className='checkout-card summary'>
      <h2 className="title">
        Summary
      </h2>
      <div className="all-summary-info">
        <div className="summary-info">
          <p>
            {en ? 'Price pr. share' : 'Preis je Anteil'}:
          </p>
          <p className="price">
            1€
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Amount of shares' : 'Anzahl Anteile'}:
          </p>
          <p className="shares">
            {numberWithCommasAsString(investAmount)}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Sum' : 'Summe'}:
          </p>
          <p className="sum">
            {numberWithCommasAsString(investAmount * 1)} €
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Bonus shares' : 'Bonusanteile'}:
          </p>
          <p className="bonus">
            {bonus}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Management fee' : 'Management -Gebühr'}:
          </p>
          <p className="bonus">
            0%
          </p>
        </div>
      </div>
      <Divider/>
      <div className="all-summary-sums">
        <div className="summary-info">
          <p>
            {en ? 'Overall shares' : 'Gesamtanteile'}:
          </p>
          <p className="overall-shares">
            {numberWithCommasAsString(investAmount + bonus)}
          </p>
        </div>
        <div className="summary-info">
          <p>
            {en ? 'Overall sum' : 'Gesamtsumme'}:
            <br/>
            <span className='small'>{en ? 'incl.' : 'inkl.'} MwSt.</span>
          </p>
          <p className="overall-sum">
            {numberWithCommasAsString(investAmount * 1)} €
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
          } <a href='/terms-and-conditions' target='_blank'>{en ? 'terms and conditions' : 'AGB'}</a> {en ?
            `and that I am older than 18 years old.` :
            'einverstanden bin und dass ich älter als 18 Jahre alt bin.'
            }
       </p>
      </div>
      <Button
      appearance='primary'
      className='r-btn r-main-btn mt-2'
      disabled={address == null || !checked}
      onClick={investInBundle}
      >
        {en ? 'Continue' : 'Weiter'}
      </Button>
    </div>
  )
}

export default CheckoutSummary
