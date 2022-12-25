import React from 'react'

import './HeaderNitro.scss'
import vNitro from '../video/nitro.mp4'
import nitromini from '../img/nitromini.png'
import nitro1 from '../img/nitro1.svg'
import Button from '../../../components/button/Button'
const HeaderNitro = () => {
    return (
        <div className='header-nitro'>
            <video src={vNitro} loop autoPlay muted></video>
            <div className="nitro-container">
                <div className="nitro-left">
                    <div className='img-double-nitro'>
                        <img src={nitromini} alt="" className='img-nitromini'/>
                        <img src={nitro1} alt="" className='img-nitro'/>
                    </div>
                    <p>Get an enhanced Discord experience for one low monthly cost. <br /> Upgrade your emoji, enjoy bigger file uploads, stand out in your <br /> favorite Discords, and more.</p>
                    <div className="btn-nitro">
                        <Button big >$99.99 per year <span className='discord-nitro'>16% off</span></Button>
                        <Button big >$9.99 per month</Button>
                    </div>
                </div>
                <div className="nitro-right">
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderNitro