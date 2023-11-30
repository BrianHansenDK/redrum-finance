import React from 'react'
import { FirebaseBundle } from '../../../../../../database/Objects'
import { Divider, Modal } from 'rsuite';
import SingleLineInfo from '../right/SingleLineInfo';
import { mainColors } from '../../../../themes/colors';
import { numberWithCommasAsString } from '../../../../../../misc/custom-hooks';

interface IProps {
    en: boolean,
    project: FirebaseBundle,
    open: boolean,
    close: any,
}

const InvestInfoModal = (props: IProps) => {
    const {en, project, open, close} = props;


  return (
    <Modal open={open} onClose={close} size='lg'>
        <Modal.Header>
            <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '45%'}}>
                    <SingleLineInfo
                    title={''}
                    info={'Shareholder'}
                    hasColor color={mainColors.dark} 
                    hasTag tooltipTxt={en ?
                      'English info' : 'Deutches Info'}
                    />
                    <SingleLineInfo
                    title={en ? 'Return Cap' : 'Rendtite Limit'}
                    info={project.ShareholderReturnCap}
                    type={'%'}
                    />
                    <SingleLineInfo
                    title={en ? 'Runtime' : 'Laufzeit'}
                    info={project.shareholderRuntime}
                    />
                    <SingleLineInfo
                    title={en ? 'Minimum investment' : 'Mindest Investment'}
                    info={project.shareholderMinimum.toString()}
                    type='€'
                    />
                </div>
                <div style={{width: 2, height: 200, background: 'rgb(51,51,51)'}}/>
                <div style={{width: '45%'}}>
                    <SingleLineInfo
                    title={''}
                    info={'Stakeholder'}
                    hasColor color={mainColors.dark} 
                    hasTag tooltipTxt={en ?
                      'English info' : 'Deutches Info'}
                    />
                    <SingleLineInfo
                    title={en ? 'Return Cap' : 'Rendtite Limit'}
                    info={project.guaranteedReturn}
                    type={'%'}
                    />
                    <SingleLineInfo
                    title={en ? 'Runtime' : 'Laufzeit'}
                    info={project.stakeholderRuntime}
                    />
                    <SingleLineInfo
                    title={en ? 'Minimum investment' : 'Mindest Investment'}
                    info={numberWithCommasAsString(project.stakeholderMinimum)}
                    type='€'
                    />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            Buttons
        </Modal.Footer>
    </Modal>
  )
}

export default InvestInfoModal