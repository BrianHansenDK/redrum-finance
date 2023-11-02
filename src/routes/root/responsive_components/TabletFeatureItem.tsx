import React, { FunctionComponent } from 'react'
interface IProps {
  img: string,
  alt: string,
  title: string,
}

const TabletFeatureItem: FunctionComponent<IProps> = (props) => {
  const {img, alt, title} = props
  return (
    <div className='r-feature-item mb-4'>
      <div className='img-con mb-2'>
        <img src={img} alt={alt} />
      </div>
      <h3 className='text-center'>
        {title}
      </h3>
    </div>
  )
}

export default TabletFeatureItem
