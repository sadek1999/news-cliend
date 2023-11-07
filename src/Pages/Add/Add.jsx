import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Add = () => {
    const { user } = useContext(AuthContext)
    const [type, settype] = useState(null)

    const handltype = e => {
        e.preventDefault()
        console.log(e.target.value)
        settype(e.target.value)
    }

    const handlsingup = e => {
        e.preventDefault();
        const form = e.target;

        const sd = form.sd.value;
        const ld = form.ld.value;
        // const name = form.name.value;
        const title = form.title.value;
        const img = form.img.value;
        const date = form.date.value;


        const autorEmail = user.email;
        const autorimg = user?.img;
        const name = user?.name;

        const news = { sd, ld, name, title, img, date, type, autorEmail, autorimg }
        console.log(news)

        axios.post(`http://localhost:5001/post`, news)
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged){
                    
                    toast.success('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    
                }
                
            })



        // console.log(user)


    }



    return (
        <div>
            <div className="min-h-screen hero bg-base-200 ">
                <div className="flex-col hero-content ">

                    <div className="flex-shrink-0 w-full shadow-2xl card bg-base-100">
                        <form onSubmit={handlsingup} className="card-body">
                            <h1 className="text-5xl font-bold">News Info </h1>
                            {/* row --1 */}
                            <div className="flex flex-col gap-5 lg:flex-row">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">News title</span>
                                    </label>
                                    <input type="text" name="title" placeholder=" title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">News img</span>
                                    </label>
                                    <input type="text" name="img" placeholder="url" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row --2 */}
                            <div className="flex flex-col gap-5 lg:flex-row">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">News type</span>
                                    </label>

                                    <select onChange={handltype} className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option >Business</option>
                                        <option>Politics</option>
                                        <option>
                                            Israel-Gaza war</option>
                                        <option>Economy</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" name="sd" placeholder="Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Long Description</span>
                                </label>
                                <input type="text" name="ld" placeholder="Description" className="input input-bordered" required />
                            </div>


                            <div className="mt-6 form-control">
                                <input type="submit" className="btn btn-primary" value="Add news" />



                            </div>
                        </form>

                    </div>
                </div>
               
            </div>

            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
        </div>
    );
};

export default Add;

