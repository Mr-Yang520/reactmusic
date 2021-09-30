import { dicoverMenu } from '@/common/local-data'
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { DiscoverWrapper, TopMenum } from './style'

export default memo(function Discover(props) {
  const { route } = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenum className="wrap-v2">
          {dicoverMenu.map((item) => {
            return (
              <NavLink to={item.link} key={item.title}>
                <em className="ChoseLink">{item.title}</em>
              </NavLink>
            )
          })}
        </TopMenum>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
