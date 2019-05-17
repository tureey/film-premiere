import React from 'react'

let defaultValue = []
defaultValue.length = 70
const defaultPrice = 9.99
defaultValue.fill({status: 'available', price: defaultPrice})

export function useSeats(initialState = defaultValue) {

  /*
    We collect the previous buys done whenever by the user
  */
  const [seats, setSeats] = React.useState(initialState)
  React.useEffect(() => {
    const seats = readInventory()
    seats && setSeats(seats)   
  }, [])

  function readInventory() {
    return JSON.parse(localStorage.getItem('seats'))
  }

  /*
    Logic to select/unselect a seat
  */
  function toggleSeat(seat, index) {
    let status = '';
    if (seat.status === 'selected') { status = 'available' }
    if (seat.status === 'available') { status = 'selected' }

    let newSeats = [...seats]
    newSeats[index]= {...seat, status: status}
    setSeats(newSeats) 
  }

  function bySelected(seat) {
    return seat.status === 'selected'
  }

  function calculatePrice(seats) {
    if (seats.length === 0) { return 0; }

    const seatsSelected = seats.filter(bySelected)
    return seatsSelected.reduce((sum, seat) => sum + seat.price, 0)
  }

  function purchaseSeats(callback) {
    const seatsAfterPurchase = seats.map(seat => {
      if (seat.status !== 'selected') { return seat }
      return {...seat, status: 'owned'}
    })

    setSeats(seatsAfterPurchase)
    callback()
  }

  function updateInventory() {
    localStorage.setItem('seats', JSON.stringify(seats))
  }

  function round(number) {
    return Math.round(number * 100) / 100
  }

  return {
    seats,
    setSeats,
    toggleSeat,
    purchaseSeats,
    readInventory,
    updateInventory,
    total: round(calculatePrice(seats.filter(bySelected)))
  }
}