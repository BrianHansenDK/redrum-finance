import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

interface IProps {
    img:string, title:any, txt:any, square: boolean, wide?: boolean, close?: boolean, top?: boolean
}

const BlockL = (props: IProps) => {
    const {img, title, txt, square=false, wide=false, close=false, top=false} = props;
    return (
        <div className={`section ${close ? 'close' : ''} ${top ? 'top' : ''}`} style={{ background: 'none' }}>
            <img src={img} alt="Photo" className={`left  ${square? 'square' : ''} ${wide? 'wide' : ''}`} />
            <div className="right">
                {title ? (
                    <h1 className='mb-1'>
                        {title}
                    </h1>
                ) : null}
                <p className='block-txt'>{txt}</p>
            </div>
        </div>
    )
}

export default BlockL
