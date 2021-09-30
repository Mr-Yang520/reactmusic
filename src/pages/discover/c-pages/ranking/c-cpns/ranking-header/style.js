import styled from 'styled-components'

export const RankHeaderWrapper = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  .rankImg {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    img{
      width: 150px;
      height: 150px;
    }
    .mask {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
      background: url(${require('@/assets/img/sprite_cover.png').default})
        no-repeat;
      background-position: -230px -380px;
    }
  }
  .info {
    margin-left: 30px;
    h4 {
      font-size: 20px;
      line-height: 24px;
    }
    .upData {
      display: flex;
      align-items: center;
      height: 35px;
      line-height: 35px;
      margin-bottom: 20px;
      margin-top: 5px;
      s {
        display: inline-block;
        width: 13px;
        height: 13px;
        background: url(${require('@/assets/img/sprite_icon2.png').default})
          no-repeat;
        background-position: -18px -682px;
        margin-right: 4px;
        position: relative;
        top: -1px;
      }
      i {
        color: #999;
      }
    }
  }
`
