import React from 'react'

import './HeaderSale.scss'
const HeaderSale = ({name, img}) => {
  return (
    <div className='header-sale'>
        <div className="header-slae-content" style={{ backgroundImage: `url(${img})` }}>
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default HeaderSale