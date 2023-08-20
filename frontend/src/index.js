import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import RoutesList from './components/routes/RoutesList';
import { Provider } from 'react-redux';
import { store } from './redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RoutesList/>
  </Provider>
);
