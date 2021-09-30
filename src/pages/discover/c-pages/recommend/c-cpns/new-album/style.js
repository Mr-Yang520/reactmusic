import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  width: 100%;
  .albumBorder {
    margin-top: 20px;
    border: 1px solid #d3d3d3;
  }
  .album {
    position: relative;
    width: 100%;
    height: 186px;
    padding: 25px 20px 0px 20px;
    border: 1px solid #fff;
    background: #f5f5f5;
    .ant-carousel {
      position: relative;
      z-index: 99;
    }
    .contentStyle {
      width: 645px;
      height: 150px;
      .CoverWrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      }
    }
    .FollowBtn {
      width: 100%;
      height: 17px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      top: calc(50% - 26px);
      left: 0;
      span {
        background: url(${require('@/assets/img/sprite_02.png').default})
          no-repeat;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
      .prev {
        background-position: -280px -75px;
      }
      .next {
        background-position: -300px -75px;
      }
    }
  }
`
