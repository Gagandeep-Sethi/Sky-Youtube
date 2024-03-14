import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import WatchVideo from './components/WatchVideo';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/watch",
      element:<WatchVideo/>
    },
    {
      path:"/",
      element:<Body/>
    }
  ],
  errorElement:<Error/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
    
  </React.StrictMode>
);

