import React, { useEffect, useState } from 'react'
import { Progress } from 'rsuite';
import '../pages/dashboard/styles/showcase.scss'
import { Link } from 'react-router-dom';
import { numberWithCommas, toFixedIfNecessary } from '../../../misc/custom-hooks';
import PLACEHOLDER from '../../../components/images/about_us_page_imgs/ab_img3.svg'
import { onValue, ref } from 'firebase/database';
import { database } from '../../../firebase';

interface IProps {
}

interface IState {
    projectData: any[]
}

class ProjectShowcase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    componentDidMount(): void {
        const reference = ref(database, 'projects/')
        onValue(reference, (snap) => {
            let data: any[] = []
            snap.forEach((project) => {
                data.push(project.val())
            })
            this.setState((_previousState) => ({
                projectData: data
            }))
        })
    }



    render() {
        return (
            <>
                {this.state.projectData.map((project) => (

                    <Link to={`/app/bundle/${project.id.toString()}`} key={project.id}>
                        <div className='bundle mt-2 mb-2 trans-fast'>
                            <div className='bundle-img' style={{ backgroundImage: 'url(' + PLACEHOLDER + ')' }}>

                            </div>
                            <div className='pl-2 pr-2 pb-2'>

                                <div className='d-flex jusify-center align-center' style={{ position: 'relative' }}>
                                    <h1 className='txt-center mt-2' style={{ flex: 1 }}>
                                        {project.name}
                                    </h1>
                                </div>
                                <div className='d-flex align-center pl-3 pr-3 mt-2' style={{ justifyContent: 'space-between' }}>
                                    <p>
                                        Currently invested: {numberWithCommas(project.currentlyInvested)}€
                                    </p>
                                    <p>
                                        Goal: {numberWithCommas(project.goal)}€
                                    </p>
                                </div>
                                <Progress.Line percent={toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2)} status={`${toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2) < 100 ? 'active' : 'success'}`} />
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        );
    }
}

export default ProjectShowcase