import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Details from './pages/Details';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'spectre.css/dist/spectre.css';
import NotFound from './pages/NotFound'


ReactDOM.render(
<Router>
    <Home path="/" />
    <Details path="/details/:propertyId" />
    <NotFound default />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
