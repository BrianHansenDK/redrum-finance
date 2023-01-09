import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeaturesRight = ({ img, alt, title, txt, mainTitle }: { img: any, alt: any, title: any, txt: any, mainTitle: any }) => {
    return (
        <div className='feature-ttl-div'>
            {
                mainTitle ? (<h1 className='main-title'>
                    {mainTitle}
                </h1>) : null
            }
            <div className='txt-div-right'
            >
                <h2 className='txt-title right'>
                    {title}
                </h2>
                <p className='txt-des right' style={{ textAlign: 'right' }}>
                    {txt}
                </p>
            </div>
            <div className='img-div'>
                <img src={img} alt={alt} height={200} width={200} />
            </div>
        </div>
    )
}

export default FeaturesRight