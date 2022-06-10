import logo from "../img/logoHakunix.png";
import React from "react";
import CartWidget from "./CartWidget.jsx"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark styleNav">
            <div className="container-fluid">
                <Link to="/"><img src={logo} className="Logo navbar-brand" width="135px" /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Inicio</Link>
                        </li>
                        <li class="nav-item dropdown">

                            <Link to="*" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                                
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/category/accesorios" className="dropdown-item">Accesorios</Link>
                                </li>
                                <li>
                                    <Link to="/category/pijamas" className="dropdown-item">Pijamas</Link>
                                </li>
                                <li>
                                    <Link to="/category/papeleria" className="dropdown-item">Papelería</Link>
                                </li>
                                <li>
                                    <Link to="/category/regalos" className="dropdown-item">Regalos</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link to="/" className="dropdown-item">Todos los productos</Link>
                                </li>
                            </ul>
                        </li>
                        <Link to="/nosotros/" className="nav-link">Nosotros</Link>

                        <Link to="/contactanos/" className="nav-link">Contactanos</Link>
                    </ul>
                </div>
                <CartWidget items={2}/>
            </div>
        </nav>
    );
}

export default NavBar;
