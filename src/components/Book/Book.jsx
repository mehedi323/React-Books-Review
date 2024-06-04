import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Book = ({ book }) => {
    const { image, id, tags, bookName, publisher, rating, category } = book
    return (
        <div>
            <Link to={`/bookdetails/${id}`}>
                <div className="card w-96 bg-base-100 border-2 p-4 border-gray-300  hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-violet-300 ">
                    <figure><img className="w-[250px] h-[250px] " src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex items-center gap-5 font-bold">
                            <h2 className="btn text-[#23BE0A]">{tags[0]}</h2>
                            <h2 className="btn text-[#23BE0A]">{tags[1]}</h2>
                        </div>
                        <h1 className="text-xl font-bold ">{bookName}</h1>
                        <h2 className="border-b-2 border-gray-200 py-4">{publisher}</h2>
                        <div className="card-actions flex justify-between mt-2">
                            <div className=" ">{category}</div>
                            <div className="flex items-center gap-2">{rating}<span><FaRegStar /></span></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
 

export default Book;