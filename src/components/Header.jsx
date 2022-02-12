import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img
                    src="./assets/shiny-logo-light.png"
                    alt="shiny-logo"
                />
            </div>
            <nav>
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink
                            to="/"
                            className={`header__link ${(nav) =>
                                nav.isActive ? 'active' : ''}`}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/profils"
                            className={`header__link ${(nav) =>
                                nav.isActive ? 'active' : ''}`}
                        >
                            Profils
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/survey/1"
                            className={`header__link ${(nav) =>
                                nav.isActive ? 'active' : ''}`}
                        >
                            Faire le test
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
