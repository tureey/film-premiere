import React from 'react'
import './Cinema.css'
import {Seat} from './Seat'
import {Legend} from './Legend'

/*
    
*/
export class Cinema extends React.Component { 

  render() {
    return (
      <div className="cinema">
      <Legend/>
      <span className="cinema__screen"></span>
        <span className="cinema__seats">
          {this.props.seats.map((seat, i) => (
            <Seat
              status={seat}
              onClick={() => this.props.handleOnSeatClick(seat, i)}
              key={i}
              number={i + 1}/>
          ))}
        </span>
      </div>
    )
  }
}