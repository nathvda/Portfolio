import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Me from './pages/Me'
import Project from './pages/Project'
import Technologies from './pages/Technologies'
import Journey from './pages/Journey'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement: "??",
    children : [
      {
        path:"/",
        element: <Me />,
        errorElement:"??",
      },
      {
      path: "projects",
      element: <Project/>,
      errorElement:"??",
      }, 
      {
        path: "technologies",
        element: <Technologies/>,
        errorElement:"??",
        }, 
        {
          path: "journey",
          element: <Journey/>,
          errorElement:"??",
          }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
