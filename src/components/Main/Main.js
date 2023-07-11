import React from 'react';
import { useAlert } from '../../contexts/AlertProvider';

export default function Main() {

    const { visible, toggle } = useAlert()
    let msg = visible ? 'Скрыть' : 'Показать'

    return (
        <>
            <h1>Пример c Context</h1>
            <button 
                className="btn btn-success" 
                onClick={toggle}
            >{msg} alert сообщение</button>
        </>
    )
}