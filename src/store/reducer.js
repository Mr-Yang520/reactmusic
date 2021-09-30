

import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/store'
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as songsReducer } from '@/pages/discover/c-pages/songs/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  player: playerReducer
})
