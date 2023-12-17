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
import PrivateRout from "./PrivateRout";
import Update from './../Pages/Update/Update';

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
            element: <PrivateRout><Add></Add></PrivateRout>
        },{
            path:'/all',
            element:<Allblogs></Allblogs>
        },{
            path:'featured',
            element:<Featured></Featured>
        },{
            path:'wishlist',
            element:<PrivateRout><Wishlist></Wishlist></PrivateRout>

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
            loader:({params})=>fetch(`https://news-server-steel.vercel.app/news/${params.id}`)
            
        }
        
        
        ,{
            path:'/news/:type',
            element:<Typenews></Typenews>,
            
            loader:({params})=>fetch(`https://news-server-steel.vercel.app/news?type=${params.type}`)
        }

      ],
      
    },
    {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://news-server-steel.vercel.app/news/${params.id}`)
        
    }
  ]);


  export default router
