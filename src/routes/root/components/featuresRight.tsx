import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeaturesRight = ({ img, alt, title, mainTitle, end=false }: {img:string, alt:string, title:string, mainTitle:any, end?: boolean}) => {
    return (
        <div className='feature-ttl-div'>
            {
                mainTitle ? (<h1 className='main-title'>
                    {mainTitle}
                </h1>) : null
            }
            <div className='txt-div-right'
            >   
                <h2 className={`txt-title right ${end ? 'text-end' : ''}`}>
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
