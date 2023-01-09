import React from 'react'
import { Button } from 'rsuite'
import '../styles/stats.scss'
import '../styles/cta-up.scss'

const CtaUp = () => {
    return (
        <div className='cta-up align-center'>
            <h1 className='title'>
                Start building your movie portfolio with just 1€
            </h1>
            <p className='des'>
                Next to stocks, ETF's and real estate, the perfect addition to your investment strategy.
            </p>
            <Button className=' main-btn white shadow' size='lg' style={{ width: 250 }}>
                Learn more
            </Button>
        </div>
    )
}

export default CtaUp