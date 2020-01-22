import React from 'react'

const HeaderLink = props => {
    return (
        <h2 id={props.ident}>
            <a href={`#${props.ident}`} className="text-decoration-none text-secondary">
            <span># </span>{props.children}</a>
        </h2>
    )
}

export default HeaderLink
