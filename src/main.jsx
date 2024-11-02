import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root.jsx';
import Home from './componets/Home.jsx';
import Dashboard from './componets/Dashboard.jsx';
import ErrorPage from './componets/ErrorPage.jsx';
import BookDetail from './componets/BookDetail.jsx';
import ListBook from './componets/ListBook.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
path: 'books/:bookId',
element: <BookDetail></BookDetail>,
loader: () => fetch('/booksData.json')
      },
      {
path:'listBook',
element: <ListBook></ListBook>,
loader: () => fetch('/booksData.json')
      },
      
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <ToastContainer />
  </StrictMode>,
)
