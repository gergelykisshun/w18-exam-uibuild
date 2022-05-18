import React from 'react';
import './Book.css';

const Book = ({info}) => {

  const {title, sub, text} = info

  return (
    <div className='book-card'>
      <h3>{sub}</h3>
      <h2>{title}</h2>
      <p>{text}</p>

    </div>
  )
}

export default Book;