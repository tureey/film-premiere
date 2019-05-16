import React from 'react'
import './Cinema.css'
import {Seat} from './Seat'
import {useSeats} from '../hooks/useSeats'

/*
    
*/
export class Cinema extends React.Component {
  constructor(props) {
    super(props)

    let seats = []
    seats.length = 70
    seats.fill({status: 'owned'})
    this.state = { seats }
  }
  

  render() {
    return (
      <div className="cinema">
      <span className="cinema__screen "></span>
        <span className="cinema__seats">
          {this.state.seats.map((seat, i) => <Seat status={seat.status} key={i}>{i+1}</Seat>)}
        </span>
      </div>
    )
  }
}