import React, { Children, Key, MouseEventHandler } from 'react'
import { Button } from 'rsuite'

export interface IMainBtnProps {
    content: string,
    pressed: MouseEventHandler,
    btnColor: any,
    btnAppearance: any
    btnSize: any,
    isBlock: boolean
}



const MainBtn: React.FunctionComponent<IMainBtnProps> = (props) => {
    const { content, pressed, btnColor, btnAppearance, btnSize, isBlock } = props
    const styles = {
        btn: {
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
        }
    }
    return (
        <Button
            appearance={btnAppearance}
            color={btnColor}
            size={btnSize}
            onClick={pressed}
            style={styles.btn}
            className='btn trans'
            block={isBlock}
        >
            {content}
        </Button>
    )
}

export default MainBtn