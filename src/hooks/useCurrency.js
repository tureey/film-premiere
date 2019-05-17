import React from 'react'

export function useCurrency(initial = { symbol:'€', code:'EUR', name: 'euro'}) {
  const [currency, setCurrency] = React.useState(initial)
  
  return currency  
}