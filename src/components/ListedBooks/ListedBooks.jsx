import { useEffect, useState } from "react";
import { getBooks } from "../../utilis";
import ListedBook from "../ListedBook/ListedBook";

 
const ListedBooks = () => {
    const [books, setBooks]= useState([])
    useEffect(()=>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
    },[])
    return (
        <div>
            <h3 className="text-3xl text-center font-bold bg-gray-100 p-8 rounded-3xl">Books</h3>
            {
                books.map(book => <ListedBook key={book.id} book={book}></ListedBook>)
            }
        </div>
    );
};

export default ListedBooks;