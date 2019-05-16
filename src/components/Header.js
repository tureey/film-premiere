import React from 'react'
import PropTypes from 'prop-types'
import {Logo} from './Logo'
import './Header.css'

export function Header({title, slogan, actions}) {
  return(
    <header className="header">
      <Logo/>

      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <p className="header__slogan">
          {slogan}
        </p>

        {actions && (<div className="header__actions">{actions}</div>)}
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
}