import { useCallback, useState } from 'react';
import './App.css';
import ItemsList from '../ItemsList';

function App() {
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  // функция создания новых элементов DOM в зависимости от count
  // Эта функция может совершать запросы к API, что требует время на выполнение
  // Оборачиваем это все в useCallback, чтобы закешировать. Возрвщается функция.
  const generateItemFromAPI = useCallback(() => {
    // Создаем новый массив для элементов количеством count
    return new Array(count)
      // инициализируем каждый элемент, заполняя пустой строкой
      .fill('')
      // Преобразуем массив, сам элемент нам не нужен, нужен только индекс
      .map((_, i) => `Элемент ${i + 1}`)
  },[count])
  

  return (
    <>
      <h1 style={styles}>Количество элементов: {count} </h1>
      <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setCount(prev => prev - 1)}>Удалить</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить цвет заголовка</button>

      <ItemsList getItems={generateItemFromAPI}/>
    </>
  )
}

export default App;
