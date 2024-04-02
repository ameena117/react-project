import './App.css'
import Home from './componants/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './componants/Cart';
import Signup from './componants/Signup';
import Signin from './componants/Signin';
import Categories from './componants/Categories';
import Products from './componants/Products';
import Product from './componants/Product';
import ForgotPassword from './componants/ForgotPassword';
import SendCode from './componants/SendCode';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
      {
        path: '/sendCode',
        element: <SendCode/>
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword/>
      }
    ]
  },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App