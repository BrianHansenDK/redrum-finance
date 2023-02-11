import React from 'react'
import { Col, FlexboxGrid, Grid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import PLACEHOLDER from '../../../assets/react.svg'
import { hIWStrings } from '../../../library/string/Landinspage'
import TextTheme from '../../../library/themes/TextTheme'

const HIWIntroSection = ({en}: {en: boolean}) => {
  return (
    <FlexboxGrid align='middle' justify='center' className='mb-5'>
      <FlexboxGridItem colspan={20} style={styles.gridItem}>
      <p style={TextTheme.hiwPara} className='text-center mb-3'>
        {en ? hIWStrings.introEN : hIWStrings.introDE}
      </p>
      </FlexboxGridItem>
      <FlexboxGridItem colspan={20} style={styles.gridItem}>
        <img src={PLACEHOLDER} alt="Placeholder" style={styles.image}/>
      </FlexboxGridItem>
    </FlexboxGrid>
  )
}

const styles = {
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 300,
  },
}

export default HIWIntroSection
