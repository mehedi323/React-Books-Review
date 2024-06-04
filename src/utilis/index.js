import toast from "react-hot-toast";


export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}

// Save LocalStorge

export const saveBlog = book => {
    let books = getBooks()
    const isExist = books.find(b => b.id === book.id)
    if (isExist) {
        return toast.error('Already ListedBooks!!')
    }

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book ListedBooks Successfully')
}

// data delete localstorage

export const deleteBooks = id => {
    let books = getBooks()
    const remaning = books.filter(b => b.id !== id)
    localStorage.setItem('books', JSON.stringify(remaning))
    toast.success('Book Removed from ListedBooks ')
}