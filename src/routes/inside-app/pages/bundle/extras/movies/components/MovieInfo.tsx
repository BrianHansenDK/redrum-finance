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
            <div className='movie-information'>
                <h1 className='title'>
                    {this.props.movie?.title}
                </h1>
                <p className='intro'>
                    {this.props.movie?.intro}
                </p>
                <p className='description'>
                    {this.props.movie?.description}
                </p>
                <p className='extras'>
                    Genres: {this.props.movie?.genres}
                </p>
                <p  className='mb-2 extras'>
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
    extras: {
        fontSize: 20.5,
        color: mainColors.dark,
        opacity: .8,
    },
}

export default MovieInfo;
