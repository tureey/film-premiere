import React from 'react'
import PropType from 'prop-types'
import './Seat.css'

export function Seat({
  status = 'available',
  onClick,
  number
}) {
  const componentClass = 'seat'
  const styles = [componentClass, `${componentClass}--${status}`].join(' ')

  return (
    <span
      className={styles}
      tabIndex={tabIndex(status)}
      onClick={onClick}
      role="checkbox"
      aria-checked={isChecked(status)}
      aria-label={`Seat number ${number}`}
      
      >
      {number}
    </span>
  )
}

Seat.propType = {
  status: PropType.oneOf([
    'available', 'selected', 'owned','reserved'
  ]).isRequired,
  selected: PropType.bool.isRequired,
  number: PropType.number.isRequired
}

function tabIndex(status) {
  return status === 'available' || status === 'selected'
    ? '0'
    : '-1'
}

function isChecked(status) {
  return status === 'selected'
}