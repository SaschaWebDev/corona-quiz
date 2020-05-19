import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './views/Welcome';
import Quiz from './views/Quiz';
import Result from './views/Result';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route exact path='/' render={props => <Welcome {...props} />} />
          <Route exact path='/quiz' render={props => <Quiz {...props} />} />
          <Route exact path='/result' render={props => <Result {...props} />} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
