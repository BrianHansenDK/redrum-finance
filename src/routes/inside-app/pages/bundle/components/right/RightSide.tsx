import React, { useState } from 'react'
import { ButtonToolbar, Col, Modal } from 'rsuite'
import MainBtn from '../../../../components/MainBtn'
import ConfirmAgeModal from '../ConfirmAgeModal'
import InfoLines from './InfoLines'
import InfoTag from './InfoTag'
import ProgressItem from './ProgressItem'

const RightSide = ({ project }: { project: any }) => {
    const [isVisible, setVisible] = useState(false)
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
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
                    pressed={openModal}
                    btnColor='blue'
                    btnAppearance='primary'
                    btnSize='lg'
                    isBlock={true}
                />
            </Col>
            <ConfirmAgeModal visible={isVisible} close={closeModal} />
        </>
    )
}

const styles = {
    wrapper: {
        height: 100 + '%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 8 + 'rem',
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