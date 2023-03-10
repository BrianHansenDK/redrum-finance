import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import { hIWStrings, navbarStrings } from '../../../../library/string/Landinspage'
import { useMediaQuery } from '../../../../misc/custom-hooks'
import MainBtn from '../../components/MainBtn'
import ProjectShowcase from '../../components/ProjectShowcase'
import BannerComponent from './components/banner'

const AppRootIndexPage = ({en}: {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const labtop = useMediaQuery('(max-width: 1400px)')
  const navigate = useNavigate()
  return (
    <>
      <BannerComponent isMobile={isMobile} />
      <ProjectShowcase en={en} isMobile={isMobile} />
      <div className={isMobile ? 'mb-4' : 'pl-2 pt-3 pr-2 pb-3'}>
        <Button
        appearance='primary'
        className='r-btn r-main-btn'
        block
        onClick={() => navigate('/how-it-works')}
        >
          {en ? navbarStrings.navbarEN.how: navbarStrings.navbarDE.how}
        </Button>
      </div>
    </>
  )
}

export default AppRootIndexPage
