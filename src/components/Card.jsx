import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ label, picture, title }) => {
    return (
        <div className="card__content">
            <span className="card__label">{label}</span>
            <img src={picture} alt="freelance" />
            <span className="card__title">{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Card
