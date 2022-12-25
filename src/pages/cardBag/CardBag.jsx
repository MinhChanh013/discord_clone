import React, { useState } from 'react'
import './CardBag.scss'
//Redux
import { useDispatch, useSelector } from "react-redux"
import { removeItem, addItem, removeAllItem } from "../../redux/action/action"

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faPlus,
  faMinus,
  faArrowLeftLong,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const CardBag = () => {
  const [promoCode, setPromoCode] = useState(true)

  let sumedit = 0
  const bag = useSelector((state) => state.handelBag);
  const disPath = useDispatch()
  const removeProduct = (item) => {
    disPath(removeItem(item))
  }
  const addProduct = (item) => {
    disPath(addItem(item))
  }

  const removeAllProduct = (item) => {
    disPath(removeAllItem(item))
  }
  return (
    <div>
      <div className="demo-bag-shop"></div>
      {bag.length === 0 ? 
        <div className='nocard-item-bag'>
          <h3>Your cart is empty.</h3>
          <Link to="/discord_clone/shop"><button><FontAwesomeIcon icon={faArrowLeftLong} className="icon-left-card" />Back to store</button></Link>
        </div>
      : 
       <div className="card-itemCart">
        <div className="cart-card">
          <div className="cart-card-container">
            <div className="cart-card-header">
              <Link to="/discord_clone/shop"><p><FontAwesomeIcon icon={faArrowLeftLong} className="icon-left-card" />Continue Shopping</p></Link>
              <h3>Cart Gaming</h3>
            </div>
            <div className='card-item-container'>
              {bag.map((item, i) => {
                sumedit += item.money_new.slice(1) * item.qty
                return (
                  <div className="card-item-card" key={i}>
                    <div className="card-content">
                      <div className=""><img src={item.image} alt="" /></div>
                      <div className='card-content-main'>
                        <div className='content-card-bag'>
                          <h4>{item.name}</h4>
                          <p>The lengend developer Hideo Kojima release a new ionics game for the gerne sam Bridges must dare.</p>
                        </div>
                        <FontAwesomeIcon icon={faTrashCan} className="edit-trash" onClick={() => { removeAllProduct(item) }} />
                      </div>
                    </div>
                    <div className='card-quanlity-container'>
                      <div className="card-card-number">
                        <p className='quanlity-card'>Quantity</p>
                        <div className="set-number-cart">
                          <span onClick={() => { removeProduct(item) }}><FontAwesomeIcon icon={faMinus} className="icon-setnumber" /></span>
                          <p>{item.qty}</p>
                          <span onClick={() => { addProduct(item) }}><FontAwesomeIcon icon={faPlus} className="icon-setnumber" /></span>
                        </div>
                      </div>
                      <p className='quantity-money-card'>${(item.money_new.slice(1) * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='footer-card-quanlity'>
              <div className='promoCode-main-card'>
                {promoCode === true
                  ?
                  <div className="card-promoCode" onClick={() => { setPromoCode(false) }}>
                    <p>Promo code ?</p>
                  </div>
                  :
                  <div className='card-apply'>
                    <div className='input-promocode'>
                      <input type="text" placeholder='Promo code' />
                      <span>Apply</span>
                    </div>
                    <p onClick={() => { setPromoCode(true) }}>Cancel</p>
                  </div>}
              </div>
              <div className="card-total">
                <div className="">
                  <p>Subtotal</p>
                  <p>${(sumedit).toFixed(2)}</p>
                </div>
                <div className="">
                  <p>Shipping</p>
                  <p>$20.00</p>
                </div>
                <div className="">
                  <p>Taxes( 7% )</p>
                  <p>${(7 * sumedit / 100).toFixed(2)}</p>
                </div>
                <div className="total-editCard">
                  <p>Total</p>
                  <p>${(sumedit + 20 + (7 * sumedit / 100)).toFixed(2)}</p>
                </div>
                <Link to="/discord_clone/bag">
                  <div className='checkout-container'>
                    <button className='btn-checkout'>Checkout
                      <FontAwesomeIcon icon={faArrowRight} className="icon-right-card" />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default CardBag