import React, { Component } from 'react'
import { Button, Modal } from 'rsuite';
import dashboardStrings from '../../../library/string/Dashboard';

interface IProps {
    title: string,
    body: string,
    visible: boolean,
    close: any,
    en: boolean,
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
                        {this.props.en ? dashboardStrings.comingSoonEN.btn : dashboardStrings.comingSoonDE.btn}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpcomingModal;
