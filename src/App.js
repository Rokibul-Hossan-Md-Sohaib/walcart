import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
function App() {
  return (
 
          <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
  
    </Routes>
 </Router>
  );
}

export default App;
