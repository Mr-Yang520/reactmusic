import React, { memo } from 'react'
import { HeaderSongWrapper } from './style'

export default memo(function HeaderSong(props) {
  const {trackcount,playCount} = props
  return (
    <HeaderSongWrapper>
      <div className="songTilte">
        <h3>歌曲列表</h3>
        <span>{trackcount}首歌</span>
      </div>
      <div className="PlayNum">
        <span>播放：</span>
        <span>
          <i>{playCount}</i>次
        </span>
      </div>
    </HeaderSongWrapper>
  )
})
