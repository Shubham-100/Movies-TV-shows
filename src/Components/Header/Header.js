import './header.css';

import React from 'react'

function Header() {
  return (
    <div>
        <span className='header' onClick={() => window.scroll(0, 0)}>🎥Netflix Movies and TV Shows🎞️</span>
    </div>
  )
}

export default Header