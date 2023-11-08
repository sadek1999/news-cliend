

import Banner from "../homeComponent/Banner/Banner";
import Type from "../homeComponent/Banner/type";
import Footer from "../homeComponent/Footer";
import Recent from "../homeComponent/Recent";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <div className="grid grid-cols-6">
                <div className="col-span-4 border">
                <Recent></Recent>
                </div>
                <div className="col-span-2  ">
                    <Type></Type>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;