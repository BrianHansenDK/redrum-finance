import React, { Component } from 'react';
import { mainColors } from '../../../../../themes/colors';
import mainShadows from '../../../../../themes/shadows';
import LocationIcon from '@rsuite/icons/Location'

interface IProps {
    user: any
}

class QuestionCreator extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        const user = this.props.user
        return (
            <div style={styles.wrap} >
                {user?.image ? (
                    <img style={styles.image} src={user?.image} alt={user?.username} />
                ) : (
                    <div style={styles.avatar} >
                        {
                            user?.username?.split(' ').lenght < 1 ?
                                user?.username?.split(' ').map((w: any) => w[0]).join('.') :
                                user?.username?.split('')[0] + '.' + user?.username?.split('')[1]}
                    </div>
                )}
                <div style={styles.txtWrap}>

                    <h1 style={styles.userName}>
                        {user?.username ? user?.username : 'Anonymous investor'}
                        <span style={styles.location}>
                            <LocationIcon style={styles.locationIcon} /> {user?.city ? `${user?.city}, ${user?.country}` : 'Location unknown'}
                        </span>
                    </h1>
                    <p>
                        {user?.company ? user?.company : 'Company unknown'} &bull; {user?.role ? user?.role : 'Redrum Pro investor'}
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    wrap: {
        display: 'flex',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        outline: '3px solid rgba(0,0,29, .15)'
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: mainColors.white,
        backgroundColor: mainColors.dark,
        fontSize: 30,
        width: 75,
        height: 75,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        outline: '3px solid rgba(0,0,29, .15)'
    },
    txtWrap: {
        marginLeft: 30,
    },
    userName: {
        fontSize: 22.5,
        color: mainColors.dark,
        lineHeight: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    location: {
        display: 'flex',
        marginLeft: 7.5,
        fontSize: 12.5,
        color: mainColors.dark,
        opacity: .8,
        fontWeight: '500',
    },
    locationIcon: {
        marginRight: 2.5,
    }
}

export default QuestionCreator;