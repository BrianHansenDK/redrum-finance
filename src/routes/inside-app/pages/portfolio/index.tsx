import React, { Component } from 'react';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import RadialChart from '../investments/components/RadialChart';

interface IState {
    investmentData: any[]
}

class PortfolioPage extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            investmentData: []
        };
    }
    render() {
        return (
            <LayoutWithSidebar>
                <RadialChart />
            </LayoutWithSidebar>
        );
    }
}

export default PortfolioPage;