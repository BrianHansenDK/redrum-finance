import React, { Component } from 'react';
import { useMediaQuery } from '../../../../misc/custom-hooks';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import RadialChart from '../investments/components/RadialChart';

interface IProps {
  en: boolean,
  setEn: any,
  isMobile: boolean,
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
          <div>
            Portfolio page
          {/*

<LayoutWithSidebar en={this.props.en} setEn={this.props.setEn}>
<RadialChart isMobile={this.props.isMobile} />
</LayoutWithSidebar>
*/}
          </div>
        );
    }
}

export default PortfolioPage;
