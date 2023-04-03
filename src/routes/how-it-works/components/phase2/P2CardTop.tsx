import React from 'react'
import { hIWStrings } from '../../../../library/string/Landinspage'
import TextTheme from '../../../../library/themes/TextTheme'
import MovieImg from '../../../../assets/user-shares.svg'
import mainShadows from '../../../inside-app/themes/shadows'

const P2CardTop = ({en, isDesktop} : {en: boolean, isDesktop: boolean}) => {
  return (
    <>
    <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='mb-4 mt-4 des'>
        {en ? hIWStrings.phase2EN.des : hIWStrings.phase2DE.des}
      </p>
      <div className='d-flex align-items-center justify-content-center mb-1'>
        <img src={MovieImg} style={styles.image}
        alt="Information about a certain movie inside of the Redrum Pro application"
        />
      </div>
      <p style={isDesktop ? TextTheme.bigMainPara : TextTheme.mainPara} className='text-center mt-1 mb-1'>
        {en ? hIWStrings.phase2EN.rel : hIWStrings.phase2DE.rel}
      </p>
      <p style={isDesktop ? TextTheme.bigHiwPara : TextTheme.hiwPara} className='des mb-3'>
        {en ? hIWStrings.phase2EN.receive : hIWStrings.phase2DE.receive}
      </p>
    </>
  )
}

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    boxShadow: mainShadows.image,
  }
}

export default P2CardTop
