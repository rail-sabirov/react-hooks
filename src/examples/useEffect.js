import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  // Фнукция которая будет вызываться при движении мыши
  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Ожидаем когда компонент окончательно будет готов
  useEffect(() => {
    console.log('ComponentDidMounted');

    // Добавляем слушателя, который будет остлеживать перемещение мыши
    window.addEventListener('mousemove', mouseMoveHandler);

    // Cleaning в useEffect
    // например отписаться или закрыть что то
    return () => {
      // Чтобы очистить слушатель
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  });

  // Отслеживаем изменение значения в type
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>TODOs</button>
      <button onClick={() => setType('posts')}>Посты</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
