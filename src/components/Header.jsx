import React from "react"
import "../Style/Components/Header.css"

const Header = () => {
    function toggleNav() {
        console.log("click")
        const navItem = document.querySelector(".Header__nav__ul")
        navItem.classList.toggle("visible")
    }
    return (
        <div className="Header">
            <h1 className="Header__h1">
                <span className="Rouge">Meuble</span>a
                <span className="Rouge">Granule</span>.fr
            </h1>
            <nav className="Header__nav">
                <i
                    className="fa-solid fa-bars Header__nav__hamburger"
                    onClick={toggleNav}
                ></i>
                <ul className="Header__nav__ul">
                    <li className="Header__nav__ul__li">
                        <i className="fa-solid fa-table-columns"></i> Tableau de
                        bord
                    </li>
                    <li className="Header__nav__ul__li">
                        <i className="fa-solid fa-user"></i> Profil
                    </li>
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
