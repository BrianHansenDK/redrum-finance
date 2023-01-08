import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import FeatureLeft from './featureLeft'
import FeaturesRight from './featuresRight'
import PLACEHOLDER from '../../../components/images/Placeholder_icon.svg'

const Features = () => {
    return (
        <div className='pd-page grey-bg all-features'>
            <h1 className='txt-center mb-2'>
                Become an investor with just a few clicks
            </h1>
            <FeatureLeft
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Create account'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeaturesRight
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Deposit capital'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeatureLeft
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Invest'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
            <FeaturesRight
                img={PLACEHOLDER}
                alt='Placeholder'
                title='Gain profit by interest'
                txt='Dictum porttitor, ornare id ante placerat. Mollis cursus fusce cubilia, iaculis donec torquent litora eros. At augue diam platea, egestas fringilla mollis, fusce senectus vivamus tellus sapien nisl.'
            />
        </div>
    )
}

export default Features