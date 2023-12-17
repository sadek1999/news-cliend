import axios from 'axios';
import { useEffect, useState } from 'react';
import Anews from './anews';

const Recent = () => {
    const [news, setNews] = useState(null)
   
    useEffect(() => {
        axios.get(`https://news-server-steel.vercel.app/getnews`)
            .then(res => {
                // console.log(res.data)
                // console.log(res.data[0].name)
                setNews(res.data)
            })
    }, [])
    // const{sd,ld,name,title,img,date,type,autorEmail,autorimg}=news;
    // console.log(news)

    return (
        <div>

            {
                news?<div>
{
                news.map(news=><Anews key={news.id}  news={news}></Anews>)
            }
                </div>:<idv></idv>
            }
          
            
                
            
         </div>
    );
};

export default Recent;