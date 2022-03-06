import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from "./Pages/Home";
import { Routing } from './Routing/Routing';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar/>       */}
      {/* <Home/> */}
    <Routing/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
