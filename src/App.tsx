import { APIDados } from "./context/ApiContext";
import AppRouter from "./AppRouter";
import './App.css'

function App() {
  return (
    <>
    <APIDados>
      <AppRouter />
    </APIDados>
    </>
  )
}

export default App