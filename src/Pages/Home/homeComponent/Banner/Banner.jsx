import axios from "axios";
import { useEffect, useState } from "react";


const Banner = () => {
    const [news, setnews] = useState(null)
    const [news1, setnews1] = useState(null)
    const [news2, setnews2] = useState(null)
    const [news3, setnews3] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5001/news?type=Israel-Gaza%20war`)
            .then(res => {
                console.log(res.data)
                setnews(res.data);
                setnews1(res.data[0])
                setnews2(res.data[1])
                setnews3(res.data[2])


            })
    }, [])

    // const {img1,title1,type2}=news1
    console.log(news3)
    
    return (
        <div>
            {
                news ? <div className="grid grid-cols-5 gap-2 mb-2 ">
                    {/* img--1 */}
                    <div className="relative col-span-3 ">
                        <img src={news1.img} className="h-full rounded-xl" alt="" />
                        <div className="absolute top-0 flex text-left items-end rounded-xl  w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
                            <div className='pl-16 w-5/6 pb-3 space-y-6 text-white '>
                                <h2 className='text-xl  md:text-4xl font-bold'>{news1.title}</h2>
                                <p>{news1.sd}</p>
                                <div className=''>
                                <button className="btn btn-outline btn-error">Details</button>

                                </div>


                            </div>

                        </div>
                    </div>
                    {/* img--2,3 */}
                    <div className="col-span-2 space-y-1 ">
                        {/* img-2 */}
                        <div className="relative h-1/2">
                            <img className="w-full rounded-xl h-64" src={news2.img} alt="" />
                            <div className="absolute top-0 flex items-center rounded-xl  w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
                                <div className='w-1/2 pl-5 space-y-6 text-white '>
                                    <h2 className='text-xl md:text-2xl font-bold'>{news2.title}</h2>
                                   
                                    <div className=''>
                                        
                                        <button className="btn btn-outline btn-error">Details</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* img--3 */}
                        <div className="relative h-1/2">
                            <img className="w-full rounded-xl h-64" src={news3.img} alt="" />
                            <div className="absolute top-0 flex items-center rounded-xl  w-full  h-full gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  ">
                                <div className='w-1/2 pl-5 space-y-6 text-white '>
                                   
                                <h2 className='text-2xl font-bold'>{news3.title}</h2>
                                    <div className=''>
                                       
                                    <button className="btn btn-outline btn-error">Latest Projects</button>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div> </div>: <div></div>
                            };
               
               </div>    
                    
                  


           );
};



            export default Banner;