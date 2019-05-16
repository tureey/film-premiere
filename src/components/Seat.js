import React from 'react'
import PropType from 'prop-types'
import './Seat.css'

export function Seat({
  status = 'available',
  onClick,
  children
}) {
  const componentClass = 'seat'
  const styles = [componentClass, `${componentClass}--${status}`].join(' ')

  return (
    <span
      className={styles}
      tabIndex={tabIndex(status)}
      onClick={onClick}>
      {children}
    </span>
  )
}

Seat.propType = {
  status: PropType.oneOf([
    'available', 'selected', 'owned','reserved'
  ]).isRequired,
  selected: PropType.bool.isRequired,

  children: PropType.node.isRequired
}

function tabIndex(status) {
  return status === 'available' || status === 'selected'
    ? '0'
    : '-1'
}