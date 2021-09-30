import { Map } from 'immutable'
import * as styleTypes from './constants'

const initState = Map({
  songList: [],
  CateoryFlag: false,
  songCategroy: [],
  CurrentIndex: 1,
  CatName: '',
})

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case styleTypes.CHANGE_SONG_CATEGROY:
      return state.set('songCategroy', action.songCategroy)
    case styleTypes.CHANGE_SONG_LIST:
      return state.set('songList', action.songList)
    case styleTypes.CHNAGE_CATEGORY:
      return state.set('CateoryFlag', action.CateoryFlag)
    case styleTypes.CHNAGE_CURRENTINDEX:
      return state.set('CurrentIndex', action.CurrentIndex)
    case styleTypes.CHNAGE_SONG_CAT:
      return state.set('CatName', action.CatName)
    default:
      return state
  }
}
