import React from 'react'
interface IProps {
    params: any
}

interface IState {
    projectData: any[]
}

class BundleQAndADetails extends React.Component {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    render() {
        return (
            <div>BundleQAndADetails</div>
        )
    }
}

export default BundleQAndADetails