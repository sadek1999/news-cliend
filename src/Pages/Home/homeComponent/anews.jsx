
import { Link } from 'react-router-dom';
import { defineConfig } from 'vite';

const Anews = ({ news }) => {


    const { sd, ld, name, title, img, date, type, autorEmail, autorimg,_id } = news;
    return (
        <div>
            <div className="flex w-96 show-xl card card-compact bg-base-100">
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
            </div>
        </div>
    );
};

export default Anews;