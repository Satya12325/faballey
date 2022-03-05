import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from "./Pages/Home";
import { Routing } from './Routing/Routing';


function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Home/>
    <Routing/>
    
    </div>
  );
}

export default App;
