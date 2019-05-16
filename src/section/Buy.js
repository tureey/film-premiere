import React from 'react'
import './Buy.css'
import {Section} from '../components/Section'
import {Cinema} from '../components/Cinema'

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

          <div className="buy__complementary">
            <p className="buy__information">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget ante ante. Nulla vulputate vehicula mi quis faucibus. Ut viverra magna maximus.
              <br/><br/>
              Donec eu sapien sagittis, vestibulum ex sed, interdum ante. Donec e attit.
            </p>
            <div className="buy__summary">
              <label className="buy__num-tickets">You have selected {countSeatsSelected} tickets.</label>  
              <label  className="buy__total">Total: {totalPrice}€</label>  
              <button className="buy__confirmation">Take 'em!</button>
            </div>
          </div>
        </form>
      </Section>
    )
  }
}