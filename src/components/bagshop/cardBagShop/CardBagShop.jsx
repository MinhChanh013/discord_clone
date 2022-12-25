import React from 'react'

import { useDispatch } from "react-redux"
import { removeItem, addItem, removeAllItem } from "../../../redux/action/action"
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardBagShop.scss'
const CardBagShop = ({ item }) => {
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

    const moneyMount = (item.money_new.slice(1) * item.qty).toFixed(2)
    return (
        <div className="bagshop-item">
            <div className="bagshop-img"><img src={item.image} alt="" /></div>
            <div className="bag-content-money">
                <span className='btn-remove' onClick={() => { removeProduct(item) }}>-</span>
                <span className='btn-status-money'>
                    <div className='number-money'>{item.money_new}</div>
                    <div className='number-item'>x {item.qty}</div>
                </span>
                <span className='btn-add' onClick={() => { addProduct(item) }}>+</span>
            </div>
            <div className='number-money'>${moneyMount}</div>
            <FontAwesomeIcon icon={faTrash} className="icon-trash" onClick={() => { removeAllProduct(item) }}/>
        </div>
    )
}

export default CardBagShop