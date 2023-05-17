import React from 'react'
import { useParams } from 'react-router-dom'
import { List } from 'rsuite'
import { mainColors } from '../../../../themes/colors'
import mainShadows from '../../../../themes/shadows'
import { PROJECTS } from '../../../dashboard/components/util'
import PresentationCard from './components/image-gallery/PresentationCard'
import FileIcon from '@rsuite/icons/FileDownload'
import MainBtn from '../../../../components/MainBtn'
import FilesSection from './components/FilesSection'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../../../firebase'
import Warning from './components/Warning'
import CoInvestorsSection from './components/CoInvestorsSection'
import NewInvestorsSection from './components/NewInvestorsSection'
import MovieTrailer from './components/trailers/MovieTrailer'
import { FirebaseBundle } from '../../../../../../database/Objects'
import TrailerCard from './components/trailers/TrailerCard'
import FilesCard from './components/FilesCard'

interface IProps {
    params: any,
    en: boolean,
    isMobile: boolean,
}

interface IState {
    projectData: FirebaseBundle[]
}

class BundleOverview extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    componentDidMount(): void {
        const reference = ref(database, 'projects/')
        onValue(reference, (snap) => {
            let data: any[] = []
            snap.forEach((project) => {
                data.push(project.val())
            })
            this.setState((_previousState) => ({
                projectData: data
            }))
        })
    }

    render() {

        const { bundleId } = this.props.params
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        return (
            this.state.projectData.map((project) => (
                project.id == bundleId ? (
                    <div style={styles.wrapper} className='flex-column' key={project.id}>
                        <TrailerCard movieIds={project.movies!} en={this.props.en}/>
                        <PresentationCard project={project} en={this.props.en} showGallery />
                        <FilesCard project={project!} en={this.props.en}/>
                        <FilesSection date={today} en={this.props.en} />
                        <CoInvestorsSection projectId={project.id!} en={this.props.en} />
                        <NewInvestorsSection isMobile={this.props.isMobile} project={project} en={this.props.en} />
                        <Warning key={3} />
                    </div>
                ) : null
            ))

        )
    }
}

const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}

export default BundleOverview
