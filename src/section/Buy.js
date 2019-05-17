import React from 'react'
import './Buy.css'
import {Section} from '../components/Section'
import {Cinema} from '../components/Cinema'
import {BuySummary} from '../components/BuySummary'
import {useSeats} from '../hooks/useSeats'
import {useCurrency} from '../hooks/useCurrency'

export function Buy() {
  const {seats, getSelected, toggleSeat, purchaseSeats, total} = useSeats()
  const currency = useCurrency()

  function onSubmitForm(e) {
    e.preventDefault();
    purchaseSeats()
  }

  return(
    <Section id='buy' title='Buy tickets'>
      <form onSubmit={onSubmitForm} className="buy__wrapper">
        <Cinema seats={seats} handleOnSeatClick={toggleSeat}/>
        <BuySummary
          currency={currency}
          total={total}
          countSelected={getSelected().length}/>
      </form>
    </Section>
  )
}