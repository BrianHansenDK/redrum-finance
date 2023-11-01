import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

interface IProps {
    img:string, title:any, txt:any, square: boolean | undefined
}

const BlockR = (props: IProps) => {
    const {img, title, txt, square=false} = props;
    return (
        <div className="section" style={{ background: 'none' }}>
            <div className="right">
                {title ? (
                    <h1 className='mb-1'>
                        {title}
                    </h1>
                ) : null}
                <p className='block-txt'>{txt}</p>
            </div>
            <div className={`left ${square? 'square' :  ''}`} style={{ backgroundImage: 'url(' + img + ')' }}>

            </div>
        </div>
    )
}

export default BlockR
