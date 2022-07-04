import { Link } from 'react-router-dom';
import logo from "../img/logoHakunix.png";
import CartWidget from "./CartWidget.jsx";
import { useRef } from "react";

function NavBar() {

    const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark styleNav">
            <div className="container-fluid">
                <Link to="/"><img src={logo} onClick={collapseNav} className="Logo navbar-brand" width="135px" /></Link>
                <button
                    ref={navButton}
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
                <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={collapseNav} to="/" className="nav-link active">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">

                            <Link to="*" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                                
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link onClick={collapseNav} to="/category/accesorios" className="dropdown-item">Accesorios</Link>
                                </li>
                                <li>
                                    <Link onClick={collapseNav} to="/category/pijamas" className="dropdown-item">Pijamas</Link>
                                </li>
                                <li>
                                    <Link onClick={collapseNav} to="/category/papeleria" className="dropdown-item">Papelería</Link>
                                </li>
                                <li>
                                    <Link onClick={collapseNav} to="/category/regalos" className="dropdown-item">Regalos</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link onClick={collapseNav} to="/" className="dropdown-item">Todos los productos</Link>
                                </li>
                            </ul>
                        </li>
                        <Link onClick={collapseNav} to="/nosotros/" className="nav-link">Nosotros</Link>

                        <Link onClick={collapseNav} to="/contactanos/" className="nav-link">Contactanos</Link>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;
