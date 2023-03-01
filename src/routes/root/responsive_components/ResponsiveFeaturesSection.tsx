import React from 'react'
import { homeStrings } from '../../../library/string/Landinspage'
import PLACEHOLDER from '../../../components/images/Placeholder_icon.svg'
import FeatureLeft from '../components/featureLeft'
import FeaturesRight from '../components/featuresRight'
import { useMediaQuery } from '../../../misc/custom-hooks'
import TabletFeatureItem from './TabletFeatureItem'

const ResponsiveFeaturesSection = ({en}: {en:boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  return (
    <div className='r-features-con'>
      <h1 className={`${isMobile ? '' : 'text-center'} r-main-title`}>
        {en ? homeStrings.featuresEN.mainTitle : homeStrings.featuresDE.mainTitle}
      </h1>
      <p className={`r-sub-title mt-1 ${isMobile ? '' : 'text-center'}`}>
      {en ? homeStrings.featuresEN.subTitle : homeStrings.featuresDE.subTitle}
      </p>
      {
        isMobile ? (
          <>
            <TabletFeatureItem
            img={PLACEHOLDER}
            alt={'Placeholder'}
            title={en ? homeStrings.featuresEN.t1 : homeStrings.featuresDE.t1}
            />
            <TabletFeatureItem
            img={PLACEHOLDER}
            alt='Placeholder'
            title={en ? homeStrings.featuresEN.t2 : homeStrings.featuresDE.t2}
            />
            <TabletFeatureItem
            img={PLACEHOLDER}
            alt='Placeholder'
            title={en ? homeStrings.featuresEN.t3 : homeStrings.featuresDE.t3}
            />
            <TabletFeatureItem
            img={PLACEHOLDER}
            alt='Placeholder'
            title={en ? homeStrings.featuresEN.t4 : homeStrings.featuresDE.t4}
            />
          </>
        ) : (
          <>
        <FeatureLeft
        mainTitle={null}
        subTitle={null}
        img={PLACEHOLDER}
        alt='Placeholder'
        title={en ? homeStrings.featuresEN.t1 : homeStrings.featuresDE.t1}
        />
      <FeaturesRight
        mainTitle={null}
        img={PLACEHOLDER}
        alt='Placeholder'
        title={en ? homeStrings.featuresEN.t2 : homeStrings.featuresDE.t2}
        />
      <FeatureLeft
        mainTitle={null}
        subTitle={null}
        img={PLACEHOLDER}
        alt='Placeholder'
        title={en ? homeStrings.featuresEN.t3 : homeStrings.featuresDE.t3}
        />
      <FeaturesRight
        mainTitle={null}
        img={PLACEHOLDER}
        alt='Placeholder'
        title={en ? homeStrings.featuresEN.t4 : homeStrings.featuresDE.t4}
        />
        </>
        )
      }

    </div>
  )
}

export default ResponsiveFeaturesSection
