import React from 'react'
import {Section} from './Section'
import {Cinema} from './Cinema'

export function BuyTickets() {
  return(
    <Section colored title='Buy tickets'>
      <p>Below we have the status of all the chairs. Red for occupied, green for selected and neutral for empty.</p>
      <Cinema/>
    </Section>
  )
}