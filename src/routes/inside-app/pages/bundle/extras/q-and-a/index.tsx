import { onValue, ref } from 'firebase/database'
import React from 'react'
import { Button, Input } from 'rsuite'
import { auth, database } from '../../../../../../firebase'
import EMPTY from '../../../../../../assets/empty_img.png'
import { mainColors } from '../../../../themes/colors'
import NoQuestionsSection from './components/NoQuestionsSection'
import AskQuestionForm from './components/AskQuestionForm'
import QuestionAndAnswer from './components/QuestionAndAnswer'
interface IProps {
    params: any
}

interface IState {
    projectData: any,
    questionsData: any[],
}

class BundleQAndADetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: {},
            questionsData: [],
        }
    }

    componentDidMount(): void {
        const { bundleId } = this.props.params
        const reference = ref(database, 'projects/' + bundleId)
        onValue(reference, (snap) => {
            this.setState((_previousValue) => ({
                projectData: snap.val(),
            }))
        })
        const questionRef = ref(database, 'questions/')
        onValue(questionRef, (snap) => {
            let data: any[] = []
            snap.forEach((q) => {
                if (q.val().project == bundleId) {
                    data.push(q.val())
                }
            })
            this.setState((_previousData) => ({
                questionsData: data
            }))
        })
    }

    render() {
        const { bundleId } = this.props.params
        return (
            <div>

                {
                    this.state.questionsData?.length > 0 ? (
                        <div style={{ marginBottom: 50 }}>
                            {this.state.questionsData?.map((q) => (
                                <QuestionAndAnswer question={q} key={q.createdAt} />
                            ))}
                        </div>
                    ) : (
                        <NoQuestionsSection image={EMPTY} />
                    )
                }
                <div>

                    <h1 style={styles.title}>
                        {
                            this.state.questionsData?.length > 0 ? 'Ask a question' : 'Be the first to ask a question'
                        }
                    </h1>
                    <AskQuestionForm bundleId={bundleId} questionsData={this.state?.questionsData} />
                </div>
            </div>
        )
    }
}

const styles = {
    title: {
        fontSize: 27.5,
        color: mainColors.dark,
    },
}


export default BundleQAndADetails