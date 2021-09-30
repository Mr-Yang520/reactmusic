import { getSizeImage } from '@/utils/format-utils'
import React, { memo } from 'react'
import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {
  const {info,width = 153,size = 130,bgp = "-845px"} = props
  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
       <div className="CoverImg">
          <div className="Img">
            <img src={getSizeImage(info.picUrl,size)} alt="" />
            <a href="#/" className="Vinyl" title={info.name}>1</a>
            <a href="#/" className="Playing" title={info.name}>1</a>
          </div>
          <p className="Better">
              <a href="#/">{info.name}</a>
          </p>
          <p>
              <a href="#/">{info.artist.name}</a>
          </p>
       </div>
    </AlbumCoverWrapper>
  )
})
