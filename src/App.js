import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Homepage from './homepage';
import Falhofner from './Falhofner';
import Test from './Test';
import Map from './Map';

function App() {
  return (
    <div>
      
    <div className="App">
    </div>

    <Router>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Falhofner" element={<Falhofner/>}/>
        <Route path="/Test2" element={<Test/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/Map" element={<Map/>}/>

        </Routes>
      </Router>


        
        
        
        



    </div>

  );
}

export default App;
