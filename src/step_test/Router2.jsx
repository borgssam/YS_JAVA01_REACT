// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (<h2>홈</h2>);
const About = () => (<h2>도움말</h2>);

export function Router2() {
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | 
        <Link to="/about">도움말</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
