import React from 'react'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../firebase'
import MovieCard from './components/MovieCard'

import './styles/index.scss'
import NoMovieCard from './components/NoMovieCard'
import { mainColors } from '../../../../themes/colors'

interface IProps {
    params: any
}

interface IState {
    projectData: any[]
}

class BundleMoviesDetals extends React.Component<IProps, IState>{
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

        const { bundleId } = this.props.params


        return (
            <div style={styles.pageWrap} className='flex-column'>
                {
                    this.state.projectData ? (

                        this.state.projectData.map((project) => (
                            project.id == bundleId ? (
                                <>
                                    <h1 key={project.id} style={styles.pageTitle} className='txt-center'> Movies in {project.name}</h1>
                                    <div style={styles.wrapper}>
                                        {
                                            project?.movies ? (

                                                project?.movies?.map((movie: any) => (
                                                    <MovieCard movieId={movie} key={movie.id} />
                                                ))
                                            )
                                                : <NoMovieCard />}
                                    </div>
                                </>
                            ) : null
                        ))
                    ) : null

                }

            </div>
        )
    }
}

const styles = {
    pageWrap: {
        minHeight: 400,
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageTitle: {
        marginBottom: 75,
        color: mainColors.dark,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 100 + '%',
    },
}

export default BundleMoviesDetals