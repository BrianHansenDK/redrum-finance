import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeatureLeft = ({ img, alt, title, txt, mainTitle }: {img:string, alt:string, title:string, txt:string, mainTitle:any }) => {
    return (
        <div className='feature-ttl-div'>
            {
                mainTitle ? (<h1 className='main-title'>
                    {mainTitle}
                </h1>) : null
            }
            <div className='img-div'>
                <img src={img} alt={alt} height={200} width={200} />
            </div>
            <div className='txt-div-left'
            >
                <h2 className='txt-title left'>
                    {title}
                </h2>
                <p className='txt-des left'>
                    {txt}
                </p>
            </div>
        </div>
    )
}

export default FeatureLeft