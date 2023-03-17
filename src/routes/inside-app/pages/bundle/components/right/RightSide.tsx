import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, ButtonToolbar, Col, Modal } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { FirebaseBundle } from '../../../../../../database/Objects'
import { auth, userRef } from '../../../../../../firebase'
import LanguageToggle from '../../../../components/LanguageToggle'
import MainBtn from '../../../../components/MainBtn'
import ConfirmAgeModal from '../ConfirmAgeModal'
import InvestModal from '../invest-modal/InvestModal'
import RecieptModal from '../RecieptModal'
import TransferMoneyModal from '../TransferMoneyModal'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'

interface IProps {
  project: FirebaseBundle,
  en: boolean,
  setEn: any,
  isMobile: boolean,
}

const RightSide: FunctionComponent<IProps> = (props) => {
  const { project, en, setEn, isMobile } = props
    const [isVisible, setVisible] = useState(false)
    const [isInvestVisible, setInvestVisible] = useState(false)
    const [isTransferVisible, setTransferVisible] = useState(false)
    const [available, setAvailable] = useState<any>(0)
    const [reciept, setReciept] = useState(false)
    const [birthYear, setBirthYear] = useState(0)

    const userId = auth.currentUser?.uid
    useEffect(() => {
        userRef(userId, '/money_available', setAvailable)
        userRef(userId, '/birthYear', setBirthYear)
    })

    const date = Date.now()
    const today = new Date(date)
    const age = today.getFullYear() - birthYear
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const openInvestModal = () => {
        setVisible(false)
        if (available == null || available == 0) {
          setTransferVisible(true)
        } else {
          setInvestVisible(true)
        }
    }

    const closeInvestModal = () => {
        setInvestVisible(false)
        setTransferVisible(false)
    }
    const showReciept = () => {
      setReciept(true)
    }
    const hideReciept = () => {
      setReciept(false)
    }

    const styles = {
      wrapper: {
          height: 100 + '%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: isMobile ? 25 : 7 + 'rem',
      },
      card: {
          height: 400,
          width: 100 + '%',
          backgroundColor: '#fbfbfb',
          marginTop: isMobile ? 10 : 1.5 + 'rem',
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
            <Col as={FlexboxGridItem} colspan={isMobile ? 24 : 7}
                style={styles.wrapper} className='flex-column'
            >
                <ProgressItem project={project} en={en} />
                <div style={styles.card} className='flex-column'>
                    {/*<InfoTag />*/}
                    <InfoLines project={project} en={en} />
                    <Button
                    appearance='primary'
                    className='r-btn r-main-btn'
                    onClick={today.getFullYear() - birthYear >= 18 ?
                      openInvestModal :
                      openModal}
                    >
                      {en ? 'Secure shares now' : 'Jetzt Anteile sichern'}
                    </Button>
                    {/*
                      isMobile ? (
                        <Button
                        appearance='primary'
                        className='r-btn r-main-btn'
                        onClick={today.getFullYear() - birthYear >= 18 ?
                          openInvestModal :
                          openModal}
                        >
                          {en ? 'Invest' : 'Investieren'}
                        </Button>
                      ) : (
                        <MainBtn
                        content={en ? 'Invest' : 'Investieren'}
                        pressed={today.getFullYear() - birthYear >= 18 ?
                          openInvestModal :
                          openModal}
                        btnColor='blue'
                        btnAppearance='primary'
                        btnSize='lg'
                        isBlock={false} />
                      )
                        */}

                </div>
            </Col>
            <ConfirmAgeModal visible={isVisible} close={closeModal} openInvestModal={openInvestModal} en={en}/>
            <InvestModal en={en} project={project} close={closeInvestModal} visible={isInvestVisible} showReciept={showReciept} />
            <TransferMoneyModal navPressed={false} close={closeInvestModal} visible={isTransferVisible} />
            <RecieptModal close={hideReciept} isVisible={reciept} />
        </>
    )
}

export default RightSide
