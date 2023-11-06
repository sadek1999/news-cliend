import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";


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
            axios.post(`http://localhost:5001/user`,user)
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                   
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />

                                <button onClick={handlgoogle} className="mb-4 btn btn-success text-white w-full"><BsGoogle></BsGoogle> Google</button>
                               
                            </div>
                        </form>
                        <h1 className="my-2 ">Have acount? <Link className=" " to={'/login'}>Long in</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;