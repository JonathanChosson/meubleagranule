import React from "react"
import "../Style/Components/Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    function toggleNav() {
        const navMenu = document.querySelector(".Header__nav")
        const navItem = document.querySelector(".Header__nav__ul")
        navItem.classList.toggle("visible")
        navMenu.classList.toggle("background")
    }
    return (
        <div className="Header">
            <Link className="link" to={"/"}>
                <h1 className="Header__h1">
                    e-
                    <span className="Rouge Header__h1__span">granule</span>.fr
                </h1>
            </Link>
            <nav className="Header__nav">
                <i
                    className="fa-solid fa-bars Header__nav__hamburger"
                    onClick={toggleNav}
                ></i>
                <ul className="Header__nav__ul">
                    <Link className="link" to={"/dashboard"}>
                        <li className="Header__nav__ul__li">
                            <i className="fa-solid fa-table-columns"></i>{" "}
                            Tableau de bord
                        </li>
                    </Link>
                    <Link className="link" to={"/profil"}>
                        <li className="Header__nav__ul__li">
                            <i className="fa-solid fa-user"></i> Profil
                        </li>
                    </Link>
                    <li className="Header__nav__ul__li">
                        <i className="fa-solid fa-right-from-bracket"></i>{" "}
                        Déconnexion
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
