import React from 'react'

import RatingShop from '../../../components/ratingshop/RatingShop'
import datas from '../../../assets/data'
import './Rating.scss'
const Rating = () => {
  return (
    <div className='rating'>
      <div className='rating-main'>
        <div className="bestsellers">
          <h2>BESTSELLERS</h2>
          {
            datas.bestsellers.map((item, i) => (
              <RatingShop key={i} item={item} number={i}/>
            ))
          }
        </div>
        <div className="most_wishlisted">
          <h2>MOST WISHLISTED</h2>
          {
            datas.most_wishlisted.map((item, i) => (
              <RatingShop key={i} item={item} number={i}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Rating