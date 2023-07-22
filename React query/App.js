import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contacts} from "./pages/Contact";
import { Navbar } from "./Navbar";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  
const client = new QueryClient({defaultOptions: {
  queries: {
    refetchOnWindowFocus: true,
  }
}});
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/profile" element={<Profile />}/>
          <Route path = "/contact" element={<Contacts />}/>
          <Route path = "*" element={<h1>Error 404 path not found</h1>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;



































// import './App.css';




// function App() {
  
//   return <div className="App"> </div>;
// }



// export default App;
