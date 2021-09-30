import styled from 'styled-components'

export const TopBannerWarrper = styled.div`
   width: 100%;
   background: url(${props => props.bgImage}) center center/6000px;
   transition: background .2s ;
  .bannerImg {
    width: 100%;
    height: 285px;
    position: relative;
    z-index: 999;
    img{
      width: 100%;
    }
  }
`

export const BannerItem = styled.div`
  position: relative;
  height: 285px;
  display: flex;
  .ant-carousel {
    width: 730px;
    height: 285px;
  }
  .slick-slide{
    height: 285px;
  }
  .contentStyle {
    width: 730px;
    height: 285px;
    color: #fff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .download {
    width: 250px;
    height: 100%;
    background-image: url(${require('@/assets/img/download.png').default});
    display: flex;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
    a {
      display: flex;
      width: 216px;
      height: 56px;
      position: absolute;
      bottom: 43px;
      left: 19px;
      text-indent: 999px;
      &:hover {
        background-image: url(${require('@/assets/img/download.png').default});
        background-position: 0 -290px;
      }
    }
    p {
      margin: 10px auto;
      color: #8d8d8d;
      text-align: center;
    }
  }
  .slick-dots {
    width: 730px;
    margin: 0;
  }
  .FollowBtn {
    width: 114%;
    position: absolute;
    top: 100px;
    left: -65px;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    span {
      display: flex;
      width: 37px;
      height: 63px;
      background-image: url(${require('@/assets/img/banner_sprite.png').default});
    }
    .prev {
      background-position: 0 -360px;
      cursor: pointer;
      &:hover {
        background-position: 0 -430px;
      }
    }
    .next {
      background-position: 0 -508px;
      cursor: pointer;
      &:hover {
        background-position: 0 -578px;
      }
    }
  }
`
