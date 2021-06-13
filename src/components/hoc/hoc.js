import React from 'react';
import { BooksConsumer } from '../context/context';

const withBooksServices = () => (Wrapped) => {
  return (props) => {
    return (
      <BooksConsumer>
        {
          (booksstoreServices) => {
          return <Wrapped
          {...props} booksstoreServices={booksstoreServices}/>
          }
        }
      </BooksConsumer>
    )
  }
}

export default withBooksServices;