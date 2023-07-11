import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  // Стейт для строки ввода
  const [value, setValue] = useState('initial');

  // Счетчик, который при изменении не вызывает рендер, стейт от useRef
  // renderCount - Это объект со свойствами внутри, типа current
  const renderCount = useRef(1);

  useEffect(() => {
    // Эффект сработает, когда сработает рендер, но не от renderCount, от других стейтов.
    renderCount.current++;

    // Используя useRef мы получаем доспуп к тегу по созданной переменной
    // мы получаем достпук к input и выводим его значение ввода
    console.log(inputRef.current.value);
  });

  const inputRef = useRef(null);
  const focus = () => inputRef.current.focus();

  // Переменная для получения предыдущего значения value в input
  const preValue = useRef('');

  // Отдельный useEffect для отслеживания изменнеия value
  useEffect(() => {
    preValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Количество отработанных рендеров {renderCount.current}</h1>
      <h2>Прошлое сосотояние {preValue.current}</h2>
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <button onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;
