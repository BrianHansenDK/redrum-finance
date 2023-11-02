import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeaturesRight = ({ img, alt, title, mainTitle }: {img:string, alt:string, title:string, mainTitle:any}) => {
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
            </div>
            <div className='img-div'>
                <img src={img} alt={alt}/>
            </div>
        </div>
    )
}

export default FeaturesRight
