import React from 'react'
import {Link} from 'react-router-dom'
import successgif from "./img/1cbd3594bb5e8d90924a105d4aae924c.gif"
import animategif from "./img/dribbble-payment-boy.gif"
import './OderSuccess.scss'
const OderSuccess = () => {
  return (
    <div className='success-payment'>
        <div className="demo-bag-shop"></div>
        <div className="success-conainer">
            <img src={animategif} alt="" className='animte-payment'/>
            <div className="sucess-content">
                <img src={successgif} alt="" className='animte-scuess'/>
                <p>Payment Sccessful !!</p>
            </div>
            <Link to="/discord_clone/shop"><button>Continue Shopping</button></Link>
        </div>
    </div>
  )
}

export default OderSuccess