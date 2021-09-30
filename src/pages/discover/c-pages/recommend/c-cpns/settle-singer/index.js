import { hotRadios } from '@/common/local-data'
import { getSizeImage } from '@/utils/format-utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getArtistListAction } from '../../store/action'
import { AnchorWrapper, SettledWrapper, SingerWrapper } from './style'
export default memo(function SettleSinger() {
  const { artistList } = useSelector(
    (state) => ({
      artistList: state.getIn(['recommend', 'artistList']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtistListAction(5, 5001))
  }, [dispatch])
  console.log()
  return (
    <SingerWrapper>
      <SettledWrapper>
        <div className="Settled">
          <span>入驻歌手</span>
          <a href="#/">查看全部{'>'}</a>
        </div>
        {artistList.map((item) => {
          return (
            <a href="#/" className="SingerEnter" key={item.id}>
              <div className="singer">
                <img src={getSizeImage(item.picUrl, 62)} alt="" />
                <div className="user">
                  <h4>{item.alias.join('') || item.name}</h4>
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
          )
        })}
        <div className="Applyfor">
          <a href="#/">
            <i>申请成为网易音乐人</i>
          </a>
        </div>
      </SettledWrapper>
      <AnchorWrapper>
        <div className="Settled">
          <span>热门主播</span>
        </div>
        {hotRadios.map((item) => {
          return (
            <div className="User" key={item.picUrl}>
              <a href="#/">
                <img
                  src={getSizeImage(item.picUrl,40)}
                  alt=""
                />
              </a>
              <div className="Info">
                <h4>
                  <a href="#/">{item.name}</a>
                </h4>
                <p>{item.position}</p>
              </div>
            </div>
          )
        })}
      </AnchorWrapper>
    </SingerWrapper>
  )
})
