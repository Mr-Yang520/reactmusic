import ThemeHeader from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/action'
import { RankingWrapper } from './style'

export default memo(function RcRanking() {
  const { upList, newList, orinList } = useSelector(
    (state) => ({
      upList: state.getIn(['recommend', 'upList']),
      newList: state.getIn(['recommend', 'newList']),
      orinList: state.getIn(['recommend', 'orinList']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(1))
    dispatch(getTopListAction(2))
  }, [dispatch])
  return (
    <RankingWrapper>
      <ThemeHeader title="榜单"></ThemeHeader>
      <div className="RankingWrap">
        <TopRanking info={upList}></TopRanking>
        <TopRanking info={newList}></TopRanking>
        <TopRanking info={orinList}></TopRanking>
      </div>
    </RankingWrapper>
  )
})
