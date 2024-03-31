import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import CountPage from './pages/CountPage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/abcd",
//     element: <HomePage />
//   }
// ])
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [  
        {
          path: "/CountPage",
          element: <CountPage />
        }  
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
