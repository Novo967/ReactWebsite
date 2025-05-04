import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import LogingIn from './components/pages/LogingIn';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/profile' exact Component={Profile}/>
        <Route path='/sign-up' exact Component={SignUp}/>
        <Route path='/login' exact Component={LogingIn}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
