import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';
import { database, getUsers } from '../../../../../../../firebase';
import { mainColors } from '../../../../../themes/colors';
import NewInverstorsCard from './NewInverstorsCard';

interface IProps {
    project: any
}

interface IState {
    userData: any[]
}

class NewInvestorsSection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            userData: []
        };
    }
    componentDidMount(): void {
        const reference = ref(database, 'users/')
        onValue(reference, (snap) => {
            let data: any[] = []
            snap.forEach((user) => {
                data.push(user.val())
            })
            this.setState((_previousState) => ({
                userData: data
            }))
        })
    }
    render() {
        return (
            <div style={styles.wrap}>

                <h3 style={styles.title}>
                    Newest investors
                </h3>
                <Divider style={styles.divider} />
                <div style={styles.userWrap} className='flex-wrap'>

                    {
                        this.state.userData.map((user) => (
                            <NewInverstorsCard user={user} key={user?.email} />
                        ))
                    }
                </div>
                <p style={styles.linkWrap}>
                    <Link style={styles.link} to={`/app/bundle/${this.props.project?.id}/extras/investors`}>
                        See all investors
                    </Link>
                </p>
            </div>
        );
    }
}

const styles = {
    wrap: {
        width: '80%',
        marginBottom: 100,
    },
    title: {
        marginBottom: 15,
        color: mainColors.dark,
    },
    divider: {
        backgroundColor: mainColors.dark,
        marginBottom: 50,
    },
    userWrap: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    linkWrap: {
        marginTop: 20,
    },
    link: {
        fontSize: 20,
        color: mainColors.dark,
        opacity: .9,
    }
}

export default NewInvestorsSection;