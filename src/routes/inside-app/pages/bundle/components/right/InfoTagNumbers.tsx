import React from 'react'
import { FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'

const InfoTagNumbers = ({ project }: { project: any }) => {
    return (
        <FlexboxGrid style={styles.wrapper}>
            <FlexboxGridItem colspan={12} className='d-flex flex-column align-center' style={styles.leftCon}>
                <p>
                    Average yearly return
                </p>
                <p style={styles.number}>
                    {project.yearlyReturn} %
                </p>
            </FlexboxGridItem>
            <FlexboxGridItem colspan={12} className='d-flex flex-column align-center' style={styles.rightCon}>
                <p>
                    Average return sum
                </p>
                <p style={styles.number}>
                    {project.returnSum} %
                </p>
            </FlexboxGridItem>
        </FlexboxGrid>
    )
}

const styles = {
    wrapper: {
        width: 100 + '%',
        marginTop: 7.5,
    },
    leftCon: {
        borderRight: '1px solid black',
    },
    rightCon: {
        borderLeft: '1px solid black',
    },
    number: {
        fontSize: 22.5,
        fontWeight: '700',
    }
}

export default InfoTagNumbers