import React from "react"
import Banniere from "../components/Banniere"
import Header from "../components/Header"
import "../Style/Pages/Profil.css"

const Profil = () => {
    return (
        <div className="Profil">
            <Header />
            <Banniere />
            <article className="Profil__article">
                <h1>
                    <i className="fa-solid fa-user"></i> Mon profil
                </h1>
            </article>
        </div>
    )
}

export default Profil
