import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
      {
            path: '/' ,
            element: <Main></Main> ,
            children : [
                  {
                        path:'/' ,
                        element: <Home/>
                  },
                  {
                        path:'/products' ,
                        element: <Products/>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },
                 
            ]
      }
])

export default router;