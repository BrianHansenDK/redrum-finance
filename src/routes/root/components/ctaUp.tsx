import React from 'react'
import { Button } from 'rsuite'
import '../styles/stats.scss'
import '../styles/cta-up.scss'
import { homeStrings } from '../../../library/string/Landinspage'
import { Link } from 'react-router-dom'

const CtaUp = ({en} : {en: boolean}) => {
    return (
        <div className='cta-up align-center'>
            <h1 className='title'>
                {en ? homeStrings.ctaUpperEN.title : homeStrings.ctaUpperDE.title}
            </h1>
            <p className='des'>
            {en ? homeStrings.ctaUpperEN.sentence : homeStrings.ctaUpperDE.sentence}
            </p>
            <Button as={Link} to='/how-it-works' className=' main-btn white shadow' size='lg' style={{ width: 250 }}>
            {en ? homeStrings.ctaUpperEN.btn : homeStrings.ctaUpperDE.btn}
            </Button>
        </div>
    )
}

export default CtaUp
