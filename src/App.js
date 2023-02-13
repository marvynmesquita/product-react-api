import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Newproduct from './components/pages/Newproduct';
import Updateproduct from './components/pages/Updateproduct';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home />} > </Route>
              <Route exact path="/newproduct" element={<Newproduct />} > </Route>
              <Route exact path="/updateproduct" element={<Updateproduct />} > </Route>
          </Routes>
    </Router>
  )
}

export default App;
