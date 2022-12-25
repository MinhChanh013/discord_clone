import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import './CartSetItem.scss'
const CartSetItem = () => {
  return (
    <div className='cart-edit'>
        <div className="cart-edit-container">
            <div className="cart-edit-header">
                <h3>Cart Gaming</h3>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
    </div>
  )
}

export default CartSetItem