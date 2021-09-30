import { getRankingList, getTopList } from '@/services/ranking'
import * as actionTypes from './constance'

export const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list,
})
export const changeRankingListAction = (res) => ({
  type: actionTypes.CHANGE_RAN_LIST,
  playList: res.playlist,
})

export const changeCurrentIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENTINDEX,
  CurrentIndex:index
})

export const changeLoadingAction = (flag) => ({
  type: actionTypes.CHNAGE_LOADING,
  Loading: flag,
})

export const getTopListAction = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res))
    })
  }
}

export const getRankListAction = (id) => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      if (res) {
        setTimeout(() => {
          dispatch(changeLoadingAction(false))
        }, 300)
      }
      dispatch(changeRankingListAction(res))
    })
  }
}
