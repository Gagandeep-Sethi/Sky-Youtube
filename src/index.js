import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
