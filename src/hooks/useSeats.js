import React from 'react'

let defaultSeats = []
defaultSeats.length = 70
const defaultPrice = 9.99
defaultSeats.fill({status: 'available', price: defaultPrice})
defaultSeats.map((seat, index) => {
  if (Math.floor((Math.random() * 10) + 1) > 5) {
    return {...seat, status: 'reserved'}
  } 

  return seat
})

export function useSeats(initialState = defaultSeats) {
  const [inventoryId] = React.useState('movie-premiere__movie[0]')
  /*
    We collect the previous buys done whenever by the user
  */
  const [seats, setSeats] = React.useState(initialState)
  React.useEffect(() => {
    const seats = JSON.parse(localStorage.getItem(inventoryId))
    seats && setSeats(seats)   
  }, [inventoryId])


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

  function purchaseSeats() {
    const seatsAfterPurchase = seats.map(seat => {
      if (seat.status !== 'selected') { return seat }
      return {...seat, status: 'owned'}
    })

    console.log(seatsAfterPurchase)

    setSeats(seatsAfterPurchase)
    updateInventory(seatsAfterPurchase)
  }

  function updateInventory(seats) {
    localStorage.setItem(inventoryId, JSON.stringify(seats))
  }

  function round(number) {
    return Math.round(number * 100) / 100
  }

  function getSelected() {
    return seats.filter(bySelected)
  }

  return {
    seats,
    setSeats,
    toggleSeat,
    purchaseSeats,
    getSelected,
    total: round(calculatePrice(seats.filter(bySelected)))
  }
}