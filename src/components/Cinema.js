import React from 'react'
import PropTypes from 'prop-types'
import './Cinema.css'
import {Seat} from './Seat'
import {Legend} from './Legend'

export function Cinema({seats, handleOnSeatClick}) { 
  return (
    <div className="cinema">
      <Legend/>
      <span className="cinema__screen"></span>
        <span className="cinema__seats">
          {seats.map((seat, i) => (
            <Seat
              status={seat.status}
              onClick={() => handleOnSeatClick(seat, i)}
              key={i}
              number={i + 1}/>
          ))}
      </span>
    </div>
  )
}

Cinema.propTypes = {
  seats: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
}