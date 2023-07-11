import React from 'react';
import { useAlert } from '../../contexts/AlertProvider';


export default function Alert() {
    // Извлекаем контекст
    const {visible, toggle} = useAlert()

    // Если alert.visisble == false, тогда не выводим сообщение
    if(!visible) return null

    return (
        <div className="alert alert-danger" onClick={toggle}>
            Это очень и очень важное сообщение!
        </div>
    )
}