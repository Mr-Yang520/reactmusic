import SongCover from '@/components/songs-cover'
import ThemeHeader from '@/components/theme-header-rcm'
import React, { Fragment, memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/action'
import { HotRecommendWrapper } from './style'

const HotRecommend = memo(function () {
  const { ListData = [] } = useSelector(
    (state) => ({
      // ListData: state.recommend.hotRecommend,
      ListData: state.getIn(['recommend', 'hotRecommend']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      {/* 热门推荐 */}
      <ThemeHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className="recommend_list">
        {ListData.map((item) => {
          return (
            <Fragment key={item.id}>
              <SongCover Cover={item} />
            </Fragment>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
})
export default HotRecommend
