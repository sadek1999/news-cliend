import { Link } from "react-router-dom";


const Type = () => {
    const t1='Israel-Gaza war'
    const t2='Economy'
    const t3='Business'
    const t4='Health'
    const t5='Sports'
    const t6='Politics'
    return (
        <div>
            
            <div className="bg-base-200">
            <h1 className="uppercase font-bold  text-red-500 pl-1  text-3xl"> CATEGORIES</h1>

           
            <ul className="menu  w-full ">
                <li className="text-2xl font-bold "><Link to={`/news/${t1}`}>Israel-Gaza war</Link></li>
                <li className="text-2xl font-bold "><Link to={`/news/${t2}`}>Economy</Link></li>
                
                <li className="text-2xl font-bold "><Link to={`/news/${t3}`} >Business</Link></li>
                <li className="text-2xl font-bold "><Link to={`/news/${t4}`}>Health</Link></li>
                <li className="text-2xl font-bold "><Link to={`/news/${t6}`}>Politics</Link></li>
                <li className="text-2xl font-bold "><Link  to={`/news/${t5}`}>Sports</Link></li>
               
                
            </ul>
        </div>
            

        </div>
    );
};

export default Type;