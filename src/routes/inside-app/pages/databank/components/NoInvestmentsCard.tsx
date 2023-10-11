import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import Empty from '../../../../../assets/empty_img.png'
import Bonus from '../../../../../assets/bonus-icon.jpg'
import { auth } from '../../../../../firebase'

interface IProps {title: string, en: Boolean, bonus?: Boolean}
const NoInvestmentsCard = (props: IProps) => {
  const {title, en, bonus = false} = props;
  const navigate = useNavigate()
  return (
    <div className='empty-box'>
      <h1 className="box-title">
        {title}
      </h1>
      <img 
      src={!bonus? Empty : Bonus} alt={!bonus? "A brown box with nothing inside" : 'A yellow envelope containing a cash bonus!'} 
      className="box-img" />
      { !bonus? (
        <>
          {en ? (
            <p className="instructions">
              You can invest in a project on the Dashboard. <br/>
              You can either click on the dashboard on the menu, or press the button below.
            </p>
          ) : (
            <p className="instructions">
              Sie können in ein Projekt auf dem Dashboard investieren. <br/>
              Sie können entweder auf das Dashboard im Menü klicken oder den folgenden Button drücken.
            </p>
          )}
        </>
        ) :
        (
          <>
          {en ? (
            <p className="instructions">
            Invite your friends now and receive 10% of the total amount when they invest
            €50 or more. Once your code is used, you will receive the respective amount credited
            to your internal RedrumPro account after 14 days. You can use the balance for
            further RedrumPro projects or transfer it to your bank account.
            </p>
          ) : (
            <p className="instructions">
              Lade deine Freunde ein und erhalte 10% der Gesamtsumme, wenn sie ab 50€
              investieren. Sobald dein Code genutzt wurde, erhältst du nach 14 Tagen die jeweilige
              Summe auf dein internes RedrumPro Konto gutgeschrieben. Du kannst das Guthaben
              entweder für weitere RedrumPro Projekte nutzen oder auf dein Bankkonto
              überweisen.
            </p>
          )} 
          <p className="instructions">
              {en? 'Your' : 'Dein'} Code: <span className='font-bold'>{auth.currentUser?.uid}</span>
            </p>
        </>
        )
      }
      {
        !bonus? (
          <Button appearance='primary' className='r-btn r-main-btn' onClick={() => navigate('/app')}>
            {en ? 'Go to Dashboard' : 'Zum Dashboard'}
          </Button>
        ) : null
      } 
      
    </div>
  )
}

export default NoInvestmentsCard
