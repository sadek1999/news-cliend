import axios from "axios";

import { useEffect, useState } from "react";
import Card from "./card";


const Allblogs = () => {
    const [blogs,setblogs]=useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:5001/news`)
        .then(res=>{
            // console.log(res.data)
            setblogs(res.data)
        })
    },[])

console.log(blogs)
    
    return (
        <div>
           
            {
                blogs? <div>
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                    {
                    blogs.map(blog=><Card key={blog._id} blog={blog}></Card>)
                }
                    </div>
                
            </div>: <div></div>
            }
           
             
        </div>
    );
};

export default Allblogs;