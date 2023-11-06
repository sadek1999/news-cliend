import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { BsGoogle } from "react-icons/bs";



const Login = () => {
    const { login, user,googlelogin } = useContext(AuthContext)
    console.log(user?.email)
    const handllongin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(res => {
                console.log(res)

                
            })
            .catch(error => {
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
                        <form onSubmit={handllongin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
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
                        <h1>Have acount? <Link className=" " to={'/singup'}>sing up</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;