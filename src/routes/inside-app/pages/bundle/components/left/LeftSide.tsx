import React, { FunctionComponent } from 'react'
import { Col } from 'rsuite'
import BundleIntro from './BundleIntro'
import PLACEHOLDER from '../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { FirebaseBundle } from '../../../../../../database/Objects'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'

interface IProps {
  project: FirebaseBundle,
  isMobile: boolean,
}
const LeftSide: FunctionComponent<IProps> = (props) => {
  const {project, isMobile} = props;
  const isDesktop = useMediaQuery('(min-width: 1600px)');
  const styles = {
    bigImg: {
        width: 100 + '%',
        height: isMobile ? 'auto' : isDesktop ? 800 : 400,
        marginTop: 2 + 'rem',
        borderRadius: 15,
        boxShadow: '0 5px 15px 0 rgba(0,0,29, .15)',
    }
}
    return (
        <Col as={FlexboxGridItem} colspan={isMobile ? 24 : 12} className='pr-1 pt-3'>
            <BundleIntro project={project} isMobile={isMobile}/>
            <img src={project.overviewImage} className='' alt={`The ${project.name} video`} style={styles.bigImg} />
        </Col>
    )
}

export default LeftSide
