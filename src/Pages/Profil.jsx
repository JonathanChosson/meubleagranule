import React, { useState } from "react"
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
    console.log(profilData.length)
    const dispatch = useDispatch()
    const [modalOpenCreate, setModalOpenCreate] = useState(false)
    const [modalOpenError, setModalOpenError] = useState(false)

    const openModalCreate = () => setModalOpenCreate(true)
    const closeModalCreate = () => setModalOpenCreate(false)
    const openModalError = () => setModalOpenError(true)
    const closeModalError = () => setModalOpenError(false)

    let profil
    if (profilData.length > 0) {
        profil = { ...profilData[0] }
    } else {
        profil = {
            mail: "",
        }
    }

    const [newProfile, setNewProfile] = useState(profil)

    function setData(key, value) {
        setNewProfile({
            ...newProfile,
            [key]: value,
        })
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
            default:
                console.error(new Error("Whoops, something bad happened"))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log()
        if (newProfile.mail) {
            dispatch(addData(newProfile))
            openModalCreate()
        } else {
            openModalError()
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
                                <i className="fa-solid fa-user"></i> Mon profil
                            </legend>
                            <Input
                                id={"mail"}
                                desc={"Adresse Mail"}
                                type={"mail"}
                                onchange={handleChange}
                            />
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
