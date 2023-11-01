import React from 'react'
import { Col, Grid, Row } from 'rsuite'
import MainLayout from '../layouts/mainLayout'
import BlockL from './blockL'
import BlockR from './blockR'
import IMG1 from '../../components/images/about_us_page_imgs/ab_img1.svg'
import IMG2 from '../../components/images/about_us_page_imgs/ab_img2.svg'
import IMG3 from '../../components/images/about_us_page_imgs/ab_img3.svg'
import IMG4 from '../../components/images/about_us_page_imgs/ab_img4.svg'
import './styles/about.scss'
import { aboutUsStrings } from '../../library/string/Landinspage'

interface IProps {
  isVisible: any, openModal: any, closeModal: Function, en: boolean, setEn: any
}

const AboutUsPage: React.FunctionComponent<IProps> = (props) => {
  const { isVisible, openModal, closeModal, en, setEn } = props
    return (
        <MainLayout en={en} setEn = {setEn} isVisible={isVisible} openModal={openModal} closeModal={closeModal} dark={true}>
            <BlockL
                square={false}
                img={IMG1}
                title={en ? '...write a piece of film history for eternity.' :
                 '...ein Stück Filmgeschichte für die Ewigkeit.'}
                txt={<p>
                  {en ? aboutUsStrings.section1EN.p1 : aboutUsStrings.section1DE.p1}
                  <br/> <br/>
                  {en ? aboutUsStrings.section1EN.p2 : aboutUsStrings.section1DE.p2}
                </p>}
            />
            <BlockR
                square={false}
                img={IMG2}
                title={en ? aboutUsStrings.section2EN.fat : aboutUsStrings.section2DE.fat}
                txt={
                    <p>
                      {en ? aboutUsStrings.section2EN.p1 : aboutUsStrings.section2DE.p1}
                    </p>
                }
            />
            <BlockL
                square={false}
                img={IMG3}
                title={en ? aboutUsStrings.section3EN.title : aboutUsStrings.section3DE.title}
                txt={<p >
                  {en ? aboutUsStrings.section3EN.p1 : aboutUsStrings.section3DE.p1}
                    <br /> <br />
                    {en ? aboutUsStrings.section3EN.p2 : aboutUsStrings.section3DE.p2}
                </p>}
            />
            <div style={{marginBottom: 75}}></div>
        </MainLayout>
    )
}

export default AboutUsPage
