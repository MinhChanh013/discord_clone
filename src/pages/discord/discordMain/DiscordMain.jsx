import React from 'react'
import DiscordContainer from './discordContainer/DiscordContainer'

import './DiscordMain.scss'
import img1 from "./img-main/main-1.svg"
import img2 from "./img-main/main-2.svg"
import img3 from "./img-main/main-3.svg"
const DiscordMain = (
  imgLeft,
  contentLeft,
  left,
) => {
  const main1 = {
    imgLeft,
    left,
    contentLeft,
    src : img1,
    content : {
      h1 : "Create an invite-only place where you belong",
      p : "Discord servers are organized into topic -based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
    }
  }
  const main2 = {
    src : img2,
    content : {
      h1 : "Where hanging out is easy",
      p : "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
    }
  }
  const main3 = {
    imgLeft,
    contentLeft,
    left,
    src : img3,
    content : {
      h1 : "From few to a fandom",
      p : "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.."
    }
  }
  return (
    <div className='discord-main-container'>
      <DiscordContainer props={main1}/>
      <DiscordContainer props={main2}/>
      <DiscordContainer props={main3}/>
    </div>
  )
}

export default DiscordMain