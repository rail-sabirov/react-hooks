import './App.css';
import { useState } from 'react';

// Вычисляемое начальное значение для хука useState
function computeInitialCounter() {
  console.log('Some calculation...');

  return Math.trunc(Math.random() * 20);
}

function App() {
  // Отслеживаем состояние счетчика
  const [counterState, setCounterState] = useState(() => computeInitialCounter());

  // Первоначальное значение - объект
  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  });

  // функция добавления основанная на предыдущем значении
  const increment = () => {
    setCounterState((prevCounter) => {
      return prevCounter + 1;
    });
  };

  // функция удаления основанная на предыдущем значении
  const decrement = () => {
    setCounterState((prevCounterState) => prevCounterState - 1);
  };

  // Изменение одного значения объекта, а не самого объекта целиком
  function updateTitle() {
    // Используем предыдущее состояние для замены/переопределения части объекта
    setState((prevState) => {
      return {
        ...prevState,
        title: prevState.title + '-new',
      };
    });
  }

  // Выводим счетчик и кнопки с действиями на клики
  return (
    <div>
      <h1>Счетчик: {counterState}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Удалить</button>

      <button onClick={updateTitle}>Изменить заголовок</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
