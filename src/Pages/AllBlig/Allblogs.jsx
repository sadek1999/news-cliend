import axios from "axios";

import { useEffect, useState } from "react";
import Card from "./card";


const Allblogs = () => {
    const [blogs, setblogs] = useState(null)
    const [t,sett]=useState(null)
    const [type,settype]=useState(null)

    const handltype = e => {
        e.preventDefault()
        console.log(e.target.value)
         settype(e.target.value)
        

        
    }
    
    useEffect(() => {
        if(type){
            axios.get(`https://news-server-steel.vercel.app/news?type=${type}`)
            .then(res => {
                // console.log(res.data)
                // setblogs(res.data)
                setblogs(null)
                setblogs(res.data)
                // sett(res.data)
            })
        }
        
    }, [type])

   
    
    useEffect(() => {
        axios.get(`https://news-server-steel.vercel.app/news`)
            .then(res => {
                // console.log(res.data)
                setblogs(res.data)
            })
    }, [])

    console.log(t)

    return (
        <div>

            <div className="h-32">

                <select onChange={handltype} className="w-full max-w-xs select select-bordered">
                    <option disabled selected>Who shot first?</option>
                    <option >Business</option>
                    <option>Politics</option>
                    <option>
                        Israel-Gaza war</option>
                    <option>economy</option>
                    <option>Sports</option>
                </select>
            </div>


            {
                blogs ? <div>



                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                        {
                            blogs.map(blog => <Card key={blog._id} blog={blog}></Card>)
                        }
                    </div>

                </div> : <div></div>
            }


        </div>
    );
};

export default Allblogs;