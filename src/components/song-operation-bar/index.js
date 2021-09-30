import React, { memo } from 'react'
import { SongsBarWrapper } from './style'

export default memo(function SongsBar(props) {
  const {favor,share,down,comment} = props
  return (
    <SongsBarWrapper>
      <span className="play">
        <a href="/abc" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button">
          +
        </a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favor}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{share}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{down}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{comment}</i>
      </a>
    </SongsBarWrapper>
  )
})
