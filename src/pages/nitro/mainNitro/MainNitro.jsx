import React from 'react'
import Button from '../../../components/button/Button'
import nitro2 from "../img/nitro2.svg"
import nitro3 from "../img/nitro3.svg"
import nitro4 from "../img/nitro4.svg"
import nitro5 from "../img/nitro5.svg"
import nitro6 from "../img/nitro6.png"
import nitro7 from "../img/nitro7.png"

import './MainNitro.scss'
const MainNitro = () => {
    return (
        <div className='main-nitro'>
            <div className="main-nitro-container">
                <div className="main-dead">
                    <h2>DISCORD NITRO ENHANCES YOUR ALL-IN <br /> -ONE DISCORD VOICE, VIDEO, AND TEXT CHAT.</h2>
                    <p>Check out the perks you'll get.</p>
                </div>
                <div className='nitro-slide'>
                    <div className="main-nitro-content">
                        <div className="main-slide">
                            <h4>Better Emoji</h4>
                            <p>Collect or make your own custom and <br /> animated emojis.</p>
                            <img src={nitro2} alt="" />
                        </div>
                        <div className="main-slide">
                            <h4>Personal Profile</h4>
                            <p>Use an animated avatar and claim a <br /> custom tag.</p>
                            <img src={nitro3} alt="" />
                        </div>
                        <div className="main-slide">
                            <h4>Support a Server</h4>
                            <p>Get 2 Server Boosts and 30% off extra Boosts.</p>
                            <img src={nitro4} alt="" />
                        </div>
                        <div className="main-slide">
                            <h4>Rep Your Support</h4>
                            <p>Profile badge shows how long you've <br /> supported Discord.</p>
                            <img src={nitro5} alt="" />
                        </div>
                        <div className="main-slide">
                            <h4>Bigger Uploads</h4>
                            <p>100MB upload size for high-quality file sharing.</p>
                            <img src={nitro6} alt="" />
                        </div>
                        <div className="main-slide">
                            <h4>HD Video</h4>
                            <p>Hi-res video, screenshare, and Go <br /> Live streaming.</p>
                            <img src={nitro7} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main-foot">
                    <h3>Doitdoitdoitdoitdoitdoit</h3>
                    <div className="btn-nitro">
                        <Button big >$99.99 per year <span className='discord-nitro'>16% off</span></Button>
                        <Button big >$9.99 per month</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNitro