import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import PLACEHOLDER from '../../../../../../components/images/about_us_page_imgs/ab_img3.svg'

const BundleIntro = ({ project }: { project: any }) => {
    return (
        <FlexboxGrid className='pt-4' justify='start'>
            <FlexboxGridItem colspan={4}>
                <img
                    src={PLACEHOLDER}
                    alt={project.name}
                    style={styles.avatar}
                    className='shadow'
                />
            </FlexboxGridItem>
            <FlexboxGridItem className='ml-1' colspan={16}>
                <h1 style={styles.title}>{project.name}</h1>
                <p style={styles.des}>{project.intro}</p>
            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50 + '%',
    },
    title: {
        fontSize: 33.2,
        fontWeight: '700',
        lineHeight: 1,
        color: '#333',
    },
    des: {
        fontSize: 22.2,
        color: '#444',
        marginTop: 2.5,
    },
}

export default BundleIntro