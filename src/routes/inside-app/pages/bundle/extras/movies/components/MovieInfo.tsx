import React, { Component } from 'react';
import { Button } from 'rsuite';
import MainBtn from '../../../../../components/MainBtn';
import { mainColors } from '../../../../../themes/colors';

interface IProps {
    movie: any
}

class MovieInfo extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={styles.wrap}>
                <h1 style={styles.title} >
                    {this.props.movie?.title}
                </h1>
                <p style={styles.intro}>
                    {this.props.movie?.intro}
                </p>
                <p style={styles.description}>
                    {this.props.movie?.description}
                </p>
                <p style={styles.extras}>
                    Genres: {this.props.movie?.genres}
                </p>
                <p style={styles.extras} className='mb-2'>
                    Release date: {this.props.movie?.releaseDate.split(' ').slice(1).join(' ')}
                </p>
                <MainBtn
                    content={'Read more'}
                    pressed={() => null}
                    btnColor={'violet'}
                    btnAppearance={'primary'}
                    btnSize={'lg'}
                    isBlock={false} />
            </div>
        );
    }
}

const styles = {
    wrap: {
        maxWidth: 'calc(100% - 500px)',
        marginLeft: 50,
    },
    title: {
        fontSize: 40.5,
        color: mainColors.dark,
    },
    intro: {
        fontSize: 27.5,
        color: mainColors.dark,
        opacity: .9,
    },
    description: {
        fontSize: 22.5,
        color: mainColors.dark,
        opacity: .8,
        maxWidth: '100%',
    },
    extras: {
        fontSize: 20.5,
        color: mainColors.dark,
        opacity: .8,
    },
}

export default MovieInfo;