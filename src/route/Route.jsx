import Error from "../pages/Error";
import App from "../App";
import {createBrowserRouter} from 'react-router-dom';
import Home from "../pages/home/Home";
import Book from "../pages/book/Book";
import BookDetail from "../pages/bookdetails/BookDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/books',
                element: <Book />
            },
            {
                path: '/books/:id',
                element: <BookDetail />
            }
        ],
    },
    {
        path: "*",
        element: <Error />
    }
])

export default router;