import React from 'react';
import AppRouter from "./AppRouter";
import { ApiContextProvider } from './context/ApiContext';
import './App.css'

function App() {
  return (
    <>
    <ApiContextProvider>
      <AppRouter />
    </ApiContextProvider>
    </>
  )
}

export default App