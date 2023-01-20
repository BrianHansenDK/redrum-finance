import React, { Component } from 'react'
import { mainColors } from '../../../../../themes/colors';

interface IProps {
    image: string
}

class NoQuestionsSection extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={styles.wrap} className='flex-column'>
                <h1 style={styles.title}>
                    No questions yet
                </h1>
                <p style={styles.des}>
                    This project does not have any questions.
                </p>
                <img
                    src={this.props.image}
                    alt="EMpty box indicating that no movies are in this project"
                    width={200}
                    height={200}
                />
            </div>
        );
    }
}

const styles = {
    wrap: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: 27.5,
        fontWeight: 'bold',
        color: mainColors.dark,
    },
    des: {
        fontSize: 22.5,
        color: mainColors.dark,
        opacityy: .8,
        marginBottom: 10,
    }
}

export default NoQuestionsSection;