import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Add from "../Pages/Add/Add";
import Allblogs from "../Pages/AllBlig/Allblogs";
import Featured from "../Pages/Featured/Featured";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";
import Details from "../Pages/Home/homeComponent/Details";
import Typenews from "../Pages/Home/homeComponent/Banner/Typenews";

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
        },{
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:5001/news/${params.id}`)
            
        },{
            path:'/news/:type',
            element:<Typenews></Typenews>,
            
            loader:({params})=>fetch(`http://localhost:5001/news?type=${params.type}`)
        }

      ]
    },
  ]);


  export default router
