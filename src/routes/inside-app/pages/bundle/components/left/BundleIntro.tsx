import React, { FunctionComponent } from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import PLACEHOLDER from '../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { FirebaseBundle } from '../../../../../../database/Objects'
interface IProps {
  project: FirebaseBundle,
  isMobile: boolean,
}
const BundleIntro: FunctionComponent<IProps> = (props) => {
  const {project, isMobile} = props
  const styles = {
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 + '%',
    },
    title: {
        fontSize: isMobile ? 22 : 33.2,
        fontWeight: '700',
        lineHeight: 1,
        color: '#333',
    },
    des: {
        fontSize: isMobile ? 18 : 22.2,
        color: '#444',
        marginTop: 2.5,
    },
}
    return (
        <FlexboxGrid className={'pt-4'} justify='start'>
            <FlexboxGridItem colspan={4}>
                <img
                    src={project.smallImage}
                    alt={project.name}
                    style={styles.avatar}
                    className='shadow'
                />
            </FlexboxGridItem>
            <FlexboxGridItem className='ml-1' colspan={isMobile ? 18 : 16}>
                <h1 style={styles.title}>{project.name}</h1>
                <p style={styles.des}>{project.intro}</p>
            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

export default BundleIntro
