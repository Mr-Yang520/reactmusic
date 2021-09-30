import { getCount, getSizeImage } from '@/utils/format-utils'
import React, { memo } from 'react'
import { HotClass } from './style'

export default memo(function SongCover(props) {
  const { Cover } = props
  return (
    <HotClass>
      <div className="Nominate">
        <div className="Hot">
          <div className="Content">
            <div className="m-cover">
              <img
                src={getSizeImage(Cover.picUrl || Cover.coverImgUrl, 140)}
                alt=""
              />
              <a href="#/" className="mask" title={Cover.name}>
                1
              </a>
              <div className="buttom">
                <div className="hear">
                  <span className="hearIcon"></span>
                  <span className="palyNum">{getCount(Cover.playCount)}</span>
                </div>
                <div className="PlayIng"></div>
              </div>
            </div>
            <p className="TilteLInk">
              <a href="#/" title={Cover.name}>
                {Cover.name}
              </a>
            </p>
            {
              (Cover.creator && Cover.creator.avatarDetail) && (
                <p className="cover-source">
                  <i>by</i>
                  <a href="#/" title={Cover.creator.nickname}>{Cover.creator.nickname}</a>
                  <img src={Cover.creator.avatarDetail.identityIconUrl} alt="" />
                </p>
              )
            }

          </div>
        </div>
      </div>
    </HotClass>
  )
})
