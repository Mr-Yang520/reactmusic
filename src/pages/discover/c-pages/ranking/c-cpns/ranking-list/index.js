import ThemeHeaderSong from '@/components/theme-header-song'
import { formatMinuteSecond, getSizeImage } from '@/utils/format-utils'
import React, { Fragment, memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RankingListWrapper } from './style'

export default memo(function RankingList() {
  const state = useSelector(
    (state) => ({
      playList: state.getIn(['ranking', 'playList']),
    }),
    shallowEqual,
  )
  const tracks = state.playList.tracks || []
  return (
    <RankingListWrapper>
      <ThemeHeaderSong
        trackcount={tracks.trackCount}
        playCount={tracks.playCount}
      />
      <div className="listTable">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">
                <div className="wp">标题</div>
              </th>
              <th className="duration">
                <div className="wp">时长</div>
              </th>
              <th className="singer">
                <div className="wp">歌手</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rankNum">
                      <span className="num">{index + 1}</span>
                      <div className="icon">
                        <span className="uicon"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="songName">
                      {index < 3 ? (
                        <a href="#/" className="songImg">
                          <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                        </a>
                      ) : null}
                      <span className="playIcon"></span>
                      <div className="txt">
                        <a href="#/">{item.name}</a>
                        <span className="other">
                          {item.alia && item.alia[0]}
                        </span>
                        {item.mv ? <span className="mv"></span> : null}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="songTime">
                      <span className="timer">
                        {formatMinuteSecond(item.dt)}
                      </span>
                      <div className="billof">
                        <span className="add"></span>
                        <span className="collect"></span>
                        <span className="share"></span>
                        <span className="down"></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="singerName">
                      {item.ar.map((itm,index) => {
                        return (
                          <Fragment key={itm.id + index}>
                            <a href="#/">{itm.name}</a>
                          </Fragment>
                        )
                      })}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
