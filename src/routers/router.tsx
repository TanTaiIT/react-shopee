import { useRoutes } from "react-router-dom";
// import Login from "../pages/Login";
import Register from './../pages/Register'
import RegisterLayout from '../layouts/RegisterLayout'
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const Login = lazy(() => import('./../pages/Login'))
export default function userRouteElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <RegisterLayout />,
      children: [
        {
          path: 'login',
          element: (
            <Suspense>
              <Login />
            </Suspense>
          )
        },
        {
          path: 'register',
          element: (<Suspense><Register /></Suspense>)
        }
      ]
    },

    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '',
          index: true


        }
      ]
    }
  ])

  return routerElement
}