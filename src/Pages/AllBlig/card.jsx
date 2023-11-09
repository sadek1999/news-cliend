import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../Auth/AuthProvider";


const Card = ({blog}) => {

    const {user}=useContext(AuthContext)
    const {sd, ld, name, title, img, date, type,  autorimg,_id}=blog;
    const email=user?.email;
    

    const handllist=(blog)=>{
        const myb={blog,email}
        console.log(myb)
        axios.post(`http://localhost:5001/wishlist`,myb)
        .then(res=>{
            console.log(res.data)
        })
       

    }

   
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-56" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{type}</h2>
                <p>{title}</p>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} className="btn btn-outline btn-success ">Details</Link>
                    <button onClick={ ()=>{handllist(blog)} } className="btn btn-outline btn-success " >Wishlist</button>
                  
                    
                </div>
            </div>
        </div>
        
    );
};

export default Card;