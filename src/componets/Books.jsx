import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

                const [books, setBooks] = useState([]);
                useEffect( () =>{
                fetch('./booksData.json')
                .then(res => res.json())
                .then(data => setBooks(data))
                },[])
                return (
                                <div>
             <h2 className='font-bold text-5xl text-center'>Books</h2>    
         
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
   books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
             </div>
             <p>{books.length}</p>                              
                                </div>
                );
};

export default Books;