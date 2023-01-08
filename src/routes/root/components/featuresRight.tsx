import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const FeaturesRight = ({ img, alt, title, txt }: { img: any, alt: any, title: any, txt: any }) => {
    return (
        <FlexboxGrid justify='center' align='middle'>
            <FlexboxGridItem colspan={8} className='d-flex flex-column justify-center mt-5 mb-5 pr-1'
                style={{ borderRight: '2px solid #141628', height: 'max-content' }}
            >
                <h2 className='txt-right' style={{ lineHeight: 40 + 'px' }}>
                    {title}
                </h2>
                <p className='txt-right'>
                    {txt}
                </p>
            </FlexboxGridItem>
            <FlexboxGridItem colspan={8} className='d-flex align-center justify-center'>
                <img src={img} alt={alt} height={200} width={200} />
            </FlexboxGridItem>

        </FlexboxGrid>
    )
}

export default FeaturesRight