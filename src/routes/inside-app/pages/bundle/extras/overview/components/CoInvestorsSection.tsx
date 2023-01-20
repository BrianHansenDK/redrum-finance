import { onValue, ref } from 'firebase/database';
import React from 'react'
import { Divider } from 'rsuite';
import { database } from '../../../../../../../firebase';
import { mainColors } from '../../../../../themes/colors';
import CoInvestorCard from './CoInvestorCard';
interface IProps { }

interface IState {
    userData: any[]
}

class CoInvestorsSection extends React.Component<IProps, IState> {
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
                <h2 style={styles.title}>Co-investors</h2>
                <Divider style={styles.divider} />
                <CoInvestorCard user={this.state.userData[0]} users={this.state.userData} />
            </div>
        );
    }
}

const styles = {
    wrap: {
        marginTop: 50,
        width: '80%',
        marginBottom: 75,
    },
    title: {
        marginBottom: 15,
        color: mainColors.dark,
    },
    divider: {
        marginBottom: 50,
        backgroundColor: mainColors.dark
    },
}

export default CoInvestorsSection;