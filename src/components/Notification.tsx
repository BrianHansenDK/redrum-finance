import React from 'react'
import { Button, Message } from 'rsuite'

const PushNotification = ({ type, content }: { type: any, content: any }) => {
    return (
        <Message showIcon type={type}>
            <div>
                {content}
            </div>
        </Message>
    )
}

export default PushNotification