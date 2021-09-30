import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import SongsHeader from './c-cps/songs-header'
import SongsList from './c-cps/songs-list'
import { ChangeSongsGategoryFlag } from './store/actions'
import { SongsWrap, SongWrapper } from './style'


export default memo(function Song() {
  const dispatch = useDispatch()
  const ClickClose = () => {
    dispatch(ChangeSongsGategoryFlag(false))
  }
  return (
    <SongWrapper onClick={ClickClose}>
      <SongsWrap className="wrap-v2">
        <SongsHeader />
        <SongsList />
      </SongsWrap>
    </SongWrapper>
  )
})
