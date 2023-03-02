import React from 'react'
import { Button } from 'rsuite'
import { useMediaQuery } from '../../../../misc/custom-hooks'
import MainBtn from '../../components/MainBtn'
import ProjectShowcase from '../../components/ProjectShowcase'
import BannerComponent from './components/banner'

const AppRootIndexPage = ({en}: {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  return (
    <>
      <BannerComponent isMobile={isMobile} />
      <ProjectShowcase en={en} isMobile={isMobile} />
      <div className={isMobile ? 'mb-4' : 'pl-2 pt-3 pr-2 pb-3'}>
        {
          isMobile ? (
            <Button
            appearance='primary'
            className='r-btn r-main-btn'
            block
            >
              How it works
            </Button>
          ) : (
            <MainBtn
          pressed={() => null}
          btnColor='blue'
          btnAppearance='primary'
          btnSize='lg'
          isBlock={true}
          content='How it works'
        />
          )
        }


      </div>
    </>
  )
}

export default AppRootIndexPage
