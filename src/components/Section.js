import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

export function Section({id, title, colored, children}) {
  return (
    <section id={id} className={`section ${colored ? 'section--colored' : ''}`}>
      <h1 className="section__title">{title}</h1>
      <div className="section__content">{children}</div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  children: PropTypes.node.isRequired,
}