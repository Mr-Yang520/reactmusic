import classNames from 'classnames'
import React, { Fragment, memo, useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  changeCurrentIndex, ChangeSongsGategoryFlag,
  getSongCategroy,
  getSongListAction
} from '../../store/actions'
import { SongCategoryWrapper } from './style'

export default memo(function SongCategory(props) {
  const { setTilte } = props
  const { CateoryFlag, songCategroy = [] } = useSelector(
    (state) => ({
      CateoryFlag: state.getIn(['songs', 'CateoryFlag']),
      songCategroy: state.getIn(['songs', 'songCategroy']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongCategroy())
  }, [dispatch])

  const handelName = useCallback(
    (name) => {
      setTilte(name)
      dispatch(getSongListAction(name, 0))
      dispatch(changeCurrentIndex(1))
      dispatch(ChangeSongsGategoryFlag(false))
    },
    [dispatch, setTilte],
  )
  return (
    <SongCategoryWrapper
      onClick={(e) => e.stopPropagation()}
      className={classNames({ active: CateoryFlag })}
    >
      <div className="Manner">
        <a className="sprite_button2" href="#/">
          全部风格
        </a>
      </div>
      <div className="AllSelector">
        <div className="classify">
          <ul>
            {songCategroy.map((item, index) => {
              return (
                <li key={index}>
                  <dl>
                    <i
                      className={classNames(
                        'sprite_icon2',
                        'item' + (index + 1),
                      )}
                    ></i>
                    <span>{item.name}</span>
                  </dl>
                  <dd>
                    {item.subs.map((sitem, index) => {
                      return (
                        <Fragment key={sitem.name}>
                          <div className="borderLine">
                            <span
                              className="link"
                              onClick={(e) => handelName(sitem.name)}
                            >
                              {sitem.name}
                            </span>
                            <span className="line">|</span>
                          </div>
                        </Fragment>
                      )
                    })}
                  </dd>
                </li>
              )
            })}
            <div className="Line"></div>
          </ul>
        </div>
      </div>
    </SongCategoryWrapper>
  )
})
