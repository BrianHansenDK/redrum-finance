import React from 'react'
interface IProps {
    params: any
}

interface IState {
    projectData: any[]
}

class BundleUpdatesDetails extends React.Component {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    render() {
        return (
            <div id='top'>BundleUpdatesDetails</div>
        )
    }
}

export default BundleUpdatesDetails
