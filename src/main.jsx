import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import App from './App'
import Home from './components/home/Home'
import Login from './components/access/Login'
import Register from './components/access/Register'
import AuthProvider from './components/access/AuthProvider'
import CheckOut from './components/service/CheckOut'
import PrivateRoute from './components/PrivateRoute'
import ManageCheckouts from './components/manageCheckouts/ManageCheckouts'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/manageCheckouts',
            element:<PrivateRoute><ManageCheckouts></ManageCheckouts></PrivateRoute>
          },
          {
            path:'/checkOut/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
