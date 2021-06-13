import React, {Fragment} from 'react';

const BooksListItems = ({ book }) => {
  const {title, autor} = book;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{autor}</span>
    </Fragment>
  )
}

export default BooksListItems;