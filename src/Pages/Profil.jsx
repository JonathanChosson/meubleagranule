import React, { Fragment, useState } from "react"
import Banniere from "../components/Banniere"
import Header from "../components/Header"
import "../Style/Pages/Profil.css"
import Input from "../components/Input"
import { useDispatch } from "react-redux"
import { Modal } from "react_modular_modal"
import { addData } from "../Features/data"
import { useSelector } from "react-redux"
import { selectData } from "../Utils/selector"

const Profil = () => {
    const profilData = useSelector(selectData)

    const dispatch = useDispatch()

    const [modalOpenCreate, setModalOpenCreate] = useState(false)
    const [modalOpenError, setModalOpenError] = useState(false)

    const openModalCreate = () => setModalOpenCreate(true)
    const closeModalCreate = () => setModalOpenCreate(false)
    const openModalError = () => setModalOpenError(true)
    const closeModalError = () => setModalOpenError(false)

    let profil
    if (localStorage.length > 0) {
        profil = { ...JSON.parse(localStorage.profil) }
    } else if (profilData.length > 0) {
        profil = { ...profilData[0] }
    } else {
        profil = {
            mail: "",
            codePostal: "",
            poele: {},
            stock: {},
            saisonActuelle: {
                dateDebut: "",
            },
        }
    }

    const [newProfile, setNewProfile] = useState(profil)

    function setData(key, value) {
        switch (key) {
            case "poele":
                setNewProfile({
                    ...newProfile,
                    poele: {
                        ...newProfile.poele,
                        ...value,
                    },
                })
                break

            case "stock":
                setNewProfile({
                    ...newProfile,
                    stock: {
                        ...newProfile.stock,
                        ...value,
                    },
                })
                break

            default:
                setNewProfile({
                    ...newProfile,
                    [key]: value,
                })
                break
        }
    }

    /**
     * handle change sur input formulaire
     * @param {object} e
     */
    function handleChange(e) {
        e.preventDefault()
        switch (e.target.id) {
            case "mail":
                setData("mail", e.target.value)
                break
            case "cp":
                setData("codePostal", e.target.value)
                break
            case "marque":
                let valueMarque = { marque: e.target.value }
                setData("poele", valueMarque)
                break
            case "modele":
                let valueModele = { modele: e.target.value }
                setData("poele", valueModele)
                break
            case "puissance":
                let valuePuissance = { puissance: e.target.value }
                setData("poele", valuePuissance)
                break
            case "dernierRamonage":
                let valueDernierRamonage = { dernierRamonage: e.target.value }
                setData("poele", valueDernierRamonage)
                break
            case "stockActuel":
                let valueStockActuel = { stockActuel: e.target.value }
                setData("stock", valueStockActuel)
                break
            default:
                console.error(new Error("Erreur"))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (profil !== newProfile) {
            dispatch(addData(newProfile))
            openModalCreate()
        } else {
            openModalError()
        }
    }

    function calculRamonage() {
        const date = new Date()
        if (
            date.getFullYear() -
                newProfile.poele.dernierRamonage.split("-")[0] ===
            0
        ) {
            return (
                12 +
                (newProfile.poele.dernierRamonage.split("-")[1] -
                    (date.getMonth() + 1))
            )
        } else {
            const mois =
                newProfile.poele.dernierRamonage.split("-")[1] -
                (date.getMonth() + 1)
            let annee = 0
            if (
                date.getFullYear() -
                    newProfile.poele.dernierRamonage.split("-")[0] >
                1
            ) {
                annee =
                    12 *
                    (date.getFullYear() -
                        newProfile.poele.dernierRamonage.split("-")[0])
            }

            return mois + -annee
        }
    }

    return (
        <div className="Profil">
            <Header />
            <Banniere />
            <article className="Profil__article">
                <div className="Profil__article__div">
                    <form className="Profil__article__div__form" action="#">
                        <fieldset className="Profil__article__div__form__fieldset">
                            <legend>
                                <i className="fa-solid fa-user Rouge"></i> Mon
                                profil
                            </legend>
                            <Input
                                id={"mail"}
                                desc={"Adresse Mail"}
                                type={"mail"}
                                placeholder={newProfile.mail}
                                onchange={handleChange}
                            />
                            <Input
                                id={"cp"}
                                desc={"Code Postal"}
                                type={"numbers"}
                                placeholder={newProfile.codePostal}
                                onchange={handleChange}
                            />
                        </fieldset>
                        <fieldset className="Profil__article__div__form__fieldset">
                            <legend>
                                <i className="fa-solid fa-boxes-stacked Rouge"></i>{" "}
                                Mon stock
                            </legend>
                            <Input
                                id={"stockActuel"}
                                desc={"Stock Actuel (kg)"}
                                type={"text"}
                                placeholder={newProfile.stock.stockActuel}
                                onchange={handleChange}
                            />
                        </fieldset>
                        <fieldset className="Profil__article__div__form__fieldset">
                            <legend>
                                <i className="fa-solid fa-fire-burner Rouge"></i>{" "}
                                Mon poêle
                            </legend>
                            <Input
                                id={"marque"}
                                desc={"Marque"}
                                type={"text"}
                                placeholder={newProfile.poele.marque}
                                onchange={handleChange}
                            />
                            <Input
                                id={"modele"}
                                desc={"Modèle"}
                                type={"text"}
                                placeholder={newProfile.poele.modele}
                                onchange={handleChange}
                            />
                            <Input
                                id={"puissance"}
                                desc={"Puissance (kW)"}
                                type={"text"}
                                placeholder={newProfile.poele.puissance}
                                onchange={handleChange}
                            />
                            <Input
                                id={"dernierRamonage"}
                                desc={"Dernier ramonage"}
                                type={"date"}
                                placeholder={newProfile.poele.dernierRamonage}
                                onchange={handleChange}
                            />

                            {newProfile.poele.dernierRamonage ? (
                                <Fragment>
                                    <p>Prochain Ramonage dans :</p>
                                    {calculRamonage() > 3 ? (
                                        <p className="Vert">
                                            {calculRamonage()} mois
                                        </p>
                                    ) : calculRamonage() < 3 &&
                                      calculRamonage() >= 0 ? (
                                        <p className="Orange">
                                            {calculRamonage()} mois
                                        </p>
                                    ) : (
                                        <p className="Rouge">
                                            {calculRamonage()} mois
                                        </p>
                                    )}
                                </Fragment>
                            ) : (
                                ""
                            )}
                        </fieldset>
                    </form>
                    <button
                        className="Profil__article__div__button"
                        onClick={handleSubmit}
                    >
                        Sauvegarder
                    </button>
                </div>
            </article>
            {modalOpenCreate && (
                <Modal
                    text="Modifications sauvegardé"
                    closeAction={closeModalCreate}
                />
            )}
            {modalOpenError && (
                <Modal
                    text="Aucune modification"
                    closeAction={closeModalError}
                />
            )}
        </div>
    )
}

export default Profil
