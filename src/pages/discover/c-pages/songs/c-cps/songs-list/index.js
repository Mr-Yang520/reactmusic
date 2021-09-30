import Pagination from '@/components/Pagination'
import SongsCover from '@/components/songs-cover'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentIndex, getSongListAction } from '../../store/actions'
import { PageWrapper, SongListWrapper } from './style'

export default memo(function SongsList() {
  const { songList, CurrentIndex } = useSelector((state) => ({
    songList: state.getIn(['songs', 'songList']),
    CurrentIndex: state.getIn(['songs', 'CurrentIndex']),
  }))
  const playlists = songList.playlists || []
  const total = songList.total || 0

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongListAction('全部', 0))
  }, [dispatch])

  const onPageChange = (page) => {
    dispatch(changeCurrentIndex(page))
    dispatch(getSongListAction('全部', page - 1))
  }
  return (
    <SongListWrapper>
      {playlists.map((item) => {
        return (
          <div className="SongsCategroyCover" key={item.id}>
            <SongsCover Cover={item} />
          </div>
        )
      })}
      <PageWrapper>
        <Pagination
          total={total}
          onPageChange={onPageChange}
          CurrentPageIndex={CurrentIndex}
        />
      </PageWrapper>
    </SongListWrapper>
  )
})
