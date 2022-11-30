import React from "react"
import { useSelector } from "react-redux"
import { selectData } from "../Utils/selector"

const Saison = () => {
    const profilData = useSelector(selectData)
    console.log(profilData)
    return (
        <div className="Saison">
            {profilData.saisonActuelle.dateDebut ? (
                <p>go pour la date</p>
            ) : (
                <p>Pas de date</p>
            )}
        </div>
    )
}

export default Saison
