import React from 'react'
import './DiscordReliable.scss'

import img4 from './img/img4.svg'
import img5 from './img/img5.svg'
import Button from '../../../components/button/Button'

const DiscordReliable = () => {
  return (
    <div className='discord-reliable'>
        <div className="discord-container">
            <div className="discord-header">
                <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br />
                    games, or gather up and have a drawing session with screen share.</p>
            </div>
            <div className="discord-img">
                <img src={img4} alt=""/>
            </div>
            <div className="discord-more">
                <div className="more-header">
                    <img src={img5} alt="" className='img-more-header'/>
                    <h1>Ready to start your journey?</h1>
                </div>
                <Button big blue>Download for Windows</Button>
            </div>
        </div>
    </div>
  )
}

export default DiscordReliable