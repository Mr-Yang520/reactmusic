import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  .headline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #c10d0c;
    background-image: url(${require('@/assets/img/sprite_02.png').default});
    background-position: -225px -156px;
    background-repeat: no-repeat;
    padding: 0 10px 0 34px;
    padding-bottom: 2px;
    .headleft {
      display: flex;
      align-items: center;
      .HotSub {
        font-size: 20px;
        color: #333;
        padding-right: 20px;
        text-decoration: none;
      }
      .tab {
        display: flex;
        align-items: center;
        a {
          font-size: 12px;
          color: #666;
        }
        span {
          margin: 0 10px;
          color: #ccc;
          &:last-child {
            display: none;
          }
        }
      }
    }
    .headright {
      display: flex;
      align-items: center;
      i {
        width: 12px;
        height: 12px;
        background-image: url(${require('@/assets/img/sprite_02.png').default});
        background-position: 0 -240px;
        margin-left: 5px;
      }
    }
  }
`
