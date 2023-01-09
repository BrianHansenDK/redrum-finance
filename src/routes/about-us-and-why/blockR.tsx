import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const BlockR = ({ img, title, txt }: { img: any, title: any, txt: any }) => {
    return (
        <div className="section">
            <div className="right">
                {title ? (
                    <h1>
                        {title}
                    </h1>
                ) : null}

                {txt}
            </div>
            <div className="left" style={{ backgroundImage: 'url(' + img + ')' }}>

            </div>
        </div>
    )
}

export default BlockR