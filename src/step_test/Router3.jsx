// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import AboutDetails from './pages/AboutDetails';


export function Router3() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>|
        <Link to="/user/1">User 1</Link>| 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/about" element={<About />}>
          <Route path="details" element={<AboutDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

