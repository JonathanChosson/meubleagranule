import React from "react"
import "../Style/Components/Banniere.css"

const Banniere = () => {
    return (
        <article className="Banniere__article">
            <figure className="Banniere__article__figure">
                <img
                    className="Banniere__article__figure__img"
                    src="./image/fond.jpeg"
                    alt="Chauffage granule"
                />
                {/* <figcaption className="Home__article__figure__figcaption">
                        Gerer vos granulés
                    </figcaption> */}
            </figure>
        </article>
    )
}

export default Banniere
