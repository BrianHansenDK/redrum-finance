import React from 'react'
import { Button } from 'rsuite'
import '../styles/stats.scss'

const CtaUp = () => {
    return (
        <div className='dark-bg pd-page d-flex flex-column align-center justify-center'>
            <h1 className='txt-center txt-white'>
                Start building your movie portfolio with just 1€
            </h1>
            <p className='txt-center txt-white'>
                Next to stocks, ETF's and real estate, the perfect addition to your investment strategy.
            </p>
            <Button className='mt-2' size='lg'>
                Learn more
            </Button>
        </div>
    )
}

export default CtaUp