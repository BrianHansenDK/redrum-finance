import { useState } from "react";

export const modalContext = () => {
    const [isVisible, setVisible] = useState(false)
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
}

export function toFixedIfNecessary(value: any, dp: any) {
    return +parseFloat(value).toFixed(dp);
}