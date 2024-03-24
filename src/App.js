import logo from './logo.svg';
import './App.css'
import './style.css'
import NewPage from './components/NewPage.jsx';
import Button from './components/Button.jsx';
import { useState } from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx';
import UseRef from './components/UseRef.jsx';
import ApiConnection from './components/ApiConnection.jsx';



function App() {

   console.log('app.js')
   
   return (
   
      <div className="App">
      <Routes>
        
         <Route path='*' element={<ApiConnection/>}/>
         <Route path='/useRef' element={<UseRef/>}/>
         
      </Routes>
   
      </div>
 
  );
}
export default App;
 