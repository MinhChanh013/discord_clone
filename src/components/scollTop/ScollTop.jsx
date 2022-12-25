import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './ScollTop.scss'
const ScollTop = () => {
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='scroll-container' onClick={() => { topFunction() }}>
            <FontAwesomeIcon icon={faArrowUp} className="icon-scroll" />
        </div>
    )
}

export default ScollTop