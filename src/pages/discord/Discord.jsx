import React from 'react'

import DiscordMain from './discordMain/DiscordMain'
import HeaderDiscord from '..//discord/discordheader/DiscordHeader'
import DiscordReliable from './discordReliable/DiscordReliable'
const Discord = () => {
  return (
    <div>
      <HeaderDiscord/>
      <DiscordMain/>
      <DiscordReliable/>
    </div>
  )
}

export default Discord