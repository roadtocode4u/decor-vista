import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

export default App;
