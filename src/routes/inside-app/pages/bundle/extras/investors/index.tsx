import React from 'react'
interface IProps {
    params: any
}

interface IState {
    projectData: any[]
}

class BundleInvestorsDetails extends React.Component {
    constructor(props: IProps) {
        super(props)
        this.state = {
            projectData: []
        }
    }

    render() {
        return (
            <div>BundleInvestorsDetails</div>
        )
    }
}

export default BundleInvestorsDetails