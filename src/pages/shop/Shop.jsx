import React from 'react'

import './Shop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from "react-redux"

import SlideShop from './slides/SlideShop'
import TypeShop from './typeShop/TypeShop'
import HotSale from './hotsale/HotSale'
import Rating from './rating/Rating'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
  const status = useSelector((state) => state.handelModalSuccess);

  return (
    <div>
      <div className="demo-bag-shop"></div>
      {status[0].status === false ? "" : <div className='modal-add-container'>
        <div className="modal-add-success">
          <div className="modal-success">
            <FontAwesomeIcon icon={faCheck} className="modal-icon-check" />
            <h4>Add success Game in bag</h4>
          </div>
        </div>
      </div>}
      <SlideShop />
      <TypeShop />
      <HotSale />
      <Rating />
    </div>
  )
}

export default Shop