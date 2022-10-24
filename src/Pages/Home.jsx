import React from "react"
import Banniere from "../components/Banniere"
import Header from "../components/Header"
import "../Style/Pages/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Banniere />
            <article className="Home__article">
                <p className="Home__article__p">
                    e-
                    <span className="Rouge Home__article__p__span">
                        granule
                    </span>
                    .fr comprendre enfin sa consommation de{" "}
                    <span className="Rouge Home__article__p__span">
                        granulés
                    </span>
                </p>
            </article>
            <aside className="Home__aside">
                <div className="Home__aside__div">
                    <i className="fa-solid fa-boxes-stacked Home__aside__div__logo Rouge"></i>
                    <div className="Home__aside__div__p">
                        <h2 className="Home__aside__div__p__h2">
                            Gérer votre stock
                        </h2>
                        Garder une vue simple et détaillé du stock restant et de
                        l'estimation de son autonomie
                    </div>
                </div>
            </aside>
            <aside className="Home__aside">
                <div className="Home__aside__div">
                    <div className="Home__aside__div__p">
                        <h2 className="Home__aside__div__p__h2">
                            Gérer votre budget
                        </h2>
                        Estimer facilement le coût par an, par semaine de votre
                        consomation de granulés
                    </div>
                    <i className="fa-solid fa-euro-sign Home__aside__div__logo Rouge"></i>
                </div>
            </aside>
            <aside className="Home__aside">
                <div className="Home__aside__div">
                    <i className="fa-solid fa-business-time Home__aside__div__logo Rouge"></i>
                    <div className="Home__aside__div__p">
                        <h2 className="Home__aside__div__p__h2">
                            Garder un historique
                        </h2>
                        Bénéficier d'un historique et de graphiques pour piloter
                        sa consomation
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Home
