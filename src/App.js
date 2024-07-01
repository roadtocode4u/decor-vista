import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;
