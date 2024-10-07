import React from 'react';
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
 const Navbar = () => {
     return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
            <div class="container-fluid">
              <a class="navbar-brand" href="#">REACT CRUD APP</a>
                <button class="navbar-toggler" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#navbarSupportedContent" 
                          aria-controls="navbarSupportedContent" 
                          aria-expanded="false" 
                          aria-label="Toggle navigation">

                  <span class="navbar-toggler-icon"></span>
                </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link" aria-current="page" exact to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" exact to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" exact to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>

                <Link className='btn btn-outline-light add-user' exact to="/users/add">Add User</Link>
            </div>
      </nav>
     );
 };

 export default Navbar;