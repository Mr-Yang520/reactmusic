import styled from 'styled-components'

export const TopRanWrapper = styled.div`
  width: 230px;
  /* display: flex; */
  /* flex-direction: column; */
  .TopImg {
    display: flex;
    padding: 20px 0 21px 21px;
    .ImgRanking {
      width: 80px;
      height: 80px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      a {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-indent: 9999px;
        overflow: hidden;
        background: url(${require('@/assets/img/sprite_cover.png').default})
          no-repeat;
        background-position: -145px -57px;
      }
    }
    .RanAlt {
      margin-top: 6px;
      margin-left: 10px;
      .AltTilte {
        color: #333;
        font-size: 14px;
        font-weight: 550;
      }
      .alike {
        display: flex;
        width: 22px;
        height: 22px;
        text-indent: 9999px;
        overflow: hidden;
        background: url(${require('@/assets/img/sprite_02.png').default})
          no-repeat;
      }
      p {
        display: flex;
        align-items: center;
        margin-top: 6px;
      }
      .PlayIng {
        background-position: -267px -205px;
        :hover {
          background-position: -267px -235px;
        }
      }
      .Adds {
        background-position: -300px -205px;
        margin-left: 10px;
        :hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  .Toplist {
    ul {
      li {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-right: 10px;
        position: relative;
        .headline {
          display: flex;
          align-items: center;
          .Num {
            display: flex;
            width: 20px;
            font-size: 16px;
            margin-right: 5px;
          }
        }
         :nth-child(-n+3) .Num{
            color: #c10d0c;
         }
        .rank{
           display: flex;
           width: 170px;
           justify-content: space-between;
            a {
               width: 100%;
               max-width: 170px;
               height: 32px;
               line-height: 32px;
               color: #000;
               white-space: nowrap;
               overflow: hidden;
               text-overflow:ellipsis;
            }
        .Btn {
          display: none;
          align-items: center;
          button {
            display: inline-block;
            text-indent: 9999px;
            overflow: hidden;
            width: 17px;
            height: 17px;
            background: url(${require('@/assets/img/sprite_02.png').default})
              no-repeat;
            cursor: pointer;
            :nth-child(1) {
              background-position: -267px -268px;
              :hover {
                background-position: -267px -288px;
              }
            }
            :nth-child(2) {
              background: url(${require('@/assets/img/sprite_icon2.png').default})
                no-repeat;
              margin: 0 7px;
              background-position: 2px -698px;
              :hover {
                background-position: -20px -698px;
              }
            }
            :nth-child(3) {
              background-position: -297px -268px;
              :hover {
                background-position: -297px -288px;
              }
            }
          }
        }
        :hover .Btn {
          display: flex;
        }
        }
      }
    }
  }
  .CheckAll {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 32px;
    a {
      color: #000;
    }
  }
`
