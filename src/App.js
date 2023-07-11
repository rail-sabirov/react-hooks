import React from 'react';
import { AlertProvider } from './contexts/AlertProvider';
import Main from './components/Main/Main';
import Alert from './components/Alert/Alert';

function App() {

  return (
    // Оборачиваем все провайдером, который внутри содержит глобальный контекст
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert/>
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App