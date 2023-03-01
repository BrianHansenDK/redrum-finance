import React, { FunctionComponent } from 'react'
interface IProps {
  img: string,
  alt: string,
  title: string,
}

const TabletFeatureItem: FunctionComponent<IProps> = (props) => {
  const {img, alt, title} = props
  return (
    <div className='r-feature-item'>
      <div className='img-con'>
        <img src={img} alt={alt} />
      </div>
      <h3>
        {title}
      </h3>
    </div>
  )
}

export default TabletFeatureItem
