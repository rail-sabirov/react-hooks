import './App.css';
import React, { useState, useMemo, useEffect } from 'react';

// Эмуляция сложных расчетов с задержкой
function complexCompute(num) {
  // Подтормаживаем, чтобы операция была длительной
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);

  // Вычисляемое значение для заголовка, кешируем с помощью useMemo
  // Передаем в функцию number
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])
    
  // Цвет заголовка
  const [colored, setColored] = useState(false);
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black',
  }), [colored])

  // Вызываем эффект при изменении стиля, который зависит от colored
  useEffect(() => {
    console.log('Styles Changed!')
  }, [styles])


  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>

      <button onClick={() => {setNumber((prev) => prev + 1);}}>Добавить</button>
      <button onClick={() => {setNumber((prev) => prev - 1);}}>Отнять</button>

      <button onClick={() => setColored((prev) => !prev)}>Изменить цвет заголовка</button>
    </>
  );
}

export default App;
