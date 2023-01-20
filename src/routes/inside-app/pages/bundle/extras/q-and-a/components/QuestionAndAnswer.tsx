import { onValue, ref } from 'firebase/database';
import React, { Component } from 'react'
import { database } from '../../../../../../../firebase';
import { mainColors } from '../../../../../themes/colors';
import mainShadows from '../../../../../themes/shadows';
import QuestionCreator from './QuestionCreator';

interface IProps {
    question: any
}

interface IState {
    creator: any,
}

class QuestionAndAnswer extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            creator: undefined
        };
    }

    componentDidMount(): void {
        const reference = ref(database, 'users/' + this.props.question?.creator)
        onValue(reference, (snap) => {
            this.setState((_prev) => ({
                creator: snap.val()
            }))
        })
    }

    render() {
        return (
            <div style={styles.card}>
                <QuestionCreator user={this.state.creator} />
                <div style={styles.questionWrap}>
                    <p style={styles.questionSelf}>
                        {this.props.question?.content}
                    </p>
                </div>
            </div>
        );
    }
}

const styles = {
    card: {
        backgroundColor: '#fefefe',
        borderRadius: 10,
        boxShadow: mainShadows.card,
        padding: 50,
        marginBottom: 50,
    },
    questionWrap: {
        marginTop: 25,
    },
    questionSelf: {
        fontSize: 22,
        color: mainColors.dark,
    }
}

export default QuestionAndAnswer;