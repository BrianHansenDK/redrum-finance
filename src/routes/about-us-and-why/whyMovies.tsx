import React from 'react'
import MainLayout from '../layouts/mainLayout'
import BlockL from './blockL'

import IMG1 from '../../components/images/about_us_page_imgs/wm_img1.svg'
import IMG2 from '../../components/images/about_us_page_imgs/wm_img2.svg'
import IMG3 from '../../components/images/about_us_page_imgs/wm_img3.svg'
import BlockR from './blockR'
import { Button } from 'rsuite'

const WhyMovies = () => {
    return (
        <MainLayout>
            <div className='pt-5 pl-2 pr-2 pb-5 d-flex flex-column align-center'>
                <h1>
                    Why movies?
                </h1>
                <p className=' txt-center mb-2'>
                    In creating this business plan, we kept running into the following question,
                    "Why should I invest in a film instead of buying Tesla stock? Wh-why the Redrum Film Finance App?"
                </p>
                <img src={IMG1} alt="Invest easy with our App" width={90 + '%'} className='m-auto sq-shadow' />
                <h1 className="mt-2">
                    Minimized risk
                </h1>
                <p className="txt-center">
                    In our opinion, one does not exclude the other. A good and risk-minimized investment portfolio should always be broadly diversified. Be it stocks, ETF's, real estate, precious metals or cryptocurrencies. With its film projects, the Redrum Finance App offers not only an exciting, but also a high-return addition to any portfolio.
                </p>
            </div>
            <BlockL
                title='The Film Industry'
                txt={
                    <p>
                        The film market, especially with regard to the booming streaming services, is an enormous growth market. Global companies such as Amazon, Netflix and Apple are investing large sums in the development and production of their streaming offerings.
                        <br /> <br />
                        Renowned production studios are also following the trend and establishing their own streaming services. As a result, there is a real battle for good content in order to stand out from the immense competition in the VOD landscape. Above all, constant investment in new productions is crucial for success. Netflix led the way with "House of Money," "Narcos" and "Stranger Things.
                    </p>
                }
                img={IMG2}
            />
            <BlockR
                title='Investing as a new trend'
                txt={
                    <p>
                        In addition to the streaming market, another growth market has spread in Germany in recent years: the investment market. More and more people, especially of younger age, are interested in the topic of old-age provision and capital investment.
                        <br /> <br />
                        This can be seen from the surveys of the "Deutsches Aktieninstitut", which determined a total number of shareholders of 12.1 million for the year 2021. Investment apps such as Trade Republic, Scalable Capital or Timeless can confirm the trend based on the strongly increasing number of users, because investing is not only an investment in the future nowadays, but rather a lifestyle.
                    </p>
                }
                img={IMG2}
            />
            <div className="pt-5 pl-2 pr-2 pb-5 d-flex flex-column align-center justify-center">
                <h1>Growth</h1>
                <p className='txt-center mb-2' style={{ maxWidth: 75 + '%' }}>
                    The Redrum Film Finance App combines these two growth markets by benefiting from both the strong demand of the film market and the growing willingness of investors to invest. The app not only offers the opportunity to discover new financial products, but also bridges the gap between investment, art and culture.
                </p>
                <Button size='lg'>
                    Become an investor
                </Button>
            </div>
        </MainLayout>
    )
}

export default WhyMovies