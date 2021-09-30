import AlbumCover from '@/components/album-cover'
import ThemeHeader from '@/components/theme-header-rcm'
import { Carousel } from 'antd'
import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAlbumCoverAction } from '../../store/action'
import { AlbumWrapper } from './style'

export default memo(function NewAlbum() {
  const { AlbumData } = useSelector(
    (state) => ({
    //   AlbumData: state.recommend.albumCover,
      AlbumData: state.getIn(['recommend','albumCover']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  const BannerRef = useRef()
  useEffect(() => {
    dispatch(getAlbumCoverAction(10))
  }, [dispatch])
  const PrevHandel = () => {
    BannerRef.current.prev()
  }
  const NextHandel = () => {
    BannerRef.current.next()
  }
  return (
    <AlbumWrapper>
      <ThemeHeader title="新碟上线"></ThemeHeader>
      <div className="albumBorder">
        <div className="album">
          <Carousel ref={BannerRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div className="contentStyle" key={item}>
                  <div className="CoverWrapper">
                    {AlbumData.slice(item * 5, (item + 1) * 5).map((item) => {
                      return (
                        <AlbumCover
                          key={item.id}
                          info={item}
                          size={100} 
                          width={118}
                          bgp="-570px"
                        ></AlbumCover>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
          <div className="FollowBtn">
            <span className="prev" onClick={(e) => PrevHandel()}></span>
            <span className="next" onClick={(e) => NextHandel()}></span>
          </div>
        </div>
      </div>
    </AlbumWrapper>
  )
})
