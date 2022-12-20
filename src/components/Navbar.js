import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="wrapper">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-sign-out-alt ml-2"> Logout</i>
                        </Link>
                    </li>
                </ul>
            </nav>            
        </div>
    );
}

export default Navbar;