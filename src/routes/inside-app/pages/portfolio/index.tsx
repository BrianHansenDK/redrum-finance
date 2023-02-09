import React, { Component } from 'react';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import RadialChart from '../investments/components/RadialChart';

interface IProps {
  en: boolean,
  setEn: any,
}

interface IState {
    investmentData: any[]
}

class PortfolioPage extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            investmentData: []
        };
    }
    render() {
        return (
            <LayoutWithSidebar en={this.props.en} setEn={this.props.setEn}>
                <RadialChart />
            </LayoutWithSidebar>
        );
    }
}

export default PortfolioPage;
