

import Banner from "../homeComponent/Banner/Banner";
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
                <div className="col-span-2 bg-blue-500 h-96"></div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;