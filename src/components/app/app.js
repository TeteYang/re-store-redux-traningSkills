import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CardPage
} from '../pages';

const App = () => {
    return (
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        >
        </Route>
        <Route
          path="/card"
          component={CardPage}
        >
        </Route>
      </Switch>
    )
  };

export default App;