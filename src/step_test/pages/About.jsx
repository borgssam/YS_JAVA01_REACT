import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="details">About Details</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
