import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { addItem, handelModalSuccess } from "../../../../redux/action/action"

import './CardType.scss'
import { faBagShopping, faStar } from '@fortawesome/free-solid-svg-icons'
const CardType = ({ item }) => {

    const disPath = useDispatch()

    const handelHideModal = (stBoolean) => {
        disPath(handelModalSuccess(stBoolean))
        setTimeout(()=>{
            disPath(handelModalSuccess(false))
        },1000)
    }
    const addProduct = (item) => {
        disPath(addItem(item))
    }

    return (
        <div className='card-typeGame'>
            <div className="card-container-typeGame">
                <div className="card-main-TypeGame" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className='star-card-type'><FontAwesomeIcon icon={faStar} className="icon-star-type" /><span>9.4</span></div>
                </div>
                <div className="card-content-TypeGame">
                    <div>
                        <h4>{item.name}</h4>
                        <FontAwesomeIcon icon={faBagShopping} className="bag-card-type" onClick={() => { addProduct(item)
                        handelHideModal(true)
                        }} />
                    </div>
                    <div>
                        <p>Price</p>
                        <h4 className='money-item-card'>{item.money_new}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardType