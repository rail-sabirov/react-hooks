// Методика как в Angular services или похожее на NextJS HOC
// Создаем обертку с глобальным контекстом 

import React, { useContext, useState } from 'react'

// Сам контекст, приватный, только для этого модуля
const AlertContext = React.createContext()

// Свой "хук/Понятную обертку", которая будет использовать "приватный" контекст в других компонентах
export const useAlert = () => {
    return useContext(AlertContext)
}

// Создаем компонент для оборачивания
// children - это все вложено в тег
export const AlertProvider = ({ children }) => {
    // Переменная состояния для видимости компоненты alert
    const [alertVisibility, setAlertVisibility] = useState(false)

    // Функция переключения состояния видимости
    const toggle = () => setAlertVisibility(prev => !prev)

    // Вывод верстки компоненты
    return (
        // В параметрах экспортируем объект с множеством переменных и функцией
        <AlertContext.Provider value={{
            visible: alertVisibility,

            // Экспортируем функцию переключения видимости
            toggle
        }}>
            { children }
        </AlertContext.Provider>
    )
}