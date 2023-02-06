import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

interface IProps {
  img:string, alt:string, title:string, mainTitle:any, subTitle: any
}

const FeatureLeft: React.FunctionComponent<IProps> = (props) => {
  const { img, alt, title, mainTitle, subTitle } = props
    return (
        <div className='feature-ttl-div'>
            {
                mainTitle ? (<h1 className='main-title'>
                    {mainTitle}
                </h1>) : null
            }
            {
                subTitle ? (<h2 style={{width: '100%', fontSize: 27.5, fontWeight: '600', marginBottom: 50,}} className='main-title text-center'>
                    {subTitle}
                </h2>) : null
            }
            <div className='img-div'>
                <img src={img} alt={alt} height={200} width={200} />
            </div>
            <div className='txt-div-left'
            >
                <h2 className='txt-title left'>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default FeatureLeft
