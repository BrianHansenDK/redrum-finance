import React, { Component } from 'react'
import { Table } from 'rsuite';
import EMPTY from '../../../../../assets/empty_img.png'
import { mainColors } from '../../../themes/colors';
interface IProps {
    userInvestments: any[]
}

class ChartBody extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
      const { Column, HeaderCell, Cell } = Table;
      const userInvestments = this.props.userInvestments
        return (
            <>
                {
                    userInvestments.length > 0 ? (
                        <Table data={userInvestments}>
                            <Column width={150}>
                              <HeaderCell>Project</HeaderCell>
                              <Cell dataKey="project" />
                            </Column>
                            <Column width={150}>
                              <HeaderCell>Amount in €</HeaderCell>
                              <Cell dataKey="amount" />
                            </Column>
                            <Column width={150}>
                              <HeaderCell>Guaranteed return</HeaderCell>
                              <Cell dataKey="gain" />
                            </Column>
                            <Column width={150}>
                              <HeaderCell>Movies</HeaderCell>
                              <Cell dataKey="movies" />
                            </Column>
                        </Table>
                    ) : (
                        <div style={styles.wrap}>
                            <div style={styles.txtWrap}>
                                <h1 style={styles.emptyTitle}>
                                    No investments yet
                                </h1>
                                <p>
                                    You have not invested in a project yet. <br />
                                    {
                                        location.pathname == '/app/investments' ?
                                            'You can find them down below or in the Dashboard.' :
                                            'You can find projects under "Investments" or in the "Dashboard".'
                                    }

                                </p>
                            </div>
                            <img style={styles.image} src={EMPTY} alt="Empty box showcasing yyou have no investments" />
                        </div>
                    )
                }
            </>
        );
    }
}

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    txtWrap: {
        marginRight: 250,
    },
    emptyTitle: {
        fontSize: 22.5,
        color: mainColors.dark,
        lineHeight: 1,
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
    }
}

export default ChartBody;
