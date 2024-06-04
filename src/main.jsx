import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPages from './components/ErrorPages/ErrorPages';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails'; 
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/bookdetails/:id',
        loader: ()=> fetch('Book.json'),
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <Toaster></Toaster>
  </React.StrictMode>,
)
