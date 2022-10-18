import React from "react"
import Header from "../components/Header"
import "../Style/Pages/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <article className="Home__article">
                <img
                    className="Home__article__img"
                    src="./image/fond.jpeg"
                    alt="Chauffage granule"
                />
            </article>
        </div>
    )
}

export default Home
