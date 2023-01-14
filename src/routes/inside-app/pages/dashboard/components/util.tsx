import PLACEHOLDER from '../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import PLACEHOLDER2 from '../../../../../components/images/about_us_page_imgs/wm_img2.svg'

interface IProject {
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
    movies: Array<IMovie>,
}

interface IMovie {
    title: string,
    description: string,
    trailer: string,
    genres: Array<String>,
    cover: string,
}

const testMovie: IMovie = {
    title: 'Test 1',
    description: 'Description for movie number 1',
    trailer: 'No trailer at the moment',
    genres: ['Horror', 'Comedy', 'Christmas'],
    cover: 'No cover',
}
const testMovie2: IMovie = {
    title: 'Test 2',
    description: 'Description for movie number 1',
    trailer: 'No trailer at the moment',
    genres: ['Horror', 'Comedy', 'Christmas'],
    cover: 'No cover',
}
const testMovie3: IMovie = {
    title: 'Test 3',
    description: 'Description for movie number 1',
    trailer: 'No trailer at the moment',
    genres: ['Horror', 'Comedy', 'Christmas'],
    cover: 'No cover',
}

const winterBundle: IProject = {
    index: 0,
    name: 'Winter 2023',
    description: 'The investment project of 2023 near realease of the App',
    endDate: new Date('2025-01-06'),
    goal: 25000,
    currentlyInvested: 10000,
    yearlyReturn: 67.5,
    returnSum: 368.91,
    value: 950000,
    image: PLACEHOLDER,
    movies: [testMovie, testMovie2, testMovie3],
}

const bundle2: IProject = {
    index: 1,
    name: 'Test bundle nr 2',
    description: 'The investment project of 2023 near realease of the App',
    endDate: new Date('2025-01-06'),
    goal: 6859300,
    currentlyInvested: 5930229,
    yearlyReturn: 53.9,
    returnSum: 468.91,
    value: 9550000,
    image: PLACEHOLDER2,
    movies: [testMovie, testMovie2, testMovie3],
}

export const PROJECTS = [
    winterBundle,
    bundle2,
]