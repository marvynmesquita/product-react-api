import {BrowserRouter as Router, Routes, Route, link, Link} from 'react-router-dom'
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Newproduct from './components/pages/Newproduct';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
              <Route exact path="/" element={<Home />} > </Route>
              <Route exact path="/newproduct" element={<Newproduct />} > </Route>

          </Routes>
     
    </Router>

    
  )
}

export default App;
