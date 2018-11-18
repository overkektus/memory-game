import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/HomePage';
import GameBoard from 'components/GameboardPage';
import Result from 'components/ResultPage';
import NotFound from 'components/NotfoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/GameBoard"
            component={GameBoard}
          />
          <Route
            exact
            path="/Result"
            component={Result}
          />
          <Route
            path="*"
            component={NotFound}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
