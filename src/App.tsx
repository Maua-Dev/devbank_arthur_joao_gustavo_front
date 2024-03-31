import React from 'react';
import AppRouter from "./AppRouter";
import { Link, Outlet } from "react-router-dom";
import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
    <Button />
    <h1>Pagina App</h1>
    <Outlet />
    </>
  )
}

export default App