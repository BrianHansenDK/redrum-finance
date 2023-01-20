import React, { Component } from 'react';
import { Divider } from 'rsuite';
import { mainColors } from '../../../themes/colors';

class ChartTitle extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={styles.wrap}>
                <div style={styles.txtWrap}>
                    <h1 style={styles.title}>Investments</h1>
                    <p>
                        Your top 3 investments
                    </p>
                </div>
                <Divider style={styles.divider} />
            </div>
        );
    }
}

const styles = {
    wrap: {
    },
    txtWrap: {
        padding: '0 10px',

    },
    title: {
        fontSize: 18.5,
        lineHeight: 1,
        color: mainColors.dark,
        marginBottom: 5,
    },
    divider: {
        backgroundColor: mainColors.main,
        width: '60%',
        margin: 0,
        marginTop: 10,
    }
}

export default ChartTitle;