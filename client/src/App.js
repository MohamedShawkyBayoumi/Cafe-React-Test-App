import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import AddMenuItem from './pages/AddMenuItem';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/AddMenuItem' component={AddMenuItem} />
        <Route exact path='/AddMenuItem/:itemId' component={AddMenuItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
