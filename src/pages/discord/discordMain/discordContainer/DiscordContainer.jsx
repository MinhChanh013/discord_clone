import React from 'react'

import './DiscordContainer.scss'
const DiscordContainer = ({ props }) => {
  const content = props.content
  return (
    <div className='discordContainer'>
      <div className={!!props.imgLeft ? "left-discordContainer-main" : "right-discordContainer-main"}>
        <div className='left-discordContainer'>
          {!!props.imgLeft ?
            <div className="img-main">
              <img src={props.src} alt="" className='img-main-discord' />
            </div>
            :
            <div className="content-main">
              <h2>{content.h1}</h2>
              <p>{content.p}</p>
            </div>
          }
        </div>
        <div className="right-discordContainer">
          {!!props.contentLeft ?
            <div className="content-main">
              <h2>{content.h1}</h2>
              <p>{content.p}</p>
            </div>
            :
            <div className="img-main">
              <img src={props.src} alt="" className='img-main-discord' />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default DiscordContainer