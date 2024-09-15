import { Outlet, useRoutes, Navigate } from "react-router-dom";
import Register from './../pages/Register'
import RegisterLayout from '../layouts/RegisterLayout'
import { Suspense, lazy, useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductList from "../pages/ProductList";
import { AppContext } from "../context/app.context";
const Login = lazy(() => import('./../pages/Login'))
export default function userRouteElement() {

  const ProtectRouter = () => {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />

  }

  const RejectRouter = () => {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routerElement = useRoutes([

    {
      path: '',
      element: <RejectRouter />,
      children: [
        {
          path: '',
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
        }
      ],

    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/productList',
          index: true,
          element: <Suspense>
            <ProductList />
          </Suspense>,

        }
      ]
    }


  ])

  return routerElement
}