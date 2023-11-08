import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import axios from "axios";


const Details = () => {
    const news = useLoaderData()
    const {user}=useContext(AuthContext)
    const[cuser,setcuser]=useState(null)

    // console.log(user?.email)
    const { sd, ld, name, title, img, date, type, email, autorimg } = news;
    const handalComment=e=>{
        e.preventDefault();
        const form=e.target;
        const comment=form.comment.value;
        const name=user?.name;
        const img=user?.img;
        const cinfo={comment,name,img}
        console.log(cinfo)

    }
    useEffect(()=>{
        axios.get(`http://localhost:5001/getusers/${user?.email}`)
                    .then(res => {
                        // console.log(res.data)
                        // console.log(res.data.name,res.data.img)
                        setcuser(res.data)
                        
                    })
    },[user])
    // console.log(cuser)
    return (
        <div>
            <div className="card bg-base-100  mx-auto shadow-xl lg:w-4/6">

                <div className="card-body space-y-3">
                    <div>
                        <p className="text-4xl font-bold lg:w-2/3">{title}</p>
                        <figure><img src={img} alt="Shoes" /></figure>
                        <h2 className="card-title text-bold ">{type}</h2>
                        <p className="text-4xl font-semibold">{title}</p>
                        <p>{ld}</p>

                    </div>
                    <div >
                    <form className="flex flex-col gap-2 " action="">
                    <input type="text" placeholder=" your comment" className="input input-bordered input-lg w-full max-w-xs" name="comment" required />
                    <input onSubmit={handalComment} type="submit" className="btn-primary btn w-20" value="submit"/>
                    </form>
                    </div>


                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
