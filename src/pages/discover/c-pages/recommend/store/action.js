import {
  getAlbumCover, getArtistList, getHotRecommend,
  getTopBanners,
  getTopList
} from '@/services/recommend'
import * as styleTypes from './constance'

export const changeTopBannerAction = (res) => ({
  type: styleTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
})

export const changeHotRecommend = (res) => ({
  type: styleTypes.CHNAGE_HOT_RECOMMEND,
  hotRecommends: res.result,
})

export const changeAlbumCover = (res) => ({
  type: styleTypes.CHANGE_ALBUM_COVER,
  albumCover: res.albums,
})

export const changeUpList = (res) => ({
  type: styleTypes.CHNAGE_UP_LIST,
  upList: res.playlist,
})

export const changeNewList = (res) => ({
  type: styleTypes.CHANGE_NEW_LIST,
  newList: res.playlist,
})

export const changeOringList = (res) => ({
  type: styleTypes.CHANGE_ORING_LIST,
  orinList: res.playlist,
})

export const changeArtistList = (res) => ({
  type: styleTypes.CHANGE_ARTIST_LIST,
  artistList: res.artists,
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommend(res))
    })
  }
}

export const getAlbumCoverAction = (limit) => {
  return (dispatch) => {
    getAlbumCover(limit).then((res) => {
      dispatch(changeAlbumCover(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpList(res))
          break
        case 1:
          dispatch(changeNewList(res))
          break
        case 2:
          dispatch(changeOringList(res))
          break
        default:
      }
    })
  }
}

export const getArtistListAction = (limit, cat) => {
  return (dispatch) => {
    getArtistList(limit, cat).then((res) => {
      dispatch(changeArtistList(res))
    })
  }
}
