import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { BsGoogle } from "react-icons/bs";


const Singup = () => {

    const {singup,googlelogin}=useContext(AuthContext)

    const handlsingup=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const img=form.img.value;
        console.log(email,password,img,name)
        const profile={name,img}
        const user={email,img,name}
        singup(email,password,profile)
        .then(res=>{
            console.log(res)
            axios.post(`https://news-server-steel.vercel.app/user`,user)
            .then(res=>{
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })

            
        })
        .catch(error=>{
            console.log(error)
        })
        
    }

    const handlgoogle=(e)=>{
        e.preventDefault()
        googlelogin()
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content ">
                   
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form onSubmit={handlsingup} className="card-body">
                        <h1 className="text-5xl font-bold">Sing up </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile img</span>
                                </label>
                                <input type="text" name="img" placeholder="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input type="submit" className="btn btn-primary" value="sing up" />

                                <button onClick={handlgoogle} className="w-full mb-4 text-white btn btn-success"><BsGoogle></BsGoogle> Google</button>
                               
                            </div>
                        </form>
                        <h1 className="my-2 ">Have acount? <Link className="" to={'/login'}>Long in</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;