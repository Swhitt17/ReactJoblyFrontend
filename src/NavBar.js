import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./NavBar.css"

const NavBar = ({logout}) => {

    const {currentUser} = useContext(UserContext)
    return (
        <nav className="Navigation navbar navbar-expand-md">
          <Link className="navbar-brand" to="/">Jobly</Link>
         

         {!currentUser ?
         <div className="container-fluid">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                  <Link to="/register">Register</Link> 
                </li>
                <li className="nav-item me-4">
                  <Link to="/login">Login</Link> 
                </li>
          </ul>
        </div>
        :
        <div className="container-fluid">
            <ul className="navbar-nav ms-auto " >
                
                <li className="nav-item me-4">
                  <Link to="/companies">Companies</Link> 
                </li>

                <li className="nav-item me-4">
                  <Link to="/jobs">Jobs</Link>
                </li>

                <li className="nav-item me-4">
                   <Link to="/profile">Profile</Link>  
                </li>
                <li className="nav-item">
                  <Link to='/' onClick={logout}> Log out {currentUser.username}</Link>
                </li>
          </ul>
        </div>
        }
        </nav>
    )

}

export default NavBar;