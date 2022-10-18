import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/topbar/hello/Hello.jsx';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
    <Route exact path="/" element={<App/>}/>
      <Route exact path="/hello" element={<Hello/>}/>
      </Routes>
    </BrowserRouter>


      
  </React.StrictMode>,
  document.getElementById('root')
);



