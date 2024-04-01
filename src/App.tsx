import React from 'react';
import AppRouter from "./AppRouter";
import { Link, Outlet } from "react-router-dom";
import './App.css'
import CountPage from './pages/CountPage';
import Button from './components/Button'

function App() {
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App