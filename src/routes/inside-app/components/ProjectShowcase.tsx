import React, { useEffect, useState } from 'react'
import { Progress } from 'rsuite';
import '../pages/dashboard/styles/showcase.scss'
import { Link } from 'react-router-dom';
import { numberWithCommas, toFixedIfNecessary } from '../../../misc/custom-hooks';
import PLACEHOLDER from '../../../components/images/about_us_page_imgs/ab_img3.svg'
import { onValue, ref } from 'firebase/database';
import { database } from '../../../firebase';
import { mainColors } from '../themes/colors';
import mainShadows from '../themes/shadows';

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

                    <Link
                        style={styles.card}
                        className='bundle trans-fast'
                        to={`/app/bundle/${project.id.toString()}`}
                        key={project.id}>
                        <div style={{
                            borderRadius: '10px 10px 0 0',
                            width: '100 %',
                            height: 355,
                            backgroundImage: 'url(' + project.banner + ')',
                            backgroundSize: 'cover',
                        }}>

                        </div>
                        <div className='pl-2 pr-2 pb-2'>

                            <div className='d-flex jusify-center align-center' style={{ position: 'relative' }}>
                                <p className='txt-center mt-1' style={styles.intro}>
                                    {project.intro}
                                </p>
                            </div>
                            <div className='d-flex align-center pl-1 pr-4' style={{ justifyContent: 'space-between' }}>
                                <p style={styles.numberTxt}>
                                    Currently invested: <span style={styles.number}>{numberWithCommas(project.currentlyInvested)} € </span>
                                </p>
                                <p style={styles.numberTxt}>
                                    Goal: <span style={styles.number}>{numberWithCommas(project.goal)} € </span>
                                </p>
                            </div>
                            <Progress.Line style={styles.percentageNr} percent={toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2)} status={`${toFixedIfNecessary((project.currentlyInvested / project.goal) * 100, 2) < 100 ? 'active' : 'success'}`} />
                        </div>
                    </Link>
                ))}
            </>
        );
    }
}

const styles = {
    card: {
        display: 'block',
        borderRadius: 10,
        boxShadow: mainShadows.card,
        textDecoration: 'none',
        marginBottom: 50,
    },
    image: {
        borderRadius: '10px 10px 0 0',
        width: '100 %',
        height: 355,
        backgroundImage: 'url(' + PLACEHOLDER + ')',
        backgroundSize: 'cover',
    },
    intro: {
        flex: 1,
        color: mainColors.dark,
        lineHeight: 1,
    },
    numberTxt: {
        fontSize: 22.5,
        color: mainColors.dark,
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: mainColors.dark,
    },
    percentageNr: {
        fontSize: 22,
        fontWeight: 'bold',
        color: mainColors.dark,
    }
}

export default ProjectShowcase
