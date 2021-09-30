import * as styleTypes from './constants'
import { getSongDetail, getLyric } from '@/services/player'
import {parseLyric} from '@/utils/lyric-utils'

const changePlayerDetailAction = (songDetail) => ({
  type: styleTypes.PLAYER_SONGS,
  songDetail
})

const changePlaySongList = (playList) => ({
  type: styleTypes.CHNAGE_SONGS_LIST,
  playList
})

const changePlayLyric = (lyricList) => ({
  type: styleTypes.CHNAGE_SONG_LYRIC,
  lyricList
})

export const changePlaySongIndex = (index) => ({
  type: styleTypes.CHAGE_SONGS_INDEX,
  index
})

export const changesequence = (sequence) => ({
  type: styleTypes.CHNAGE_SEQUENCE,
  sequence
})


export const changePlaySongIndexAction = (tag) => {
  return (dispatch, getState) => {
    const Playlist = getState().getIn(['player', 'playList']);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentIndex = getState().getIn(['player', 'playIndex']);;

    switch (sequence) {
      case 1://随机播放 
        let RandomIndex = Math.floor(Math.random() * Playlist.length)
        if (currentIndex === RandomIndex) {
          RandomIndex = Math.floor(Math.random() * Playlist.length)
        }
        currentIndex = RandomIndex
        break;
      default://顺序播放
        currentIndex += tag
        if (currentIndex >= Playlist.length) currentIndex = 0
        if (currentIndex < 0) currentIndex = Playlist.length - 1
    }
    dispatch(changePlaySongIndex(currentIndex))
    dispatch(changePlayerDetailAction(Playlist[currentIndex]))
    dispatch(getSongLyricAction(Playlist[currentIndex].id))
  }
}

export const getPlayerList = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList']);
    const playIndex = playList.findIndex(item => item.id === ids)
    if (playIndex !== -1) {
      console.log(playList[playIndex]);
      dispatch(changePlaySongIndex(playIndex));
      dispatch(changePlayerDetailAction(playList[playIndex]))
      dispatch(getSongLyricAction(playList[playIndex].id))
    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0]
        const newPlayList = [...playList, song];
        console.log(newPlayList);
        dispatch(changePlaySongList(newPlayList))
        dispatch(changePlaySongIndex(newPlayList.length - 1));
        dispatch(changePlayerDetailAction(song))
        dispatch(getSongLyricAction(song.id))
      })
    }
  }
}

export const getSongLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyriclist = res.lrc.lyric
      dispatch(changePlayLyric(parseLyric(lyriclist)))
    })
  }
}