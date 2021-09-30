import React, { memo } from 'react'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RcRanking from './c-cpns/rc-ranking'
import SettleSinger from './c-cpns/settle-singer'
import TopBanner from './c-cpns/top-banner'
import UserLogin from './c-cpns/user-login'
import { BannberWrapper, Content, RecommendLeft, RecommendRight } from './style'

export default memo(function Recommend() {
  return (
    <BannberWrapper>
      {/* 顶部轮播 */}
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend></HotRecommend>
          {/* 新碟上架 */}
          <NewAlbum></NewAlbum>
          {/* 榜单 */}
          <RcRanking></RcRanking>
        </RecommendLeft>
        <RecommendRight>
          {/* 登录 */}
          <UserLogin></UserLogin>
          {/* 入驻歌手 */}
          <SettleSinger></SettleSinger>
        </RecommendRight>
      </Content>
    </BannberWrapper>
  )
})
