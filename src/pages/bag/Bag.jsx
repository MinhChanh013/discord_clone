import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faXmark,
  faArrowLeft,
  faUnlockKeyhole,
  faLocationDot,
  faCircleCheck,
  faCreditCard,
  faTrashCan,
  faPlus,
  faMinus,
  faSackDollar,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import './Bag.scss'
//redux
import { useDispatch, useSelector } from "react-redux"
import { removeItem, addItem, removeAllItem } from "../../redux/action/action"
//imgae
import chip from "./img/chip.png"
const Bag = () => {
  const bag = useSelector((state) => state.handelBag);
  let sum = 0;
  let sumedit = 0
  const refCountry = useRef(null)
  // Redux
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

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [cardNumber, setCardNumber] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCVV, setCardCVV] = useState('')

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('VietNam')

  const [nameContent, setNameContent] = useState('billing')
  const [promoCode, setPromoCode] = useState(true)
  const [editCart, setEditCart] = useState(false)
  const [hideMain, setHideMain] = useState(true)
  const [hideMoney, setHideMoney] = useState(false)
  const moneyTotal = useRef(null)


  //get size window
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth >= 1024) {
      setHideMain(true)
      setHideMoney(false)
    }
    else
      setHideMoney(true)
  }, [windowSize])


  return (
    <div>
      <div className={`edit-itemCart ${editCart === true ? 'active' : ''}`}>
        <div className={`cart-edit ${editCart === true ? 'active' : ''}`}>
          <div className="cart-edit-container">
            <div className="cart-edit-header">
              <h3>Cart Gaming</h3>
              <FontAwesomeIcon icon={faXmark} className="time-edit" onClick={() => { setEditCart(false) }} />
            </div>
            <div className='cart-item-container'>
              {bag.map((item, i) => {
                sumedit += item.money_new.slice(1) * item.qty
                return (
                  <div className="cart-item-edit" key={i}>
                    <div className="cart-content">
                      <div>
                        <img src={item.image} alt="" />
                        <h4>{item.name}</h4>
                      </div>
                      <FontAwesomeIcon icon={faTrashCan} className="edit-trash" onClick={() => { removeAllProduct(item) }} />
                    </div>
                    <p className='quanlity-cart'>Quantity</p>
                    <div className="cart-edit-number">
                      <div className="set-number-cart">
                        <span onClick={() => { removeProduct(item) }}><FontAwesomeIcon icon={faMinus} className="icon-setnumber" /></span>
                        <p>{item.qty}</p>
                        <span onClick={() => { addProduct(item) }}><FontAwesomeIcon icon={faPlus} className="icon-setnumber" /></span>
                      </div>
                      <p className='quantity-money'>${(item.money_new.slice(1) * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='promoCode-main'>
              {promoCode === true
                ?
                <div className="cart-promoCode" onClick={() => { setPromoCode(false) }}>
                  <p>Promo code ?</p>
                </div>
                :
                <div className='cart-apply'>
                  <div className='input-promocode'>
                    <input type="text" placeholder='Promo code' />
                    <span>Apply</span>
                  </div>
                  <p onClick={() => { setPromoCode(true) }}>Cancel</p>
                </div>}
            </div>
            <div className="cart-total">
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
            </div>
          </div>
        </div>
      </div>
      <div className='bag-infor'>
        <div className="demo-bag"></div>
        <div className='bag-container'>
          <div className="bag-infor-container">
            <div className="bag-under">
              <Link to="/discord_clone/shop"><p> <FontAwesomeIcon icon={faArrowLeft} className="icon-underbag" /> Continue Shopping</p></Link>
              {hideMoney === true ? <p onClick={() => { setHideMain(!hideMain) }}>
                <FontAwesomeIcon icon={faSackDollar} className="icon-dolar" />
                <span>${(sumedit + 20 + (7 * sumedit / 100)).toFixed(2) === "20.00" ? "0.00" : (sumedit + 20 + (7 * sumedit / 100)).toFixed(2)}</span>
                <FontAwesomeIcon icon={faAngleDown} className="icon-down" />
              </p> : ""}

            </div>
            <div className={`bag-infor-content ${hideMain === true ? "nothide" : "hide"}`}>
              <div className={`content-billing ${nameContent === 'billing' ? 'active' : ''} `} >
                <span>1</span> <h4 onClick={() => {
                  if (nameContent === 'billing') {
                    setNameContent('')
                  }
                  else setNameContent('billing')
                }}>Billing</h4>
                <div className={`from-infor ${nameContent === 'billing' ? 'active' : ''} `}>
                  <form action="">
                    <label htmlFor="name">Full name</label> <br />
                    <input className='ip-form' maxLength='50' placeholder='Name' type="text" id='name' onChange={(e) => {
                      setName(e.target.value)
                    }} /><br />
                    <label htmlFor="email">Email</label><br />
                    <input className='ip-form' placeholder='Email' type="text" id='email' /><br />
                    <label htmlFor="address">Street address</label><br />
                    <input className='ip-form' placeholder='Address' type="text" id='address ' onChange={(e) => {
                      setAddress(e.target.value)
                    }} /><br />
                    <label htmlFor="city">City</label><br />
                    <input className='ip-form' placeholder='City' type="text" id='city ' onChange={(e) => {
                      setCity(e.target.value)
                    }} /><br />
                    <label htmlFor="country">Country</label><br />
                    <div className='drop-select'>
                      <FontAwesomeIcon icon={faChevronDown} className="dropdown-form" />
                      <select name="" id="country" ref={refCountry} onChange={() => {
                        var option = refCountry.current.options[refCountry.current.selectedIndex];
                        setCountry(option.text)
                        console.log(country);
                      }}>
                        <option value="VietNam">VietNam</option>
                        <option value="VietNam">VietNam</option>
                        <option value="VietNam">VietNam</option>
                        <option value="VietNam">VietNam</option>
                        <option value="VietNam">VietNam</option>
                      </select>
                    </div>
                    <div className='check-infor'><input type="checkbox" className='check-form' /> <p>Use different shipping address</p></div>
                  </form>
                  <button onClick={() => {
                    setNameContent('shipping')
                  }}>Continue to shipping</button>
                </div>
              </div>
              <div className={`content-shipping ${nameContent === 'shipping' ? 'active' : ''} `} >
                <span>2</span> <h4 onClick={() => {
                  if (nameContent === 'shipping') {
                    setNameContent('')
                  }
                  else setNameContent('shipping')
                }} className='header-shipping'>Shipping</h4>
                <div className={`from-infor ${nameContent === 'shipping' ? 'active' : ''} `}>
                  <p>Shipping to:</p>
                  <h4 className='add-shipping'><FontAwesomeIcon icon={faLocationDot} />{address === '' && city === '' ? '' : `${address}, ${city}, ${country}`} </h4>
                  <div className="ship-infor">
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} className="check-icon-shipping" />
                      <p className='type-ship'>International shipping</p>
                    </div>
                    <h4>$20.00</h4>
                  </div>
                  <button onClick={() => { setNameContent('payment') }}>Continue to payment</button>
                </div>
              </div>
              <div className={`content-payment ${nameContent === 'payment' ? 'active' : ''} `}>
                <span className='number-payment'>3</span> <h4 onClick={() => {
                  if (nameContent === 'payment') {
                    setNameContent('')
                  }
                  else setNameContent('payment')
                }} className='header-shipping'>Payment</h4>
                <div className={`from-infor ${nameContent === 'payment' ? 'active' : ''} `}>
                  <div className="payment-card">
                    <section>
                      <div className="card">
                        <div className="face front">
                          <div className="debit">Debit Card</div>
                          <div className="bank">Bank Name</div>
                          <img src={chip} alt="" className="chip" />
                          <h3 className="number">{cardNumber}</h3>
                          <h5 className="valid"><span>Valid <br />thru </span><span>{cardDate}</span></h5>
                          <h5 className="cardHolder">{name}</h5>
                        </div>
                        <div className="face back">
                          <div className="blackbar"></div>
                          <div className="ccvtext">
                            <h5>Autorized Signature-not valid unless signed</h5>
                            <div className="whiteBar"></div>
                            <div className="ccv">{cardCVV}</div>
                          </div>
                          <p className="text">
                            Disclaimer video is for educational purpose only. Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Disclaimer
                            video is for educational purpose only. Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                  <p className='content-credit'>Credit card</p>
                  <div className='credit-card-payload'>
                    <FontAwesomeIcon icon={faCreditCard} className="icon-card-payment" />
                    <input type="text" placeholder='Card Number' onChange={(e) => {
                      setCardNumber(e.target.value)
                    }} maxLength="19"></input>
                    <input type="text" placeholder='MM/YY' onChange={(e) => {
                      setCardDate(e.target.value)
                    }} maxLength="5" />
                    <input type="text" placeholder='CVV' onChange={(e) => {
                      setCardCVV(e.target.value)
                    }} maxLength="3" />
                  </div>
                  <Link to="/discord_clone/success"><button>Place order</button></Link>
                </div>
              </div>
            </div>
            <div className={`bag-infor-main ${hideMain === true ? "hide" : "nothide"}`}>
              <div className='bag-infor-fixed'>
                {bag.length === 0 ?
                  <div className="bag-noitem">
                    <h4>You bag is empty</h4>
                  </div>
                  :
                  <div className="infor-main-content">
                    <div className="infor-main-top">
                      <div className="">
                        <h4>Order Gamming</h4>
                        <span onClick={() => { setEditCart(true) }}>Edit</span>
                      </div>
                      {bag.map((item, i) => {
                        sum += item.qty * item.money_new.slice(1)
                        return (
                          <div key={i} className="infor-item">
                            <p>{item.name}</p>
                            <p>x{item.qty}</p>
                            <p>${item.qty * item.money_new.slice(1)}</p>
                          </div>
                        )
                      })}
                    </div>
                    <div className="infor-main-bottom">
                      <div className="">
                        <p>Subtotal</p>
                        <p>${sum.toFixed(2)}</p>
                      </div>
                      <div className="">
                        <p>Shipping</p>
                        <p>$20.00</p>
                      </div><div className="">
                        <p>Taxes ( 7% )</p>
                        <p>${(7 * sum / 100).toFixed(2)}</p>
                      </div><div className="total-infor">
                        <p>Total</p>
                        <p ref={moneyTotal}>${(sum + 20 + (7 * sum / 100)).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="infor-main-more">
                      <p><FontAwesomeIcon icon={faUnlockKeyhole} className="lock-infor" /> Secured by Snipcart</p>
                      <div>
                        <svg viewBox="0 0 174 56" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Visa" title="Visa" className="snipcart__icon--brand snipcart__icon"><path d="M74.98 55.192H60.965L69.73.982h14.016l-8.766 54.21zm50.813-52.884C123.028 1.21 118.643 0 113.221 0c-13.842 0-23.59 7.381-23.65 17.934-.114 7.786 6.98 12.111 12.285 14.707 5.423 2.653 7.267 4.385 7.267 6.75-.056 3.63-4.382 5.305-8.418 5.305-5.596 0-8.595-.863-13.151-2.884l-1.846-.866-1.962 12.169c3.288 1.498 9.345 2.827 15.633 2.885 14.707 0 24.282-7.267 24.396-18.513.056-6.171-3.69-10.9-11.766-14.764-4.902-2.48-7.905-4.152-7.905-6.69.058-2.307 2.54-4.67 8.074-4.67 4.557-.116 7.905.98 10.441 2.075l1.268.576 1.906-11.706zm18.63 33.68c1.154-3.114 5.596-15.168 5.596-15.168-.058.116 1.152-3.171 1.844-5.19l.98 4.672s2.654 12.976 3.23 15.686h-11.65zM161.725.983h-10.842c-3.344 0-5.884.98-7.326 4.498l-20.821 49.71h14.708l2.942-8.131h17.996a2177.47 2177.47 0 011.673 8.132h12.978L161.725.982zm-112.468 0L35.529 37.949l-1.5-7.497C31.491 21.8 23.532 12.401 14.65 7.729l12.574 47.406h14.822L64.078.983H49.256z" fill="#00579F"></path><path d="M22.782.983H.232L0 2.078C17.592 6.577 29.242 17.42 34.03 30.454L29.126 5.54c-.807-3.463-3.288-4.443-6.345-4.557z" fill="#FAA61A"></path></svg>
                        <svg viewBox="0 0 104 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Mastercard" title="Mastercard" className="snipcart__icon--brand snipcart__icon"><path d="M67.173 6.842H36.37v50.31h30.803V6.842z" fill="#FF5F00"></path><path d="M39.543 32.002a31.939 31.939 0 0112.22-25.15 31.994 31.994 0 100 50.31 31.939 31.939 0 01-12.22-25.16z" fill="#EB001B"></path><path d="M103.53 32.002a31.991 31.991 0 01-35.41 31.81 31.994 31.994 0 01-16.357-6.66 31.992 31.992 0 000-50.31 31.994 31.994 0 0151.767 25.151v.009z" fill="#F79E1B"></path></svg>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bag