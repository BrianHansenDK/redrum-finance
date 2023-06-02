import React from 'react'
import { FirebasePromo, FirebaseUser } from '../../../../database/Objects'
import { addUserMoney, deletePromo, getPromoUsers } from '../../../../firebase';
import VanumoLoader from '../VanumoLoader';
import { Button, Message, Modal, useToaster } from 'rsuite';
import { vanumoColors } from '../../../theme/vanumoTheme';

interface IProps {
  promo: FirebasePromo
}

const PromoCard = (props: IProps) => {
  const {promo} = props;

  const toaster = useToaster();

  const daysAgo = new Date().getTime() - new Date(promo.created_at).getTime()
  const diffDays = Math.ceil(daysAgo / (1000 * 3600 * 24));

  const [investor, setInvestor] = React.useState<FirebaseUser | null>(null);
  const [promoter, setPromoter] = React.useState<FirebaseUser | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPromoUsers(promo, setInvestor, setPromoter, setLoading)
  }, []);

  const addMoneyToUser = () => {
    addUserMoney(promo.promoter_id, promo.promotion_gain);
    toaster.push(
      <Message closable type='success' showIcon duration={5000}>
        {promo.promotion_gain}€ was added to {promoter?.email}'s account <br/>
        The browser will refresh in 5 seconds.
      </Message>
    );
    deletePromo(promo.id);
    window.setTimeout(() => window.location.reload(), 5000);
  }

  return (
    <div className='promo-card'>
      <h1 className={diffDays === 14 ? 'green' : diffDays > 14 ? 'red' : ''}>
        Used {diffDays} {diffDays === 1 ? 'day' : 'days'} ago
      </h1>
      <div className="users">
        {loading ? (<VanumoLoader/>) : investor === null || promoter === null ? null : (
          <>
            <div className="investor">
              <h2 className="user-title">Investor</h2>
              <p className="username">Username: {investor.username}</p>
              <p className="email">Email: {investor.email}</p>
              <p className="invested">Invested: {promo.invested}€ (with bonus)</p>
            </div>
            <div className="promoter">
              <h2 className="user-title">Promoter</h2>
              <p className="username">Username: {promoter.username}</p>
              <p className="email">Email: {promoter.email}</p>
              <p className="gain">Gain: {promo.promotion_gain}</p>
            </div>
          </>
        )}
      </div>
      <div className='txt-btns-wrap' style={{width: '100%', padding: 0, margin: '25px 0 10px'}}>
        <Button
        appearance='primary'
        style={styles.saveBtn}
        onClick={() => {


        }}
        disabled={diffDays < 14}>
          Add {promo.promotion_gain}€ to Promoter
        </Button>
        <Button
        appearance='primary'
        onClick={() => setModalOpen(true)}
        style={styles.resetBtn}>
          Delete
        </Button>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>
          <Modal.Title>
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the promo usage from the database?</p>
        </Modal.Body>
        <Modal.Footer>
        <div className='txt-btns-wrap' style={{width: '100%', padding: 0, margin: '25px 0 10px'}}>
        <Button
        appearance='primary'
        style={styles.resetBtn}
        onClick={() => deletePromo(promo.id)}>
          Delete
        </Button>
        <Button
        appearance='primary'
        onClick={() => setModalOpen(false)}
        style={styles.saveBtn}>
          Cancel
        </Button>
      </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const styles = {
  saveBtn: {
    width: '50%',
    backgroundColor: vanumoColors.main,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
  resetBtn: {
    width: '50%',
    backgroundColor: vanumoColors.red,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
}

export default PromoCard
