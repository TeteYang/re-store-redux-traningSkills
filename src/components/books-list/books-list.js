import React, {Component} from 'react';
import BookListItems from '../book-list-items';
import { connect } from 'react-redux';
import { withBooksServices } from '../hoc';
// import { booksLoaded, booksRequested, booksError } from '../../actions';
// import { bindActionCreators } from 'redux';
import { fetchBooks } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BooksList extends Component {
  componentDidMount() {
    // const { booksstoreServices,
    //   booksLoaded,
    //   booksRequested,
    //   booksError
    //  } = this.props;
    //  booksRequested();
    //  booksstoreServices.getBooks()
    //  .then((data)=> {
    //    booksLoaded(data);
    //  })
    //  .catch((err) => {
    //    booksError(err);
    //  })
    this.props.fetchBooks();
  };


  render() {
    const { books, loading, error } = this.props;
    if(loading) {
      return <Spinner />
    }
    if(error) {
      return <ErrorIndicator />
    }
    return (
      <ul>
        {
          books.map((book)=> {
            return (
              <li key={book.id}>
                <BookListItems book={book}></BookListItems>
              </li>
            )
          })
        }
      </ul>
    )
  }
};

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // return bindActionCreators({
  //     booksLoaded,
  //     booksRequested,
  //     booksError
  //   }, dispatch);

  // return {
  //   booksLoaded: (newBooks) => {
  //     dispatch(booksLoaded(newBooks));
  //   }
  // }
  const { booksstoreServices } = ownProps;
  // return {
  //   fetchBooks: () => {
  //     dispatch(booksRequested());
  //     booksstoreServices.getBooks()
  //     .then((data)=> {
  //       dispatch(booksLoaded(data));
  //     })
  //     .catch((err) => {
  //       dispatch(booksError(err));
  //     })
  //   }
  // }
  return {
    fetchBooks: fetchBooks(booksstoreServices, dispatch)
  }
}

export default withBooksServices()(
  connect(mapStateToProps, mapDispatchToProps)(BooksList)
  );