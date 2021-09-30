import { getSizeImage } from '@/utils/format-utils'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { TopRanWrapper } from './style'
import { getPlayerList } from '@/pages/player/store'
export default memo(function TopRanking(props) {
  const { info } = props
  const { tracks = [] } = info
  const dispatch = useDispatch()
  return (
    <TopRanWrapper>
      <div className="TopImg">
        <div className="ImgRanking">
          <img src={getSizeImage(info.coverImgUrl, 100)} alt="" />
          <a href="#/" title={info.name}>
            1
          </a>
        </div>
        <div className="RanAlt">
          <a href="#/" className="AltTilte" title={info.name}>
            {info.name}
          </a>
          <p>
            <a href="#/" className="PlayIng alike">
              1
            </a>
            <a href="#/" className="Adds alike">
              2
            </a>
          </p>
        </div>
      </div>
      <div className="Toplist">
        <ul>
          {tracks.slice(0, 10).map((item, index) => {
            return (
              <li key={item.id}>
                <div className="headline">
                  <span className="Num">
                    {index + 1}
                  </span>
                </div>
                <div className="rank">
                  <a href="#/" title={item.name}>
                    {item.name}
                  </a>
                  <div className="Btn">
                    <button onClick={e => dispatch(getPlayerList(item.id))}></button>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <p className="CheckAll">
        <a href="#/">查看全部{'>'}</a>
      </p>
    </TopRanWrapper>
  )
})
