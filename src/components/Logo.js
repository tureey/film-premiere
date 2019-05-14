import React from 'react'
import './Logo.css'

export function Logo() {
  return(
    <a
      className="logo"
      href="https://www.elrincondevictor.com"
      role="banner"
      aria-label="Website of the creator">
      <span
        className="logo__icon"
        role="img"
        aria-label="Two hands sticked imtitating the pray gesture">
        🙏
      </span>
      elrincondevictor.com
    </a>
  )
}