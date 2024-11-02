import React from 'react';
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
                const {bookId,image,bookName,author,tags,category} =book;
                return (
                                
                           <Link to={`/books/${bookId}`}>
                                <div className="card  w-96 shadow-xl p-6 bg-yellow-200">
                                <figure className='bg-red-100 py-8 rounded-2xl'>
                                  <img
                                    src={image}
                                    className='h-[166px]'
                                    alt={bookName} />
                                </figure>
                                <div className="card-body">
                        <div className='flex justify-center gap-5'>
                        {
                tags.map((tag,index) => <button
                key={index}
                className="btn btn-xs  bg-green-100 text-bold text-green-800">{tag}</button>)
                                }
                        </div>

                                  <h2 className="card-title">
                                 {bookName}
                                    <div className="badge badge-secondary">NEW</div>
                                  </h2>
                                  <p>By:{author}</p>
                                  <div className="border-t-2 border-dashed"></div>
                                  <div className="card-actions justify-between">
                                    <div className="badge badge-outline">{category}</div>
                                    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-black-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
</div>
                                  </div>
                                </div>
                              </div>
                           </Link>
                );
};

export default Book;