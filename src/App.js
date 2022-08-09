import logo from './logo.svg';
import './App.css';
import Topnavbar from './componets/Topnavbar';
import Home from './pages/Home';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
    <div className="App">
      <Topnavbar/>
     
    </div>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
