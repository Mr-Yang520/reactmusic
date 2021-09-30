import styled from 'styled-components'

export const SingerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
  border-right: 1px solid #d3d3d3;
  .Settled {
    display: flex;
    height: 24px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    color: #333;
    margin-bottom: 20px;
    span {
      font-weight: 550;
    }
  }
`
export const SettledWrapper = styled.div`
  .SingerEnter {
    text-decoration: none;
    :hover .singer {
      background: #f4f4f4;
    }
  }
  .singer {
    width: 210px;
    height: 62px;
    background: #fafafa;
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    img {
      width: 62px;
      height: 62px;
    }
    .user {
      width: 100%;
      height: 100%;
      border: 1px solid #e9e9e9;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #666;
      h4 {
        font-weight: 550;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        width: 137px;
        text-overflow: ellipsis;
      }
    }
  }
  .Applyfor {
    width: 100%;
    display: flex;
    justify-content: center;
    :hover a {
      background-position: right -182px;
    }
    :hover i {
      background-position: 0 -141px;
    }
    a {
      width: 175px;
      height: 31px;
      background: url(${require('@/assets/img/sprite_button.png').default})
        no-repeat;
      background-position: right -100px;
      text-decoration: none;
      i {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 550;
        width: 170px;
        height: 31px;
        background: url(${require('@/assets/img/sprite_button.png').default})
          no-repeat;
        background-position: 0 -59px;
        color: #333;
      }
    }
  }
`

export const AnchorWrapper = styled.div`
  margin-top: 30px;
  .User {
    display: flex;
    align-items: center;
    .Info {
      padding-left: 10px;
      color: #666;
      margin-bottom: 8px;
      h4 {
        margin-bottom: 4px;
        a {
          color: #333;
        }
      }
      p {
        width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
