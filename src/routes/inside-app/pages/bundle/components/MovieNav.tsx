import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react'
import { database } from '../../../../../firebase';
import SecondaryNavbarItem from './SecondaryNavbarItem';
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'

interface IProps {
    movieId: any,
    bundleId: any
}

interface IState {
    movie: any,
    title: any
}

class MovieNav extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            movie: undefined,
            title: undefined
        };
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
            <>
                <SecondaryNavbarItem
              isActive={location.pathname.includes(this.props.movieId)}
              key={this.props.movieId}
              icon={<MovieIcon />}
              txt={this.state.title}
              to={`app/bundle/${this.props.bundleId}/extras/movies/${this.props.movieId}`}
              en={false}
              fixed={false}                />
            </>
        );
    }
}

export default MovieNav;
