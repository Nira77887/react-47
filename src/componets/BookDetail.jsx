import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredRead } from '../Add';

const BookDetail = () => {
                const { bookId } =useParams();
                const id = parseInt(bookId);
                const data= useLoaderData();
   const book = data.find(book => book.bookId === id);
//    const {bookId: currentBookId,image} = book;
const {bookId: currentBookId, image} = book;
const handleMarkAsRead =(id) => {
addToStoredRead(id);
}
        

                return (
                                <div>
  <h1>Book Details: {bookId}</h1>       
  <img className='w-36' src={image} alt="" />      
  <br />     
  <button onClick={ () => handleMarkAsRead(bookId)} className="btn btn-outline mr-6 btn-accent">Mark As Read</button>    
  <button className="btn btn-accent">Add to WishList</button>                          
                                </div>
                );
};

export default BookDetail;