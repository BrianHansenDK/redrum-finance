import React, { Component } from 'react'
import { Button, Modal } from 'rsuite';

interface IProps {
    title: string,
    body: string,
    visible: boolean,
    close: any,
}

class UpcomingModal extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Modal open={this.props.visible} onClose={this.props.close} >
                <Modal.Header>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance='primary' color='red' onClick={this.props.close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpcomingModal;