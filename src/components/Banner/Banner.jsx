import Image from '../../assets/image/book-img.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[500px] rounded-xl bg-base-200">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <img src={Image} className="max-w-sm " />
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1> 
                        <button className="btn bg-[#23BE0A] px-6 font-bold text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;