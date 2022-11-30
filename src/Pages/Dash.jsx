import React from "react"
import "../Style/Pages/Dash.css"
import Banniere from "../components/Banniere"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { selectData } from "../Utils/selector"
import { Link } from "react-router-dom"
import Saison from "../components/Saison"

const Dash = () => {
    const profilData = useSelector(selectData)

    return (
        <div className="Dash">
            <Header />
            <Banniere />
            {profilData.length > 0 ? (
                <div className="Dash__profil">
                    <Saison />
                </div>
            ) : (
                <div className="Dash__noProfil">
                    <p>Veuillez remplir votre profil</p>
                    <Link className="Dash__link" to={"/profil"}>
                        <i className="fa-solid fa-user"></i> Profil
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Dash
