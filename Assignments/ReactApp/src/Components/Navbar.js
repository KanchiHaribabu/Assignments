import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

     <div>
      <nav Class="navbar navbar-expand-lg bg-body-tertiary">
        <div Class="container-fluid">
          <NavLink Class="navbar-brand" to="/">Amazon</NavLink>
          <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span Class="navbar-toggler-icon">Menu</span>
          </button>

          <div Class="collapse navbar-collapse" id="navbarSupportedContent">
            <div Class='navbarp-nav'>
              <li>
                <NavLink Class="nav-link" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink Class="nav-link" to="/Employee">EmployeeList</NavLink>
              </li>
              <li><NavLink Class="nav-link" to="/About">About</NavLink>
              </li>
              <li><NavLink Class="nav-link" to="/Calculator">Calculator</NavLink>
              </li>

            </div>
          </div>
        </div>
      </nav>
    </div> 
  )
}

export default Navbar