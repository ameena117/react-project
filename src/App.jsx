import './App.css'
import Home from './componants/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './componants/Cart';
import Signup from './componants/Signup';
import Signin from './componants/Signin';
import Categories from './componants/Categories';
import Products from './componants/Products';
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