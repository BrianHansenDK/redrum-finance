import { useState } from "react";

export const modalContext = () => {
    const [isVisible, setVisible] = useState(false)
    const show = () => {
        setVisible(true)
    }
    const hide = () => {
        setVisible(false)
    }
}