import React from "react"
import "../Style/Components/Saison.css"
import { useState } from "react"
import Input from "../components/Input"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectData } from "../Utils/selector"
import { addData } from "../Features/data"

const Saison = () => {
    const profilData = useSelector(selectData)
    const [annee, setAnnee] = useState()
    const [newProfile, setNewProfile] = useState(profilData[0])
    const dispatch = useDispatch()

    useEffect(() => {
        const date = new Date()
        setAnnee(date.getFullYear())
    }, [])

    function valid(e) {
        e.preventDefault()
        dispatch(addData(newProfile))
    }

    function handleChangeDebut(e) {
        e.preventDefault()
        console.log(e.target.value)
        setNewProfile({
            ...newProfile,
            saisonActuelle: {
                dateDebut: e.target.value,
            },
        })
    }
    return (
        <div className="Saison">
            {profilData[0].saisonActuelle.dateDebut ? (
                <p>Terminer la saison {annee}</p>
            ) : (
                <div className="Saison__debut">
                    <p>Débuter la saison {annee}</p>
                    <form action="#">
                        <Input
                            id={"dernierRamonage"}
                            type={"date"}
                            onchange={handleChangeDebut}
                        />
                        <p onClick={valid}>Valider</p>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Saison
