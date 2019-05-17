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

  componentDidMount() {
    const seats = JSON.parse(sessionStorage.getItem('seats'))
    seats && this.setState({seats})
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

    const seats = this.state.seats.map(seat => seat === 'selected' ? 'owned' : seat)
    this.setState({seats}, () => {
      sessionStorage.setItem('seats', JSON.stringify(seats))  
    })
  }

  render() {
    const {seats} = this.state
    const seatsSelected = seats.filter(seat => seat === 'selected')
    const countSeatsSelected = seatsSelected.length
    const totalPrice = countSeatsSelected * this.state.seatPrice

    return(
      <Section id='buy' title='Buy tickets'>
        <form onSubmit={this.onSubmitForm} className="buy__wrapper">
          <Cinema seats={seats} handleOnSeatClick={this.handleOnSeatClick}/>
          <BuySummary total={totalPrice} seatsSelected={countSeatsSelected}/>
        </form>
      </Section>
    )
  }
}