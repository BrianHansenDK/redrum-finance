import React from 'react'
import MainBtn from '../../../../../components/MainBtn'
import mainShadows from '../../../../../themes/shadows'
import PLACEHOLDER from '../../../../../../../components/images/about_us_page_imgs/ab_img3.svg'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../../firebase'
import { mainColors } from '../../../../../themes/colors'
import MovieInfo from './MovieInfo'
import { Button } from 'rsuite'

interface IProps {
    movieId: any,
    isMobile: boolean,
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
      const isMobile = this.props.isMobile
        return (
            <div className='movie-item'>
              <div className='hidden-wrap'>
                <div className='cover-wrap' style={styles.coverWrap}>
                    <img
                    src={
                      this.state.movie?.image ?
                      this.state.movie?.image
                      : PLACEHOLDER
                    }
                    alt={`Cover for ${this.state.title}`}
                    className='cover-image' />
                    <div className='overlay' style={styles.overlay}>
                      {
                        isMobile ? (
                          <Button
                          appearance='primary'
                          className='r-btn r-main-btn'>
                            Read more
                          </Button>
                        ) : (
                          <MainBtn
                            content={'Read more'}
                            pressed={() => null}
                            btnColor='violet'
                            btnAppearance='primary'
                            btnSize='lg'
                            isBlock={false} />
                        )
                      }

                    </div>
                  </div>
                  {isMobile ? (
                    <div className='phone-information'>
                      <h1 className='title'>
                        {this.state.movie?.title}
                      </h1>
                      <p className='intro'>
                        {this.state.movie?.intro}
                      </p>
                      <p className='description'>
                          {this.state.movie?.description}
                      </p>
                      <p className='extras'>
                          Genres: {this.state.movie?.genres}
                      </p>
                      <p  className='mb-1 extras'>
                          Release date: {this.state.movie?.releaseDate.split(' ').slice(1).join(' ')}
                      </p>
                      <Button
                      appearance='primary'
                      className='r-btn r-main-btn'
                      >
                        Read more
                      </Button>
                    </div>
                  ) : null}
                </div>
                <MovieInfo movie={this.state.movie} />
            </div>
        )
    }
}
const styles = {
    coverWrap: {
        boxShadow: mainShadows.card,
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
}

export default MovieCard
