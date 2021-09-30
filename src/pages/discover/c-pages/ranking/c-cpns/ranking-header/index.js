import SongsBar from '@/components/song-operation-bar'
import { formatMonthDay, getSizeImage } from '@/utils/format-utils'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RankHeaderWrapper } from './style'
export default memo(function RankHeader() {
  const { playList } = useSelector((state) => ({
    playList:state.getIn(['ranking','playList'])
  }),shallowEqual)
  return (
    <RankHeaderWrapper>
      <div className="rankImg">
        <img
          src={getSizeImage(playList.coverImgUrl,150)}
          alt=""
        />
        <span className="mask"></span>
      </div>
      <div className="info">
        <h4>{playList.name}</h4>
        <div className="upData">
          <s></s>
          <span>最近更新：{formatMonthDay(playList.updateTime)}</span>
          <i>（刚刚更新）</i>
        </div>
        <SongsBar favor={playList.subscribedCount}
                  share={playList.shareCount}
                  down="下载"
                  comment={playList.commentCount}/>
      </div>
    </RankHeaderWrapper>
  )
})
