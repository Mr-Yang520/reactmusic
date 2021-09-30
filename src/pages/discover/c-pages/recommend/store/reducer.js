import { Map } from 'immutable'
import * as styleTypes from './constance'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  albumCover: [],

  upList: [],
  newList: [],
  orinList: [],
  artistList:[]
})

export default function Reducer(state = defaultState, action){
  switch (action.type) {
    case styleTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', action.banners)
    case styleTypes.CHNAGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommends)
    case styleTypes.CHANGE_ALBUM_COVER:
      return state.set('albumCover', action.albumCover)
    case styleTypes.CHNAGE_UP_LIST:
      return state.set('upList', action.upList)
    case styleTypes.CHANGE_NEW_LIST:
      return state.set('newList', action.newList)
    case styleTypes.CHANGE_ORING_LIST:
      return state.set('orinList', action.orinList)
    case styleTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList',action.artistList)
    default:
      return state
  }
}


