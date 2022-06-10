import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configStore'
import GlobalStyle from './GlobalStyle';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>
);


