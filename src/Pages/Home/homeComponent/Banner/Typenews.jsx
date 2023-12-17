import { useLoaderData } from "react-router-dom";
import Card from "../../../AllBlig/card";


const Typenews = () => {
    const blogs=useLoaderData()
    console.log(blogs)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
            blogs.map(blog=><Card key={blog._id} blog={blog}></Card>)
            }
        </div>
    );
};

export default Typenews;