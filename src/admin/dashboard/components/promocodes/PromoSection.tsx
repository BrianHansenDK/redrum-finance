import React from 'react'
import './promosection.scss'
import { FirebasePromo } from '../../../../database/Objects';
import { getPromoUsages } from '../../../../firebase';
import VanumoLoader from '../VanumoLoader';
import PromoCard from './PromoCard';

const PromoSection = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [promos, setPromos] = React.useState<FirebasePromo[]>([]);

  React.useEffect(() => {
    getPromoUsages(setPromos, setLoading)
  }, []);

  return (
    <div className='promo-section' style={styles.wrap} >
      <h1 className="title">
        Promo section
      </h1>
      <p className="des">
        Here you can see promo codes which has been used and by who.
        You can see how many days ago the promocode has been used, and the username + email of the investor and promoter.
      </p>
      <p className="subline">
        <span>Investor:</span> The one who <span>used</span> the promocode when investing. <br/>
        <span>Promoter:</span> The one who <span>gave</span> their promocode to the Investor.
      </p>
      <div className="cards-section mt-3">
        {
          loading ? (<VanumoLoader/>) : promos.length == 0 ? (
            <p>There are currently no unhandled usages of promo codes</p>
          ) : (
          <>
            {promos.map((promo) => (
              <PromoCard key={promo.created_at} promo={promo}/>
            ))}
          </>)
        }
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    margin: 'auto',
    maxWidth: 1200,
  }
}

export default PromoSection
