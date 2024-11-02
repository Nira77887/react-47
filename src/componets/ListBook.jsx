import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../Add';
import Book from './Book';

const ListBook = () => {
                const [readList, setReadList] = useState([]);
                const allBooks = useLoaderData();
                useEffect( () => {
const storeReadList= getStoreReadList();
const storeReadListInt = storeReadList.map(id => parseInt(id));

console.log(storeReadList,allBooks,storeReadListInt);
const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId));
setReadList(readBookList);
                },[])

                
                return (
                                <div>
     <h3 className='text-4xl my-8'>Listed Books</h3>    
     <Tabs>
    <TabList>
      <Tab>Read List </Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl font-extrabold'>Books I Read:{readList.length}</h2>
      {
                readList.map(book => <Book key={book.bookId}  book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl font-extrabold'>My Wish List</h2>
    </TabPanel>
  </Tabs>                                       
                                </div>
                );
};

export default ListBook;