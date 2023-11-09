import React from 'react';

const Newstitle = () => {
    return (
        <div className='bg-red-600 h-40 grid grid-cols-3'>

            <div className='col-span-2 h-full flex justify-center items-center'>
             <h1 className='text-center font-bold text-white text-3xl '> SUBSCRIBE TO OUR NEWSLETTERS!</h1>
            </div>
            <div className='col-span-1 flex items-center'>
                <form action="">
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
           <input type="submit" className="btn btn-outline btn-success mt-2" value="subscribe" />
        
                </form>
            
            </div>
        </div>
    );
};

export default Newstitle;