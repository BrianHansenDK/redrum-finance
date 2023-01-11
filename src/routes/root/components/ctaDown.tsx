import React from 'react'
import { Button } from 'rsuite'
import '../styles/cta-down.scss'

const CtaDown = ({ openModal }: { openModal: any }) => {
    return (
        <div className='pd-page d-flex flex-column align-center justify-center'>
            <h1 className='cta-down-title'>Get started today</h1>
            <Button
                size='lg' appearance='primary' color='blue' className='main-btn blue shadow mt-1'
                onClick={openModal}
            >
                Become an investor
            </Button>
        </div>
    )
}

export default CtaDown