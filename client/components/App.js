import React from 'react';
import './App.css';
import LoginPage from './login';
import HomePage from './home';
import routes from './routes';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component
{
  
  render()
  {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        {routes}
      </div>
    );
  }
}

export default App;
