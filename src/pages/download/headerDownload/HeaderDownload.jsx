import React from 'react'
import Button from '../../../components/button/Button'
import dow1 from '../../../pages/download/img/dow1.svg'

import './headerDownload.scss'
const headerDownload = () => {
    return (
        <div className='download-container'>
            <div className="header-download">
                <div className="header-left">
                    <h1>GET DISCORD FOR ANY DEVICE</h1>
                    <p>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
                    <div className="btn-header">
                        <Button big blue>Download for Windows</Button>
                        <span>Windows 7 or higher</span>
                    </div>
                </div>
                <div className="header-right">
                    <img src={`https://discord-clone-404c2.firebaseapp.com${dow1}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default headerDownload