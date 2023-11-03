import React from 'react'
import FeatureLeft from './featureLeft'
import FeaturesRight from './featuresRight'
import PLACEHOLDER from '../../../components/images/Placeholder_icon.svg'
import '../styles/features.scss'
import { homeStrings } from '../../../library/string/Landinspage'
import CREATE from '../../../assets/comic-images/A_01.jpg'
import INVEST from '../../../assets/comic-images/A_02.jpg'
import DEPOSIT from '../../../assets/comic-images/A_03.jpg'
import MAKE from '../../../assets/comic-images/A_04.jpg'

const Features = ({en} : {en: boolean}) => {
    return (

        <>
            <FeatureLeft
                mainTitle={en ? homeStrings.featuresEN.mainTitle : homeStrings.featuresDE.mainTitle}
                subTitle={en ? homeStrings.featuresEN.subTitle : homeStrings.featuresDE.subTitle}
                img={CREATE}
                alt='Placeholder'
                title={en ? homeStrings.featuresEN.t1 : homeStrings.featuresDE.t1}
              />
            <FeaturesRight
                mainTitle={null}
                img={INVEST}
                alt='Placeholder'
                title={en ? homeStrings.featuresEN.t2 : homeStrings.featuresDE.t2}
                />
            <FeatureLeft
                mainTitle={null}
                subTitle={null}
                img={DEPOSIT}
                alt='Placeholder'
                title={en ? homeStrings.featuresEN.t3 : homeStrings.featuresDE.t3}
                />
            <FeaturesRight
                end
                mainTitle={null}
                img={MAKE}
                alt='Placeholder'
                title={en ? homeStrings.featuresEN.t4 : homeStrings.featuresDE.t4}
                />
        </>
    )
}

export default Features
