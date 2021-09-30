import React, { memo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SongsCategory from '../../c-cps/songs-category'
import { ChangeSongsGategoryFlag } from '../../store/actions'
import { SongsHeaderWrapper } from './style'

export default memo(function SongsHeader(props) {
  const [Tilte, setTilte] = useState('全部')
  const { CateoryFlag } = useSelector(
    (state) => ({
      CateoryFlag: state.getIn(['songs', 'CateoryFlag']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()

  const handelCaterory = (e) => {
    if (!CateoryFlag) {
      dispatch(ChangeSongsGategoryFlag(true))
    } else {
      dispatch(ChangeSongsGategoryFlag(false))
    }
    e.stopPropagation()
  }
  return (
    <SongsHeaderWrapper>
      <div className="AllCategories">
        <h4>{Tilte}</h4>
        <div className="Chose sprite_button" onClick={(e) => handelCaterory(e)}>
          <i className="sprite_button CaClassify">
            选择分类<em className="sprite_icon2"></em>
          </i>
          <SongsCategory setTilte={setTilte} />
        </div>
      </div>
      <div className="Hot">
        <a className="sprite_button2" href="#/">
          热门
        </a>
      </div>
    </SongsHeaderWrapper>
  )
})
