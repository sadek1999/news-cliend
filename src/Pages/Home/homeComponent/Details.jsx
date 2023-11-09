import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import axios from "axios";
import Comments from "./Comments";


const Details = () => {
    const news = useLoaderData()
    const { user } = useContext(AuthContext)
    const [cuser, setcuser] = useState(null)
    const [comments, setcomments] = useState(null)

    console.log(user?.email)
    const {  ld,  title, img,  type, email,  _id } = news;
    console.log(email)




    const handlComment = (e) => {

        e.preventDefault();
        const form = e.target;
        const newsid = _id;
        const comment = form.comment.value;
        const name = cuser?.name;
        const img = cuser?.img;
        const cinfo = { comment, name, img, newsid }
        axios.post(`http://localhost:5001/comment`, cinfo)
            .then(res => {
                console.log(res.data)
            })
        // console.log(cinfo)

    }
    useEffect(() => {
        axios.get(`http://localhost:5001/getusers/${user?.email}`)
            .then(res => {
                // console.log(res.data)
                // console.log(res.data.name,res.data.img)
                setcuser(res.data)

            })
    }, [user])

    useEffect(() => {
        axios.get(`http://localhost:5001/comment?newsid=${_id}`)
            .then(res => {
                console.log(res.data)
                setcomments(res.data)
            })
    }, [_id])
    console.log(cuser)
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

                    {/* comment sections */}

                    <div>
                        {user?.email === email ? <div >
                            <Link to={`update/${_id}`} className="btn btn-outline btn-success "> Update</Link>
                        </div> : <div >
                            <form onSubmit={handlComment} className="flex flex-col gap-2 " action="">
                                <input type="text" placeholder=" your comment" className="input input-bordered input-lg w-full max-w-xs" name="comment" required />
                                <input type="submit" className="btn-primary btn w-20" value="submit" />
                            </form>
                        </div>


                        }
                    </div>




                    <div className=" ">
                        <h1 className="text-2xl font-bold border-spacing-2 border-gray-300">Comments</h1>

                        <div >


                            {
                                comments ? <div >
                                    {
                                        comments.map(acomment => <Comments key={acomment._id} acomment={acomment}></Comments>)
                                    }
                                </div> : <div></div>
                            }
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
