import React, { useEffect, useState } from 'react';


// Компонент который создаем лист, который на входе получает функцию
// - функция возвращает массив из элементов, которые динамически добавляются в него
// при изменении значения count
export default function ItemsList({ getItems }) {
    // Что бы динамически добавлять новые элементы в список, нужны стейты и эффект
    const [items, setItems] = useState([])

    useEffect(() => {
        // получаем список через переданную функцию getItems
        const newItems = getItems()

        // Обновляем список
        setItems(newItems)

        // Test: Сколько раз вызывается этот useEffect
        console.log('-- render')
    }, [getItems])

    return (
        <ul>
            { items.map(e => <li key={e}>{e}</li>) }
        </ul>
    )
}