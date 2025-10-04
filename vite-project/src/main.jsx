import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import BookPage from './pages/book.jsx'
import userPage from './pages/user.jsx'
import './global.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ToDoApp from './Components/learn/todo/TodoApp.jsx'
import ErrorPage from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    element:<ErrorPage/>
    children : [
      {
        index:true,
        element:<div><ToDoApp/></div>

      },
      {
    path: "/user",
    element: <userPage/>
  },
  {
    path: "/products",
    element: <BookPage/>
  },

    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
