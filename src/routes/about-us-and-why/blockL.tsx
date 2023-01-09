import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const BlockL = ({ img, title, txt }: { img: any, title: any, txt: any }) => {
    return (
        <div className="section" style={{ background: 'none' }}>
            <div className="left" style={{ backgroundImage: 'url(' + img + ')' }}>

            </div>
            <div className="right">
                {title ? (
                    <h1 className='mb-1'>
                        {title}
                    </h1>
                ) : null}

                {txt}
            </div>
        </div>
    )
}

export default BlockL