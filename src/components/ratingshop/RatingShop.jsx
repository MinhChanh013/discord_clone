import React from 'react'

import './RatingShop.scss'
const RatingShop = ({ item, number }) => {
  return (
    <div className='rating-shop'>
      <div className="rating-container">
        <div className="rating-number"><p>{number + 1}</p></div>
        <div className="rating-img"><img src={item.image} alt='' /></div>
        <div className="rating-name">{item.name}</div>
      </div>
      <div className="card-money rating-money">
          {item.discord !== '' ?
            <>
              <div className="money">
                <p className='money-new'>{item.money_new}</p>
                <p className='money-old'>{item.money_old}</p>
              </div>
              <div className="discord-money rating-discord">
                <p>{item.discord}</p>
              </div>
            </> :
            <div className="money">
              <p className='money-new'>{item.money_new}</p>
            </div>}
        </div>
    </div>
  )
}

export default RatingShop