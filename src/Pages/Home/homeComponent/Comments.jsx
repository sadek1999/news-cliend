

const Comments = ({acomment}) => {
    const{name,img,newsid,comment}=acomment;
    // console.log(acomment)
    return (
        <div className="w-full  mt-3  ">
            <div className='flex gap-2'>
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className=' '>{comment}</p>
                </div>
            </div>

        </div>
    );
};

export default Comments;