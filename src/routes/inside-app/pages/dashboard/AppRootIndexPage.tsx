import React from 'react'
import MainBtn from '../../components/MainBtn'
import ProjectShowcase from '../../components/ProjectShowcase'
import BannerComponent from './components/banner'

const AppRootIndexPage = ({en}: {en: boolean}) => {
  return (
    <>
      <BannerComponent />
      <ProjectShowcase en={en} />
      <div className='pl-2 pt-3 pr-2 pb-3'>
        <MainBtn
          pressed={() => null}
          btnColor='blue'
          btnAppearance='primary'
          btnSize='lg'
          isBlock={true}
          content='How it works'
        />

      </div>
    </>
  )
}

export default AppRootIndexPage
