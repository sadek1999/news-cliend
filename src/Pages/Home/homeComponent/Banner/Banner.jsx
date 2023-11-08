

const Banner = () => {
        
    
    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            <div className="col-span-3 bg-red-400 h-96"></div>
            <div className="col-span-2 space-y-2 h-80">
                <div className="bg-blue-400 h-1/2"></div>
                <div className="bg-red-300 h-1/2"></div>
            </div>
            
        </div>
    );
};

export default Banner;