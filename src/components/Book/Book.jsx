import React from 'react';
import './Book.css';

const Book = ({info, num}) => {

  const {title, sub, text} = info

  return (
    <div className='book-card'>
      <p className='card-number'>{num + 1}</p>
      <h3 className='book-author'>{sub}</h3>
      <h2 className='book-title'>{title}</h2>
      <p className='book-desc'>{text}</p>

    </div>
  )
}

export default Book;