import React from 'react'
import './MainDownload.scss'

import Button from '../../../components/button/Button'
import dow2 from '../img/dow2.svg'
import dow3 from '../img/dow3.svg'
import dow4 from '../img/dow4.svg'
import dow5 from '../img/dow5.svg'
const MainDownload = () => {
  return (
    <div className='main-download'>
        <div className="main-container">
            <div className="main-left">
                <div className="main-content">
                    <h4>iOS</h4>
                    <div><Button normal>Download</Button></div>
                    <img src={dow2} alt="" />
                </div>
                <div className="main-content">
                    <h4>Linux</h4>
                    <div><Button normal>Download</Button></div>
                    <img src={dow4} alt="" />
                </div>
            </div>
            <div className="main-right">
                <div className='main-space'></div>
                <div className="main-content">
                    <h4>Android</h4>
                    <div><Button normal>Download</Button></div>
                    <img src={dow3} alt="" />
                </div>
                <div className="main-content">
                    <h4>Mac</h4>
                    <div><Button normal>Download</Button></div>
                    <img src={dow5} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainDownload