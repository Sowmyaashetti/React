import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contacts} from "./pages/Contact";
import { Navbar } from "./Navbar";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/menu" element={<Menu />}/>
          <Route path = "/contact" element={<Contacts />}/>
          <Route path = "*" element={<h1>Error 404 path not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



































// import './App.css';




// function App() {
  
//   return <div className="App"> </div>;
// }



// export default App;
