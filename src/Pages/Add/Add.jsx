

const Add = () => {

    const handladd=e=>{
        
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const short=form.short.value;
        const long=form.long.value;
        const img=form.img.value;
        const newsimg=form.newsimg.value;
        console.log(title,short,long,img,newsimg)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  ">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form className="card-body">
                            {/* row-1 */}
                            <div className="flex flex-col md:flex-row gap-3 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">News Tittle</span>
                                    </label>
                                    <input type="text" name="title" placeholder="title" className="input input-bordered lg:w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <input type="text" name="short" placeholder="description" className="input input-bordered lg:w-96" required />

                                </div>
                            </div>
                            {/* row-2 */}
                            <div className="flex flex-col md:flex-row gap-3 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">News Img</span>
                                    </label>
                                    <input type="text" name="newsimg" placeholder="url" className="input input-bordered lg:w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Long Description</span>
                                    </label>
                                    <input type="text" name="long" placeholder="description" className="input input-bordered lg:w-96" required />

                                </div>
                            </div>
                            {/* row-3 */}
                            <div className="flex flex-col md:flex-row gap-3 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="title" className="input input-bordered lg:w-96" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">img </span>
                                    </label>
                                    <input type="text" name="img" placeholder="url" className="input input-bordered lg:w-96" required />

                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input onSubmit={handladd} className="btn btn-primary" type="submit" value="ADD" />
                               
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Add;