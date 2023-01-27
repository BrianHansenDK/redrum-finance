import React, { Component } from 'react'
import { ButtonToolbar, Modal } from 'rsuite';
import MainBtn from '../../../components/MainBtn';
import PLUS from '../../../../../assets/18_above_img.svg'
import { mainColors } from '../../../themes/colors';

interface IProps {
    visible: boolean,
    close: any,
    openInvestModal: any,
}

class ConfirmAgeModal extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Modal open={this.props.visible} onClose={this.props.close} >
                <Modal.Header>
                    <Modal.Title>
                        <h1 style={styles.title}>
                            Confirm age
                        </h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={styles.contentWrap} className='flex-column'>
                        <img style={styles.image} src={PLUS} alt="You have to be minimum 18 years old" />
                        <p style={styles.txt}>
                            You need to be at least 18 years old to invest in Redrum Pro projects. <br />
                            By confirming you are over 18 years old, you agree that this information is correct.
                            Also you accept full responsibility should this not be true.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <MainBtn
                            content={'I am 18 years old or older'}
                            pressed={this.props.openInvestModal}
                            btnColor={'blue'}
                            btnAppearance={'primary'}
                            btnSize={'lg'}
                            isBlock={false} />
                        <MainBtn
                            content={'I am under 18 years old'}
                            pressed={this.props.close}
                            btnColor={'red'}
                            btnAppearance={'primary'}
                            btnSize={'lg'}
                            isBlock={false} />
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}

const styles = {
    title: {
        fontSize: 22.5,
        color: mainColors.dark
    },
    contentWrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 25,
    },
    image: {
        widht: 250,
        height: 250,
    },
    txt: {
        fontSize: 15.5,
        color: mainColors.dark,
        opacity: .9,
    }
}

export default ConfirmAgeModal;