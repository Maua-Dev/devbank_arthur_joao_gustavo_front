import HomePage from "./pages/HomePage";
import CountPage from "./pages/CountPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

export function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CountPage" element={<CountPage />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter