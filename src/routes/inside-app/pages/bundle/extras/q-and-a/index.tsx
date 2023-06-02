import { onValue, ref } from 'firebase/database'
import React from 'react'
import { Button, Input } from 'rsuite'
import { auth, database } from '../../../../../../firebase'
import EMPTY from '../../../../../../assets/empty_img.png'
import { mainColors } from '../../../../themes/colors'
import NoQuestionsSection from './components/NoQuestionsSection'
import AskQuestionForm from './components/AskQuestionForm'
import QuestionAndAnswer from './components/QuestionAndAnswer'
import bundleStrings from '../../../../../../library/string/Bundle'
interface IProps {
    params: any,
    en: boolean,
    isMobile: boolean,
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
        const isMobile = this.props.isMobile
        return (
            <div id='top'>

                {
                    this.state.questionsData?.length > 0 ? (
                        <div style={{ marginBottom: isMobile ? 25 : 50 }}>
                            {this.state.questionsData?.map((q) => (
                                <QuestionAndAnswer isMobile={isMobile} question={q} key={q.createdAt} />
                            ))}
                        </div>
                    ) : (
                        <NoQuestionsSection image={EMPTY} />
                    )
                }
                <div>

                    <h1 style={styles.title}>
                        {
                            this.state.questionsData?.length > 0 ?
                            this.props.en ? bundleStrings.qaEN.title : bundleStrings.qaDE.title
                            : this.props.en ? bundleStrings.qaEN.fTitle : bundleStrings.qaDE.fTitle
                        }
                    </h1>
                    <AskQuestionForm bundleId={bundleId} questionsData={this.state?.questionsData} en={this.props.en} />
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
