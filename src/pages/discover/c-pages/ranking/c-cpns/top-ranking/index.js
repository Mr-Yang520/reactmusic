import { getSizeImage } from '@/utils/format-utils'
import classNames from 'classnames'
import React, { memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  changeCurrentIndexAction,
  changeLoadingAction,
  getRankListAction
} from '../../store/action'
import { TopRankingWrapper } from './style'

export default memo(function TopRanking() {
  // const [currentIndex, setIndex] = useState(0)
  const { topList, CurrentIndex } = useSelector(
    (state) => ({
      topList: state.getIn(['ranking', 'topList']),
      CurrentIndex: state.getIn(['ranking', 'CurrentIndex']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    const Ids = topList[CurrentIndex] && topList[CurrentIndex].id
    if (!Ids) return
    dispatch(getRankListAction(Ids))
  }, [dispatch, topList, CurrentIndex])

  const ChangeIndex = useCallback(
    (id, index) => {
      window.scrollTo(0, 0)
      dispatch(getRankListAction(id))
      dispatch(changeLoadingAction(true))
      dispatch(changeCurrentIndexAction(index))
    },
    [dispatch],
  )

  const ChangeTitle = (index) => {
    if (index === 0 || index === 4) {
      return index === 0 ? (
        <div className="rankTitle">云音乐特色榜</div>
      ) : (
        <div className="rankTitle">全球媒体榜</div>
      )
    }
  }
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        return (
          <div key={item.id}>
            <div
              className="Monthly"
              onClick={(e) => ChangeIndex(item.id, index)}
            >
              {ChangeTitle(index)}
              <div className="RankContent">
                <div
                  className={classNames('ranklist', {
                    active: CurrentIndex === index,
                  })}
                >
                  <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                  <div className="info">
                    <p>{item.name}</p>
                    <p>{item.updateFrequency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
