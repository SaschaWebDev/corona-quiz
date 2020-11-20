import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Quiz from './views/Quiz';
import Result from './views/Result';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route exact path='/' render={props => <Quiz {...props} />} />
          <Route exact path='/result' render={props => <Result {...props} />} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
