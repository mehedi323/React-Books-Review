import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt)
    console.log(book);

    const handleReadBooks = () =>{
        toast("Wow so easy!");
    }

    return (
        <div>
            <h2>Book:</h2>
            <div className="grid grid-cols-4">
                <div className="col-span-2 p-16 flex justify-center bg-gray-100">
                    <img className="w-[400px]" src={book.image} alt="" />
                </div>
                <div className="col-span-2 p-6 space-y-4">
                    <h2 className="text-3xl font-bold ">{book.bookName}</h2>
                    <h3>By: {book.author}</h3>
                    <h4 className="border-y-2 border-gray-200 py-4">{book.category}</h4>
                    <h3><span className="font-bold">Review:</span>{book.review}</h3>
                    <div className="flex items-center gap-3 border-b-2 py-4 border-gray-200">
                        <h2 className="font-bold ">Tags:</h2>
                        <button className="btn text-green-600">{book.tags[0]}</button>
                        <button className="btn text-green-600">{book.tags[1]}</button>
                    </div>
                    <div className="flex  gap-10">
                        <div className="">
                            <ul>
                            <li>Number of Pages:</li>
                            <li>Publisher</li>
                            <li>Year of Publishing</li>
                            <li>Rating:</li>
                            </ul>
                        </div>
                        <div className="font-bold">
                            <ul>
                                <li>{book.totalPages}</li>
                                <li>{book.publisher}</li>
                                <li>{book.yearOfPublishing}</li>
                                <li>{book.rating}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleReadBooks} className="btn mr-5 border border-gray-300 bg-white font-bold ">Read</button>
                        <button className="btn font-bold bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;