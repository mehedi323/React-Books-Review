import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";


const ListedBook = ({ book }) => {
    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="card card-side  hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-violet-300 bg-base-100 border-2 p-2 border-gray-100 m-10">
                <figure><img className="w-[200px] bg-gray-200 p-4 rounded-xl" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p><span className="font-bold">By: </span>{author}</p>
                    <div className="flex gap-4 items-center">
                        <h2><span className="font-bold">Tags:</span></h2>
                        <button className="btn text-green-400 text-xl font-bold">#{tags[0]}</button>
                        <button className="btn text-green-400 text-xl font-bold">#{tags[1]}</button>
                    </div>
                    <div className="flex items-center gap-10">
                        <h2 className="flex items-center gap-2"><span><FaUserFriends></FaUserFriends></span><span>Publisher:</span>{publisher}</h2>

                        <h2 className="flex items-center gap-2"><span><MdOutlineContactPage></MdOutlineContactPage></span><span>YearOfPublishing:</span>{yearOfPublishing}</h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#328EFF] text-white">Category:{category}</button>
                        <button className="btn bg-[#FFAC33] text-white">Rating:{rating}</button>
                        <button className="btn bg-[#23BE0A] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;