import React, { Component } from 'react'
import { mainColors } from '../../../themes/colors';
import mainShadows from '../../../themes/shadows';
import ChartBody from './ChartBody';
import ChartTitle from './ChartTitle';

interface IState {
    userInvestments: any[]
}

class RadialChart extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userInvestments: []
        };
    }
    render() {
        return (
            <div style={styles.wrap} >
                <ChartTitle />
                <ChartBody userInvestments={this.state.userInvestments} />
            </div>
        );
    }
}

const styles = {
    wrap: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 10,
        padding: '25px 20px',
        backgroundColor: '#fefefe',
        boxShadow: mainShadows.card,
    }
}

export default RadialChart;