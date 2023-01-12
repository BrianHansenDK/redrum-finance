import React from 'react'
import { Progress } from 'rsuite';
import PlayIcon from '@rsuite/icons/legacy/Play'
import '../styles/showcase.scss'

export interface IProjectShowcase {
    backgroundImg?: string,
    title: string,
    maxAmount: number,
    currentlyInvested: number,
    percentage: number
}

const ProjectShowcase: React.FunctionComponent<IProjectShowcase> = (props) => {
    const { title, maxAmount, currentlyInvested, percentage, backgroundImg } = props
    return (
        <div className='bundle mt-2 mb-2 trans-fast'>
            <div className='bundle-img' style={{ backgroundImage: 'url(' + backgroundImg + ')' }}>

            </div>
            <div className='pl-2 pr-2 pb-2'>

                <div className='d-flex jusify-center align-center' style={{ position: 'relative' }}>
                    <h1 className='txt-center mt-2' style={{ flex: 1 }}>
                        {title}
                    </h1>
                </div>
                <div className='d-flex align-center pl-3 pr-3 mt-2' style={{ justifyContent: 'space-between' }}>
                    <p>
                        Currently invested: {currentlyInvested}€
                    </p>
                    <p>
                        Max amount: {maxAmount}€
                    </p>
                </div>
                <Progress.Line percent={percentage} status={`${percentage < 100 ? 'active' : 'success'}`} />
            </div>
        </div>
    );
}

export default ProjectShowcase