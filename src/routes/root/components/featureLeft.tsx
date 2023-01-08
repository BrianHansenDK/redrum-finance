import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeatureLeft = ({ img, alt, title, txt }: { img: any, alt: any, title: any, txt: any }) => {
    return (
        <FlexboxGrid justify='start' align='middle'>
            <FlexboxGridItem colspan={8} className='d-flex align-center justify-center pb-5 pt-5'>
                <img src={img} alt={alt} height={200} width={200} />
            </FlexboxGridItem>
            <FlexboxGridItem colspan={8} className='d-flex flex-column justify-center pl-1'
                style={{ borderLeft: '2px solid #141628', height: 'max-content' }}
            >
                <h2>
                    {title}
                </h2>
                <p>
                    {txt}
                </p>
            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

export default FeatureLeft