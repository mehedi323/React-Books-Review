import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { useNavigation } from "react-router-dom";
import Loading from "../Loading/Loading";

 

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigation = useNavigation()

    useEffect(()=>{
        fetch('Book.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])

    if( navigation.state === 'loading')return <Loading></Loading>
    return (
        <div>
            <h2 className="text-4xl font-bold text-center m-10">Books</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    books.map(book=> <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;