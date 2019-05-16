import React from 'react'
import './Buy.css'
import {Section} from './Section'
import {Cinema} from './Cinema'

export function Buy() {
  return(
    <Section title='Buy tickets'>
      <div className="buy__wrapper">
        <Cinema/>
        <div className="buy__complementary">
          <p className="buy__information">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget ante ante. Nulla vulputate vehicula mi quis faucibus. Ut viverra magna maximus.
            <br/><br/>
            Donec eu sapien sagittis, vestibulum ex sed, interdum ante. Donec e attit.
          </p>
          <div className="buy__summary">
            <label className="buy__num-tickets">Tickets: 4</label>  
            <label  className="buy__total">Total: 41€</label>  
            <button className="buy__confirmation">Take 'em!</button>
          </div>
        </div>
      </div>
    </Section>
  )
}