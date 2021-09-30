import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'
import { Slider } from 'antd';
import { getPlayerList, changesequence, changePlaySongIndexAction } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils'

export default memo(function PlayerBar() {
  const { songDetail, sequence } = useSelector(state => ({
    songDetail: state.getIn(['player', 'songDetail']),
    sequence: state.getIn(['player', 'sequence']),
  }))

  const [currentTime, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [chaningFlag, setChaning] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()
  const duration = songDetail.dt || 0
  const dispatch = useDispatch()

  const playMusic = useCallback(() => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  }, [isPlaying]);

  const playChange = (tag) => {
    dispatch(changePlaySongIndexAction(tag))
  }

  useEffect(() => {
    dispatch(getPlayerList(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(songDetail.id);

    console.log(songDetail);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [songDetail])

  const TimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!chaningFlag) {
      setTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }
  }
  const sliderChange = useCallback((value) => {
    const currentTime = value / 100 * duration;
    setChaning(true)
    setProgress(value)
    setTime(currentTime)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    setChaning(false)
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  const handelsequence = () => {
    let currentsequence = sequence + 1;
    if (currentsequence > 2) {
      currentsequence = 0
    }
    dispatch(changesequence(currentsequence))
  }

  const MusicEnd = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    } else {
      dispatch(changePlaySongIndexAction(1))
    }
  }


  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control >
          <button className="sprite_player prev" onClick={e => playChange(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => playChange(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            {
              songDetail.al && (<img src={getSizeImage(songDetail.al.picUrl, 34)} alt="" />)
            }
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songDetail.name}</span>
              {
                songDetail.ar && <a href="#/" className="singer-name">{songDetail.ar[0].name}</a>
              }
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={handelsequence}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={TimeUpdate} onEnded={MusicEnd}></audio>
    </PlayerBarWrapper>
  )
})
