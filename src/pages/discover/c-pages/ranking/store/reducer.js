import { Map } from 'immutable'
import * as actionTypes from './constance'

const InitData = Map({
  topList: [],
  playList: [],
  CurrentIndex: 0,
  Loading: true,
})

export default function Reducer(state = InitData, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('topList', action.topList)
    case actionTypes.CHANGE_RAN_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_CURRENTINDEX:
      return state.set('CurrentIndex', action.CurrentIndex)
    case actionTypes.CHNAGE_LOADING:
      return state.set('Loading', action.Loading)
    default:
      return state
  }
}
