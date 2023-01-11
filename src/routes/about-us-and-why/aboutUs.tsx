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

const AboutUsPage = ({ isVisible, openModal, closeModal }: { isVisible: any, openModal: any, closeModal: Function }) => {
    return (
        <MainLayout isVisible={isVisible} openModal={openModal} closeModal={closeModal}>
            <BlockL
                img={IMG1}
                title='About Redrum'
                txt={<p>
                    The Redrum Film Finance App was founded with the goal for every small and large investor to participate in a unique film production with just a few clicks. Besides investing in a profitable capital investment, every single investor writes a piece of film history for eternity. <br /> <br />
                    A film production is not easy to realize. It takes much more than just a good idea. It needs a concept, script, director, cameraman, actors and much more. What you need above all is the necessary capital, expertise and time. The cost of a film production is so high that investing in such projects is reserved only for the major film studios, television stations, streaming services and wealthy private investors.
                </p>}
            />
            <BlockR
                img={IMG2}
                title={null}
                txt={
                    <p>
                        Never before have small investors had the opportunity to participate directly in a promising film production from the very beginning. Those who could independently raise the money for a film production as a budding film producer faced many problems during production. Due to the lack of contacts or partners, he carried the sole financial risk.
                        <br />
                        Building a professional team takes a lot of time and experience and once the team finished the production, the film had to be successfully marketed and distributed both nationally and internationally.
                    </p>
                }
            />
            <BlockL
                img={IMG3}
                title={null}
                txt={<p>
                    With the Redrum App, we solve all these problems in one fell swoop. We produce and distribute exclusive and unique film projects. Our investors can participate in a production from as little as 1€.
                    <br /> <br />
                    Simple, digital and secure.
                </p>}
            />
            <BlockR
                img={IMG4}
                title='Asset'
                txt={
                    <p>
                        Sit back and let time work for you or actively trade the acquired shares on the integrated market.
                        <br /> <br />
                        As soon as the film production is exploited, our investors receive a fixed return of 7% on their invested capital in the first year and can profit from the respective profit distributions in the following years.
                    </p>
                }
            />
        </MainLayout>
    )
}

export default AboutUsPage