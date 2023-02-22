import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Me from './pages/Me'
import Project from './pages/Project'
import Technologies from './pages/Technologies'
import Journey from './pages/Journey'
import Error404 from './pages/Error404'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    errorElement: <Error404/>,
    children : [
      {
        path:"/",
        element: <Me />,
        errorElement:<Error404/>,
      },
      {
      path: "projects",
      element: <Project/>,
      errorElement:<Error404/>,
      }, 
      {
        path: "technologies",
        element: <Technologies/>,
        errorElement:<Error404/>,
        }, 
        {
          path: "journey",
          element: <Journey/>,
          errorElement:<Error404/>,
          }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
