import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, ButtonToolbar, Col, Modal } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseBundle, FirebaseUser } from '../../../../../../database/Objects'
import { auth, getCurrentUserFunction, userRef } from '../../../../../../firebase'
import LanguageToggle from '../../../../components/LanguageToggle'
import MainBtn from '../../../../components/MainBtn'
import ConfirmAgeModal from '../ConfirmAgeModal'
import InvestModal from '../invest-modal/InvestModal'
import RecieptModal from '../RecieptModal'
import TransferMoneyModal from '../TransferMoneyModal'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'
import { getRealAge, numberWithCommas, useMediaQuery } from '../../../../../../misc/custom-hooks'
import RedrumProLoader from '../../../../components/RedrumProLoader'
import './styles/right-side.scss'

interface IProps {
  project: FirebaseBundle,
  en: boolean,
  setEn: any,
  isMobile: boolean,
  navOpen: boolean,
  openMenu: any,
  openNav: any,
  closeNav: any,
}

const RightSide: FunctionComponent<IProps> = (props) => {
  const {
    project, en, setEn, isMobile,
    navOpen, openMenu, openNav, closeNav,
   } = props
    const [isVisible, setVisible] = useState(false);
    const [isInvestVisible, setInvestVisible] = useState(false);
    const [isTransferVisible, setTransferVisible] = useState(false);
    const [available, setAvailable] = useState<any>(0);
    const [reciept, setReciept] = useState(false);
    const [user, setUser] = React.useState<FirebaseUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);

    const isDesktop = useMediaQuery('(min-width: 1600px)');

    const userId = auth.currentUser?.uid
    useEffect(() => {
      getCurrentUserFunction(userId, setUser, setLoading);
    }, [userId])

    const date = Date.now();
    const today = new Date(date);
    const age = user == null ? 0 : getRealAge(user?.birth_date !== "" ? new Date(user!.birth_date) : today);

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);
    const openInvestModal = () => {
        setVisible(false)
        //if (available == null || available == 0) {
        //  setTransferVisible(true)
        //} else {
          setInvestVisible(true)
        //}
    }

    const closeInvestModal = () => {
        setInvestVisible(false)
        setTransferVisible(false)
    }
    const showReciept = () => setReciept(true);
    const hideReciept = () => setReciept(false);

    const styles = {
      wrapper: {
          height: 100 + '%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: isMobile ? 25 : 7 + 'rem',
      },
      card: {
          height: isDesktop ? 800 : 500,
          width: 100 + '%',
          backgroundColor: '#fbfbfb',
          marginTop: isMobile ? 10 : 0,
          marginBottom: 1.5 + 'rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingRight: 1 + 'rem',
          paddingLeft: 1 + 'rem',
          boxFit: 'border-box',
          borderRadius: 15,
          boxShadow: ' 0 5px 10px 0 rgba(0,0,29, .15)',
      }
  }
    return (
      <>
      {
        loading ? (<RedrumProLoader/>) : user === null ? null : (
          <>
            <Col as={FlexboxGridItem} colspan={isMobile ? 24 : 7}
                style={styles.wrapper} className='flex-column'
            >

                <div style={styles.card} className='flex-column'>
                    <InfoLines project={project} en={en} />
                    <h1 className='right-box-invested-big'>{numberWithCommas(project.currentlyInvested!)}€</h1>
                    <ProgressItem project={project} en={en} />
                    <Button
                    title={project.currentlyInvested! >= project.goal! ? en ? 'Investment capacity reached for project' :
                     'Investitionskapazität für das Projekt erreicht': ''}
                    disabled={project.currentlyInvested! >= project.goal!}
                    appearance='primary'
                    className='r-btn r-main-btn'
                    onClick={age >= 18 ?
                      openInvestModal :
                      openModal}
                    >
                      {en ? 'Secure shares now' : 'Jetzt Anteile sichern'}
                    </Button>
                </div>
            </Col>
            <ConfirmAgeModal visible={isVisible} close={closeModal} openInvestModal={openInvestModal} en={en} age={age} user={user}/>
            <InvestModal en={en} project={project} close={closeInvestModal} visible={isInvestVisible} showReciept={showReciept}
            navOpen={navOpen} setEn={setEn} openMenu={openMenu} openNav={openNav} closeNav={closeNav} />
            <TransferMoneyModal navPressed={false} close={closeInvestModal} visible={isTransferVisible} />
            <RecieptModal close={hideReciept} isVisible={reciept} />
        </>
        )
      }
      </>
    )
}

export default RightSide
