import React from 'react'
import MainLayout from '../layouts/mainLayout'
import BlockL from './blockL'

import IMG1 from '../../components/images/about_us_page_imgs/wm_img1.svg'
import IMG2 from '../../components/images/about_us_page_imgs/wm_img2.svg'
import IMG3 from '../../components/images/about_us_page_imgs/wm_img3.svg'
import BlockR from './blockR'
import { Button } from 'rsuite'
import './styles/about.scss'
import './styles/why-movies.scss'
import TrianlgeBottom from './triangleBottom'
import TriangleTop from './triangleTop'
import LineShape from './lineShape'
import { whyMoviesStrings } from '../../library/string/Landinspage'

interface IProps {
  isVisible: any, openModal: any, closeModal: Function, en: boolean, setEn: any
}

const WhyMovies: React.FunctionComponent<IProps> = (props) => {
  const { isVisible, openModal, closeModal, en, setEn } = props
    return (
        <MainLayout en={en} setEn={setEn} isVisible={isVisible} openModal={openModal} closeModal={closeModal} dark={true}>
            <div style={{ position: 'relative', paddingBottom: 150 }}>

                <div className='top-div'>
                    <div className='top-title-con'>

                        <h1 className='t1'>
                            {en ? whyMoviesStrings.topPartEN.title : whyMoviesStrings.topPartDE.title}
                        </h1>
                        <p className='p1 text-center'>
                          {en ? whyMoviesStrings.topPartEN.sentence : whyMoviesStrings.topPartDE.sentence}
                        </p>
                    </div>
                    <div style={{ backgroundImage: 'url(' + IMG1 + ')' }} className='big-img' />
                    <div className='top-title-con'>
                        <p className='p1 mt-5'>
                          {en ? whyMoviesStrings.opinionEn : whyMoviesStrings.opinionDE}
                        </p>
                    </div>
                </div>
                <TrianlgeBottom />
            </div>
            <div style={{ position: 'relative' }}>
                <TriangleTop />
            </div>
            <BlockR
            title={null}
                txt={
                    <p>
                      {en ? whyMoviesStrings.industryEN : whyMoviesStrings.industryDE}
                    </p>
                }
                img={IMG2}
            />
            <LineShape />
            <div className="grey-bg">
                <BlockL
                    title='Investing as a new trend'
                    txt={
                        <p>
                            In addition to the streaming market, another growth market has spread in Germany in recent years: the investment market. More and more people, especially of younger age, are interested in the topic of old-age provision and capital investment.
                            <br /> <br />
                            This can be seen from the surveys of the "Deutsches Aktieninstitut", which determined a total number of shareholders of 12.1 million for the year 2021. Investment apps such as Trade Republic, Scalable Capital or Timeless can confirm the trend based on the strongly increasing number of users, because investing is not only an investment in the future nowadays, but rather a lifestyle.
                        </p>
                    }
                    img={IMG3}
                />
                <div className="growth-div mt-3">
                    <h1 className='title-mid'>Growth</h1>
                    <p className='mid-des'>
                        The Redrum Film Finance App combines these two growth markets by benefiting from both the strong demand of the film market and the growing willingness of investors to invest. The app not only offers the opportunity to discover new financial products, but also bridges the gap between investment, art and culture.
                    </p>
                    <Button size='lg' appearance='primary' className='main-btn white shadow mt-3 mb-5' style={{ width: 250, margin: 'auto' }}>
                        Become an investor
                    </Button>
                </div>
            </div>
        </MainLayout>
    )
}

export default WhyMovies
