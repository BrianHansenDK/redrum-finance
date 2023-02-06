import React, { useEffect, useState } from 'react'
import { ButtonToolbar, Col, Modal } from 'rsuite'
import { auth, userRef } from '../../../../../../firebase'
import MainBtn from '../../../../components/MainBtn'
import ConfirmAgeModal from '../ConfirmAgeModal'
import InvestModal from '../InvestModal'
import RecieptModal from '../RecieptModal'
import TransferMoneyModal from '../TransferMoneyModal'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'

const RightSide = ({ project }: { project: any }) => {
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
    return (
        <>
            <Col xs={24} sm={24} md={7}
                style={styles.wrapper} className='flex-column'
            >
                <ProgressItem project={project} />
                <div style={styles.card} className='flex-column'>
                    <InfoTag />
                    <InfoLines project={project} />
                </div>
                <MainBtn
                    content={'Invest now'}
                    pressed={ age >= 18 && age !== null ? openInvestModal : openModal}
                    btnColor='blue'
                    btnAppearance='primary'
                    btnSize='lg'
                    isBlock={true}
                />
            </Col>
            <ConfirmAgeModal visible={isVisible} close={closeModal} openInvestModal={openInvestModal} />
            <InvestModal project={project} close={closeInvestModal} visible={isInvestVisible} showReciept={showReciept} />
            <TransferMoneyModal close={closeInvestModal} visible={isTransferVisible} />
            <RecieptModal close={hideReciept} isVisible={reciept} />
        </>
    )
}

const styles = {
    wrapper: {
        height: 100 + '%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 7 + 'rem',
    },
    card: {
        height: 400,
        width: 100 + '%',
        backgroundColor: '#fbfbfb',
        marginTop: 1.5 + 'rem',
        marginBottom: 1.5 + 'rem',
        paddingTop: 2 + 'rem',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 1 + 'rem',
        paddingLeft: 1 + 'rem',
        paddingBottom: 2 + 'rem',
        boxFit: 'border-box',
        borderRadius: 15,
        boxShadow: ' 0 5px 10px 0 rgba(0,0,29, .15)',
    }
}

export default RightSide
