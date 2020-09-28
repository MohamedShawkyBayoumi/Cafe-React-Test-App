import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import AddMenuItem from './pages/AddMenuItem';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/AddMenuItem' component={AddMenuItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
