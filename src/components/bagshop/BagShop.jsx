import React from 'react'
import { Link } from 'react-router-dom';
import './BagShop.scss'
import { useDispatch, useSelector } from "react-redux"
import { hiddenBag } from "../../redux/action/action"

import CardBagShop from './cardBagShop/CardBagShop';

const BagShop = () => {
  const disPath = useDispatch()
  const hideBag = (item) => {
    disPath(hiddenBag(item))
  }
  const bag = useSelector((state) => state.handelBag);
  return (
    <div onMouseUp={()=>{hideBag("abc")}} className={`bagshop ${bag.length === 0 ? 'noscroll' : ''}`}>
      <div className="bagshop-container">
        {bag.length === 0
          ? <div className="bag-noitem">
            <p>You bag is empty</p>
          </div>
          :
          <div>
            {bag.map((item, i) => (
              <CardBagShop key={i} item={item} />
            ))}
          </div>

        }
      </div>
    </div>
  )
}

export default BagShop