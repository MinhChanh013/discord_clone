import React from 'react'

import './CardShop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CardShop = ({ item }) => {

    return (
        <div>
            <div className='Card' style={{ backgroundImage: `url(${item.image})` }}>
                <div className="box-card">
                    <div className="content-card">
                        <div className="card-lef">
                            <p className='card-name'>{item.name}</p>
                            {item.discord !== '' ?
                                <div className="card-money">
                                    <div className="discord-money">
                                        <p>-{item.discord}</p>
                                    </div>
                                    <div className="money">
                                        <p className='money-new'>{item.money_new}</p>
                                        <p className='money-old'>{item.money_old}</p>
                                    </div>
                                </div> :
                                <div className="card-money">
                                    <p className='money-present'>{item.money_new}</p>
                                </div>
                            }
                        </div>
                        <div className="card-right">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardShop