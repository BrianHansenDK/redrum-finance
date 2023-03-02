import React, { Component } from 'react';
import { Divider } from 'rsuite';
import { mainColors } from '../../../themes/colors';
interface IProps {isMobile: boolean}
class ChartTitle extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
      const isMobile = this.props.isMobile
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
            width: isMobile ? '100%' : '60%',
            margin: isMobile ? '10px 0' : 0,
            marginTop: 10,
        }
    }
        return (
            <div style={styles.wrap} className={isMobile ? 'text-center' : ''}>
                <div style={styles.txtWrap}>
                    <h1 style={styles.title}>Investments</h1>
                    <p>
                        Your shares
                    </p>
                </div>
                <Divider style={styles.divider} />
            </div>
        );
    }
}



export default ChartTitle;
