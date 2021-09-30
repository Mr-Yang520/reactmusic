import { Carousel } from 'antd'
import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/action'
import { BannerItem, TopBannerWarrper } from './style'

export default memo(function TopBanner() {
  const [Bannerlist, setBanner] = useState([])
  const { topBanner } = useSelector(
    (state) => ({
      // topBanner: state.recommend.topBanners,
      topBanner: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual,
  )

  const [BannerIndex, setBannerIndex] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  useEffect(() => {
    const newBanner = topBanner.map((item) => {
      return item.imageUrl + '?imageView&blur=40x20'
    })
    setBanner(newBanner)
  }, [topBanner])

  const BannerRef = useRef()

  const PrevHandel = () => {
    BannerRef.current.prev()
  }
  const NextHandel = () => {
    BannerRef.current.next()
  }
  const onChange = useCallback((from, to) => {
    setTimeout(() => {
      setBannerIndex(to)
    }, 0)
  }, [])

  const bgImage = Bannerlist[BannerIndex] && Bannerlist[BannerIndex]
  return (
    <TopBannerWarrper bgImage={bgImage}>
      <div className="bannerImg">
        <BannerItem className="wrap-v2">
          <Carousel
            ref={BannerRef}
            effect="fade"
            easing="ease"
            autoplay
            lazyLoad="progressive"
            beforeChange={onChange}
          >
            {topBanner.map((item, index) => {
              return (
                <Fragment key={item.encodeId}>
                  <div className="contentStyle">
                    <img src={item.imageUrl} alt="" />
                  </div>
                </Fragment>
              )
            })}
          </Carousel>
          <div className="download">
            <a href="#/">2</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
          <div className="FollowBtn">
            <span className="prev" onClick={(e) => PrevHandel()}></span>
            <span className="next" onClick={(e) => NextHandel()}></span>
          </div>
        </BannerItem>
      </div>
    </TopBannerWarrper>
  )
})
