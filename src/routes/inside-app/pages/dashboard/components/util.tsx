import PLACEHOLDER from '../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import PLACEHOLDER2 from '../../../../../components/images/about_us_page_imgs/wm_img2.svg'

interface Project {
    index: number,
    name: string,
    description: string,
    endDate: Date,
    goal: number,
    currentlyInvested: number,
    yearlyReturn: number,
    returnSum: number,
    value: number,
    image: string,
    movies: Array<Movie>,
}

interface Movie {
    title: string,
    description: string,
    trailer: string,
    genres: Array<String>,
    cover: string,
}

export const PROJECTS = [
    {
        index: 0,
        backgroundImg: PLACEHOLDER,
        title: 'Bundle 1',
        description: 'A text of 10-15 words, describing the project so people know the different content of the package',
        maxAmount: 25000,
        currentlyInvested: 10000,
        yearlyReturn: 67.5,
        returnSum: 368.91,
        endDate: new Date('2025-01-06'),
        value: 950000,
    },
    {
        index: 1,
        backgroundImg: PLACEHOLDER2,
        title: 'Bundle 2',
        description: 'This bundle is not out yet, but it is very cool. It covers a lot of horror movies for 2023',
        maxAmount: 9250000,
        currentlyInvested: 7805000,
        yearlyReturn: 45.7,
        returnSum: 238.2,
        endDate: new Date('2028-08-27'),
        value: 10000000,
    }
]