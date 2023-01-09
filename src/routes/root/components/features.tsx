import React from 'react'
import FeatureLeft from './featureLeft'
import FeaturesRight from './featuresRight'
import PLACEHOLDER from '../../../components/images/Placeholder_icon.svg'
import '../styles/features.scss'

const Features = () => {
    return (

        <>
            <FeatureLeft
                mainTitle='Become an investor with just a few clicks'
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Create account'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeaturesRight
                mainTitle={null}
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Deposit capital'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeatureLeft
                mainTitle={null}
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Invest'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeaturesRight
                mainTitle={null}
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Gain profit by interest'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
        </>
    )
}

export default Features