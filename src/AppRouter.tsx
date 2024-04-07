import HomePage from "./pages/HomePage";
import CountPage from "./pages/CountPage";
import ErrorPage from "./pages/ErrorPage";
import SaquePage from "./pages/SaquePage";
import TransitionsPage from "./pages/TransitionsPage";
import DepositPage from "./pages/DepositPage";
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
          <Route path="/Saquepage" element={<SaquePage />} />
          <Route path="/TransitionsPage" element={<TransitionsPage />} />
          <Route path="/DepositPage" element={<DepositPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter