import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Add from "../Pages/Add/Add";
import Allblogs from "../Pages/AllBlig/Allblogs";
import Featured from "../Pages/Featured/Featured";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:"/add",
            element:<Add></Add>
        },{
            path:'/all',
            element:<Allblogs></Allblogs>
        },{
            path:'featured',
            element:<Featured></Featured>
        },{
            path:'wishlist',
            element:<Wishlist></Wishlist>

        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:'/singup',
            element:<Singup></Singup>
        }

      ]
    },
  ]);


  export default router
