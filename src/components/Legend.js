import React from 'react'
import './Legend.css'

export function Legend() {
  return (
    <ul className="legend">
      <li className="legend__item legend__item--reserved">Reserved</li>
      <li className="legend__item legend__item--available">Available</li>
      <li className="legend__item legend__item--selected">Selected</li>
      <li className="legend__item legend__item--owned">Owned</li>
    </ul>
  )
}