import { onValue, ref } from 'firebase/database'
import React from 'react'
import { Button, Input } from 'rsuite'
import { database } from '../../../../../../firebase'
import EMPTY from '../../../../../../assets/empty_img.png'
import { mainColors } from '../../../../themes/colors'
import NoQuestionsSection from './components/NoQuestionsSection'
interface IProps {
    params: any
}

interface IState {
    projectData: any
}

class BundleQAndADetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: {}
        }
    }

    componentDidMount(): void {
        const { bundleId } = this.props.params
        const reference = ref(database, 'projects/' + bundleId)
        onValue(reference, (snap) => {
            this.setState((_previousValue) => ({
                projectData: snap.val()
            }))
        })


    }

    render() {
        return (
            <div>
                {
                    this.state.projectData?.comments ? (
                        <p>Show comments</p>
                    ) : (
                        <NoQuestionsSection image={EMPTY} />
                    )
                }
                <div>
                    <h1>
                        Be the first to add a question
                    </h1>
                    <Input as='textarea' rows={5} placeholder='Write question here' />
                    <Button>
                        Add question
                    </Button>
                </div>
            </div>
        )
    }
}



export default BundleQAndADetails