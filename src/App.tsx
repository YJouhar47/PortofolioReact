import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Portofolio from './pages/portofolio/Portofolio';
import Home from './pages/home/Home';
import DetailPage from './pages/Detail/Detail';
const App = () => {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Home></Home>} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/portofolio'>
              <Route path='' element={<Portofolio/>}/>
              <Route path=':name' element={<DetailPage/>}/>             
            </Route>
          </Routes>
      </Router>

  );
}

export default App;
