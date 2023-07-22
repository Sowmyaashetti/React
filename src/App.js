import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contacts} from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("PedroTech");

  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/profile" element={<Profile />}/>
          <Route path = "/contact" element={<Contacts />}/>
          <Route path = "*" element={<h1>Error 404 path not found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;



































// import './App.css';




// function App() {
  
//   return <div className="App"> </div>;
// }



// export default App;
