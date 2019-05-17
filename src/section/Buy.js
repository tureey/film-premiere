import React from 'react'
import './Buy.css'
import {Section} from '../components/Section'
import {Cinema} from '../components/Cinema'
import {BuySummary} from '../components/BuySummary'

export class Buy extends React.Component {
  constructor(props) {
    super(props)

    let seats = []
    seats.length = 70
    seats.fill('available')

    this.state = {
      seats,
      seatPrice: 9.99,
      currency: { symbol:'€', code:'EUR', name: 'euro'}
    }
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

  onSubmitForm = e => {
    e.preventDefault();
  }

  render() {
    const {seats} = this.state
    const seatsSelected = seats.filter(seat => seat === 'selected')
    const countSeatsSelected = seatsSelected.length
    const totalPrice = countSeatsSelected * this.state.seatPrice

    return(
      <Section title='Buy tickets'>
        <form onSubmit={this.onSubmitForm} className="buy__wrapper">
          <Cinema seats={seats} handleOnSeatClick={this.handleOnSeatClick}/>
          <BuySummary price={totalPrice} seatsSelected={countSeatsSelected}/>
        </form>
      </Section>
    )
  }
}