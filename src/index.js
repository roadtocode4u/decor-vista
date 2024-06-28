import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

{
  path:"/",
  element:<Home/>
},
{
  path:"/app",
  element:<App/>
}





])
root.render(<RouterProvider router={router}/> );
