import React from 'react'
import './Cinema.css'

export function Cinema({children}) {
  return (
    <div className="cinema">
      <span className="cinema__screen"></span>
      <span className="cinema__seats">
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
        <span className="cinema__seat"></span>
      </span>
    </div>
  )
}