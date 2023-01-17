import React, { ForwardedRef, forwardRef } from 'react'
import { Form } from 'rsuite';

const TextField = forwardRef((props: any, ref: any) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

export default TextField