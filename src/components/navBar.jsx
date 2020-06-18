import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <Link className="navbar-brand" to="/">
        Library
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/books">
            Books
          </NavLink>
          <NavLink className="nav-link" to="/purchase">
            Purchase
          </NavLink>

          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <NavLink className="nav-link" to="/novel">
                Novel
              </NavLink>
              <NavLink className="nav-link" to="/autobiography">
                Autobiography
              </NavLink>
              <NavLink className="nav-link" to="/horror">
                Horror
              </NavLink>
              <NavLink className="nav-link" to="/poetry">
                Poetry
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
