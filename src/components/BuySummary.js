import React from 'react'
import './BuySummary.css'

export function BuySummary({countSelected = 0, total = 0}) {
  return(
    <div className="buy-summary">
      <p className="buy-summary__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget ante ante. Nulla vulputate vehicula mi quis faucibus. Ut viverra magna maximus.
        <br/><br/>
        Donec eu sapien sagittis, vestibulum ex sed, interdum ante. Donec e attit.
      </p>
      <div className="buy-summary__payment">
        <label className="buy-summary__num-tickets">You have selected {countSelected} tickets.</label>  
        <label  className="buy-summary__total">Total: {total}€</label>  
        <button className="buy-summary__confirmation">Take 'em!</button>
      </div>
    </div>
  )
}