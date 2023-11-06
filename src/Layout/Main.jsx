
import Nevbar from '../Nevbar/Nevbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=' max-w-7xl mx-auto'>
        
            <Nevbar></Nevbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;