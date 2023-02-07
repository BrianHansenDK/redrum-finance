import React from 'react'
import { Button } from 'rsuite'
import { homeStrings } from '../../../library/string/Landinspage'
import '../styles/cta-down.scss'

const CtaDown = ({ openModal, en }: { openModal: any, en: boolean }) => {
    return (
        <div className='pd-page d-flex flex-column align-center justify-center'>
            <h1 className='cta-down-title'>{en ? homeStrings.ctaDownEN.title : homeStrings.ctaDownDE.title}</h1>
            <Button
                size='lg' appearance='primary' color='blue' className='main-btn blue shadow mt-1'
                onClick={openModal}
            >
                {en ? homeStrings.ctaDownEN.btn : homeStrings.ctaDownDE.btn}
            </Button>
        </div>
    )
}

export default CtaDown
