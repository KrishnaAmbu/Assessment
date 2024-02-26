import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import Dashboard from './components/Dashboard';
import Addblog from './components/Addblog';
import {  Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
   
    {/* <Dashboard/>
    <Addblog/> */}
    
    <Routes>
        <Route path="/add" element={<Addblog />}/>
        <Route path='/' element={<Dashboard/>}/>
    </Routes> 
 
    </div>
  );
}

export default App;