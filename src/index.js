import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import booksStoreServices from './services/booksstore-services';
import { BooksProvider } from './components/context';
import store from './store';
import App from './components/app';

const booksstoreServices = new booksStoreServices();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BooksProvider value={booksstoreServices}>
        <Router>
          <App />
        </Router>
      </BooksProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);