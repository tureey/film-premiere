import React from 'react'
import './Cinema.css'
import {Seat} from './Seat'
import {useSeats} from '../hooks/useSeats'
import {Legend} from './Legend'

/*
    
*/
export class Cinema extends React.Component {
  constructor(props) {
    super(props)

    let seats = []
    seats.length = 70
    seats.fill('available')
    this.state = { seats }
  }

  handleOnSeatClick = (seat, index) => {
    
    if (seat === 'reserved' || seat === 'owned') {
      return;
    }

    let {seats: currentSeats} = this.state
    let seatStatus = '';

    if (seat === 'selected') { seatStatus = 'available' }
    if (seat === 'available') { seatStatus = 'selected' }

    currentSeats[index] = seatStatus
    this.setState({ seats: currentSeats}) 
  }
  

  render() {
    return (
      <div className="cinema">
      <Legend/>
      <span className="cinema__screen"></span>
        <span className="cinema__seats">
          {this.state.seats.map((seat, i) => (
            <Seat
              status={seat}
              onClick={() => this.handleOnSeatClick(seat, i)}
              key={i}
              number={i + 1}/>
          ))}
        </span>

        <span className="cinema__"></span>
      </div>
    )
  }
}