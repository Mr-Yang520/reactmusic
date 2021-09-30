import { getSongCategory, getSongsList } from '@/services/songs'
import { handleSongsCategory } from '@/utils/handle-data'
import * as styleTypes from './constants'

export const ChangeSongsGategoryFlag = (flag) => ({
  type: styleTypes.CHNAGE_CATEGORY,
  CateoryFlag: flag,
})

export const changeSongCategroy = (res) => ({
  type: styleTypes.CHANGE_SONG_CATEGROY,
  songCategroy: res,
})

export const changeSongList = (res) => ({
  type: styleTypes.CHANGE_SONG_LIST,
  songList: res,
})

export const changeCurrentIndex = (page) => ({
  type: styleTypes.CHNAGE_CURRENTINDEX,
  CurrentIndex: page,
})

export const changeSongCat = (cat) => ({
  type: styleTypes.CHNAGE_SONG_CAT,
  CatName: cat,
})

export const getSongCategroy = () => {
  return (dispatch) => {
    getSongCategory().then((res) => {
      const handelData = handleSongsCategory(res)
      dispatch(changeSongCategroy(handelData))
    })
  }
}

export const getSongListAction = (cat, page) => {
  return (dispatch) => {
    getSongsList(cat, page * styleTypes.PAGE_COUNT).then((res) => {
      dispatch(changeSongList(res))
    })
  }
}
