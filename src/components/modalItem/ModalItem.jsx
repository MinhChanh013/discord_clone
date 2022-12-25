import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { faXbox, faWindows, faPlaystation } from "@fortawesome/free-brands-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { removeItemModal, addItem, handelModalSuccess } from "../../redux/action/action"
import { } from "@fortawesome/free-regular-svg-icons"
import './ModalItem.scss'
const ModalItem = () => {
    const disPath = useDispatch()
    const notactiveModal = (item) => {
        disPath(removeItemModal(item))
    }
    const addandroveItem = (item) =>{
        disPath(removeItemModal(item))
        disPath(addItem(item))
    }
    const handelHideModal = (stBoolean) => {
        disPath(handelModalSuccess(stBoolean))
        setTimeout(()=>{
            disPath(handelModalSuccess(false))
        },1000)
    }
    const numerBag = useSelector((state) => state.handlModal);
    return (
        <>
            {numerBag.length === 0 ? '' :
                <div className={`modalitem ${numerBag.length === 0 ? '' : 'active'}`}>
                    <div className="modal-main" style={{ backgroundImage: `url("https://i.pinimg.com/originals/4f/f9/fe/4ff9fefafc58789a76bc3a48ce4177b8.jpg")` }}>
                        <div className="modal-container" >
                            <div className="modal-header">
                                <FontAwesomeIcon icon={faXmark} onClick={() => {
                                    notactiveModal()
                                }} />
                            </div>
                            <div className="modal-content">
                                <div className="modal-content-left">
                                    <h2>{numerBag[0].name}</h2>
                                    <p className='content-left'>The lengend developer Hideo Kojima release a new ionics game for the gerne. Sam Bridges must dare to overcome the world transfromed by the Loop of death</p>
                                    <div className="modal-genres">
                                        <h4>GENRES: </h4>
                                        <button>Adeventure</button>
                                        <button>Action</button>
                                        <button>Open World</button>
                                    </div>
                                    <div className="modal-platform">
                                        <h4>PLATFROMS: </h4>
                                        <FontAwesomeIcon className='modal-icon' icon={faXbox} />
                                        <FontAwesomeIcon className='modal-icon' icon={faPlaystation} />
                                        <FontAwesomeIcon className='modal-icon' icon={faWindows} />
                                    </div>
                                    <div className="modal-money">
                                        <div className="modal-money-container">
                                            <p className='money-new'>{numerBag[0].money_new}</p>
                                            <p className='money-old'>{numerBag[0].money_old}</p>
                                        </div>
                                        <div className="money-discord">
                                            <p>-{numerBag[0].discord}</p>
                                        </div>
                                    </div>
                                    <button className='btn-modal-add' onClick={()=>{
                                        addandroveItem(numerBag[0])
                                        handelHideModal(true)
                                        }}><FontAwesomeIcon icon={faBagShopping} className="icon-bag-modal" /> Add to shopping card</button>
                                </div>
                                <div className="modal-content-right">
                                    <img src={numerBag[0].image}  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalItem