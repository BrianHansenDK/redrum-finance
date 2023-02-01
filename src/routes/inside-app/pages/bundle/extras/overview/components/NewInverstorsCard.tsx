import React, { Component } from 'react';
import { auth } from '../../../../../../../firebase';
import { mainColors } from '../../../../../themes/colors';
import mainShadows from '../../../../../themes/shadows';

interface IProps {
    user: any,
}

class NewInverstorsCard extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={styles.wrap}>
                {
                    this.props.user?.image ? (
                        <img style={styles.image} src={this.props.user?.image} alt={`Profile image for ${this.props.user?.username}`} />
                    ) : (
                        <div style={styles.avatar}>
                            {this.props.user?.username.split(' ').length == 2 ? this.props.user?.username.split(' ').map((w: any) => w[0]).join('.') : this.props.user?.username.slice(0, 1)}
                        </div>
                    )
                }
                <div style={styles.txtWrap}>
                    <h1 style={styles.userName}>
                        {this.props.user?.email == auth.currentUser?.email ? 'You' : this.props.user?.username}
                    </h1>
                    <p>
                        <span style={styles.role}>
                            {this.props.user?.money_available !== undefined ? 'Redrum Pro investor' : 'Redrum Pro member'}
                        </span>
                        {this.props.user?.city ? (
                            `${this.props.user?.city}, ${this.props.user?.country}`
                        ) : 'Location unknown'}
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    wrap: {
        display: 'flex',
        width: '33%',
        marginBottom: 50,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        outline: '5px solid rgba(29,29,69, .10)'
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: '50%',
        boxShadow: mainShadows.image,
        backgroundColor: mainColors.dark,
        color: mainColors.white,
        fontSize: 30,
        outline: '5px solid rgba(29,29,69, .10)',
    },
    txtWrap: {
        marginLeft: 30,
    },
    userName: {
        fontSize: 22,
        color: mainColors.dark,
        fontWeight: '700',
        lineHeight: 1,
    },
    role: {
        display: 'block',
        color: mainColors.dark,
        fontWeight: '700',
        marginTop: 7.5,
    },
}

export default NewInverstorsCard;
