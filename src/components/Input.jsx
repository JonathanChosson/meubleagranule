import React, { Fragment } from "react"

/**
 * Component for generate input
 * @component
 * @param {object} param0 object contain id, desc, type and onChange function
 * @returns {object} input Object
 */
const Input = ({ id, desc, type, onchange }) => {
    return (
        <Fragment>
            <label htmlFor={id}>{desc}</label>
            <input type={type} id={id} onChange={onchange} />
        </Fragment>
    )
}

export default Input
