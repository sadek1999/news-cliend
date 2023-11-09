
import { Link } from 'react-router-dom';


const Anews = ({ news }) => {


    const { sd, ld, name, title, img, date, type, autorEmail, autorimg, _id } = news;
    return (
        <div>
            {/* <div className="flex w-96 show-xl card card-compact bg-base-100">
                <div>
                    <figure><img src={img} alt="Shoes" /></figure>
                </div>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{sd}</p>
                    <div className="justify-end card-actions">

                        <Link className='btn btn-primary' to={`/details/${_id}`}>Show details</Link>
                    </div>
                </div>
            </div> */}

            {/* hero */}

            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img}className="w-96 h-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="py-6">{sd}</p>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Anews;