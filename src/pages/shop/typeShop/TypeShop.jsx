import React, { useState, useEffect } from 'react'
import './TypeShop.scss'

import data from '../../../assets/data'
import CardType from './cardType/CardType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faXmark } from '@fortawesome/free-solid-svg-icons'
const TypeShop = () => {
    const [typeGame, setTypeGame] = useState('all')
    const [dataTam, setDataTam] = useState([{}])
    const [hideType, setHideType] = useState(true)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    
    const handelSetType = (type) => {
        setDataTam(data.all.filter(function (item) {
            return item.type === type
        }))
    }

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
        if (windowSize.innerWidth >= 760)
            setHideType(true)
    }, [windowSize])
    return (
        <div>
            <div className='typeShop'>
                <div className="tyShop-container">
                    <div className={`menu-type ${hideType === true ? "" : "active"}`}>
                        <FontAwesomeIcon icon={faSliders} className={`icon-slider-type ${hideType === true ? "" : "hide"}`} onClick={() => { setHideType(false) }} />
                        <button className={`btn-typeGame ${typeGame === "all" ? "active" : ""} ${hideType === true ? "hide" : "nothide"} `} onClick={() => {
                            setTypeGame("all")
                            handelSetType("all")
                            setHideType(true)
                        }}>All Games</button>
                        <button className={`btn-typeGame ${typeGame === "pc" ? "active" : ""} ${hideType === true ? "hide" : "nothide"} `} onClick={() => {
                            setTypeGame("pc")
                            handelSetType("PC")
                            setHideType(true)
                        }}>Game Pc</button>
                        <button className={`btn-typeGame ${typeGame === "vr" ? "active" : ""} ${hideType === true ? "hide" : "nothide"} `} onClick={() => {
                            setTypeGame("vr")
                            handelSetType("VR")
                            setHideType(true)
                        }}>Game Vr</button>
                        <button className={`btn-typeGame ${typeGame === "sq" ? "active" : ""} ${hideType === true ? "hide" : "nothide"} `} onClick={() => {
                            setTypeGame("sq")
                            handelSetType("Software")
                            setHideType(true)
                        }}>Sofware</button>
                        <FontAwesomeIcon icon={faXmark} className={`time-type ${hideType === true ? "hide" : ""}`} onClick={() => { setHideType(true) }} />
                    </div>

                </div>
            </div>
            <div className="type-game">
                <div className='cardGame'>
                    {typeGame === "all"
                        ?
                        data.all.map((item, i) => {
                            return (
                                <CardType key={i} item={item} />
                            )
                        })
                        :
                        dataTam.map((item, i) => (
                            <CardType key={i} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TypeShop