import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import counterReducer from './CounterReducer.js';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import './index.css';

const store = createStore(counterReducer);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Header /> 
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
