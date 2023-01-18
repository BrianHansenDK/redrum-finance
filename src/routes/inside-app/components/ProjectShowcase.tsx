import React from 'react'
import { Progress } from 'rsuite';
import '../pages/dashboard/styles/showcase.scss'
import { Link } from 'react-router-dom';
import { numberWithCommas, toFixedIfNecessary } from '../../../misc/custom-hooks';
import PLACEHOLDER from '../../../components/images/about_us_page_imgs/ab_img3.svg'

export interface IProjectShowcase {
    id: string,
    name: string,
    intro: string,
    description: string,
    startDate: Date,
    endDate: Date,
    goal: number,
    currentlyInvested: number,
    guaranteedReturn: number,
    value: number,
    movies: any,
}

const ProjectShowcase: React.FunctionComponent<IProjectShowcase> = (props) => {
    const { id, name, goal, currentlyInvested } = props

    const percentage = toFixedIfNecessary((currentlyInvested / goal) * 100, 2)
    return (
        <Link to={`/app/bundle/${id.toString()}`}>
            <div className='bundle mt-2 mb-2 trans-fast'>
                <div className='bundle-img' style={{ backgroundImage: 'url(' + PLACEHOLDER + ')' }}>

                </div>
                <div className='pl-2 pr-2 pb-2'>

                    <div className='d-flex jusify-center align-center' style={{ position: 'relative' }}>
                        <h1 className='txt-center mt-2' style={{ flex: 1 }}>
                            {name}
                        </h1>
                    </div>
                    <div className='d-flex align-center pl-3 pr-3 mt-2' style={{ justifyContent: 'space-between' }}>
                        <p>
                            Currently invested: {numberWithCommas(currentlyInvested)}€
                        </p>
                        <p>
                            Max amount: {numberWithCommas(goal)}€
                        </p>
                    </div>
                    <Progress.Line percent={percentage} status={`${percentage < 100 ? 'active' : 'success'}`} />
                </div>
            </div>
        </Link>
    );
}

export default ProjectShowcase