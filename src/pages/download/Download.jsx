import React from 'react'

import HeaderDownload from './headerDownload/HeaderDownload'
import MainDownload from './mainDownload/MainDownload'
import './Download.scss'
const Download = () => {
  return (
    <div className='download-main-container'>
      <HeaderDownload/>
      <MainDownload/>
    </div>
  )
}

export default Download