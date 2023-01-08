import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const BlockL = ({ img, title, txt }: { img: any, title: any, txt: any }) => {
    return (
        <FlexboxGrid className='pt-5 pr-2 pl-2 pb-5' align='middle' justify='center'>
            <FlexboxGridItem colspan={10} >
                <img src={img} alt={title} width={300} className='sq-shadow' />
            </FlexboxGridItem>
            <FlexboxGridItem colspan={12}>
                {title ? (
                    <h1>
                        {title}
                    </h1>
                ) : null}

                {txt}
            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

export default BlockL