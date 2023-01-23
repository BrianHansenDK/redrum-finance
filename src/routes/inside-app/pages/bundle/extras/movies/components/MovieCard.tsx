import React from 'react'
import MainBtn from '../../../../../components/MainBtn'
import mainShadows from '../../../../../themes/shadows'
import PLACEHOLDER from '../../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../../firebase'
import { mainColors } from '../../../../../themes/colors'

interface IProps {
    movieId: any
}

interface IState {
    movie: any,
    title: any
}

class MovieCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            movie: undefined,
            title: undefined
        }
    }

    componentDidMount(): void {
        const reference = ref(database, 'movies/' + this.props.movieId)
        onValue(reference, (snap) => {
            this.setState((_previousValue) => ({
                movie: snap.val()
            }))
            this.setState((_previousValue) => ({
                title: snap.val().title
            }))
        })
    }

    render() {
        return (
            <div>
                <div className='cover-wrap' style={styles.coverWrap}>
                    <img src={this.state.movie?.image ? this.state.movie?.image : PLACEHOLDER} alt={`Cover for title`} style={styles.cover} />
                    <div className='overlay' style={styles.overlay}>
                        <MainBtn
                            content={'Read more'}
                            pressed={() => null}
                            btnColor='violet'
                            btnAppearance='primary'
                            btnSize='lg'
                            isBlock={false} />
                    </div>
                </div>
                <h1 style={styles.title} className='txt-center'>
                    {this.state.title}
                </h1>
            </div>
        )
    }
}
const styles = {
    coverWrap: {
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: mainShadows.card,
    },
    cover: {
        width: 300,
        height: 450,
    },
    overlay: {
        left: 0, top: 0,
        height: 100 + '%',
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 29, .25)',
    },
    title: {
        fontSize: 40.5,
        color: mainColors.dark,
    },
}

export default MovieCard