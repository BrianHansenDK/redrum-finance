import React from 'react'
import MainLayout from '../layouts/mainLayout'
import BlockL from './blockL'

import IMG1 from '../../assets/comic-images/pictureredrumapp02_11_2023/01_WhyMovie_OMG.jpg'
import IMG2 from '../../assets/comic-images/pictureredrumapp02_11_2023/appbannerpicure/02_WhyMovie_Please.jpg'
import IMG3 from '../../components/images/about_us_page_imgs/wm_img3.svg'
import BlockR from './blockR'
import { Button } from 'rsuite'
import './styles/about.scss'
import './styles/why-movies.scss'
import TrianlgeBottom from './triangleBottom'
import TriangleTop from './triangleTop'
import LineShape from './lineShape'
import { whyMoviesStrings } from '../../library/string/Landinspage'
import { useMediaQuery } from '../../misc/custom-hooks'

interface IProps {
  isVisible: any, openModal: any, closeModal: Function, en: boolean, setEn: any
}

const WhyMovies: React.FunctionComponent<IProps> = (props) => {
  const { isVisible, openModal, closeModal, en, setEn } = props
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')
    return (
        <MainLayout en={en} setEn={setEn} isVisible={isVisible} openModal={openModal} closeModal={closeModal} dark={true}>
            <div style={{ position: 'relative'}} className='r-page-wrap'>

                <div>
                    <BlockR
                    wide
                    square
                    img={IMG1}
                    title={en ? whyMoviesStrings.topPartEN.sentence : whyMoviesStrings.topPartDE.sentence}
                    txt={en ? whyMoviesStrings.opinionEn : whyMoviesStrings.opinionDE}/>
                  </div>
            </div>
            <BlockL
            wide
            square
            title={en ? 'Content Is King' : 'Content Ist King'}
                txt={
                    <p>
                      {en ? whyMoviesStrings.industryEN : whyMoviesStrings.industryDE}
                    </p>
                }
                img={IMG2}
            />
            <LineShape />
            <div className="grey-bg r-page-wrap">
              {/*

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
                  */}
                <div className="growth-div pt-3">
                  {/*

                    <h1 className='title-mid'>Growth</h1>
                    <p className='mid-des'>
                        The Redrum Film Finance App combines these two growth markets by benefiting from both the strong demand of the film market and the growing willingness of investors to invest. The app not only offers the opportunity to discover new financial products, but also bridges the gap between investment, art and culture.
                    </p>
                    */}
                    <Button
                    onClick={openModal}
                    size='lg'
                    appearance='primary'
                    className={`r-btn r-secondary-btn mt-3 mb-5`}
                    style={{
                      width: isMobile || isDesktop ? 'auto' : 250,
                      margin: 'auto'
                    }}
                    >
                        {en ? 'Become an producer' : 'Werde Produzent'}
                    </Button>
                </div>
            </div>
        </MainLayout>
    )
}

export default WhyMovies
