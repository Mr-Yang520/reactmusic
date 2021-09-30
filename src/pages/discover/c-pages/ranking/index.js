import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'
import TopRanking from './c-cpns/top-ranking'
import { getTopListAction } from './store/action'
import { RankingLeft, RankingRight, RanKingWrapper } from './style'

export default memo(function Ranking() {
  // const [loading, setloading] = useState(true)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const dispatch = useDispatch()
  const { Loading } = useSelector(
    (state) => ({
      Loading: state.getIn(['ranking', 'Loading']),
    }),
    shallowEqual,
  )
  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])
  return (
    <RanKingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <Spin indicator={antIcon} spinning={Loading}>
          <RankingHeader />
          <RankingList />
        </Spin>
      </RankingRight>
    </RanKingWrapper>
  )
})
