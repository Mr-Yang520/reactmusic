import styled from 'styled-components'
export const HotClass = styled.div`
  width: 140px;
  .Content {
    .m-cover {
      width: 140px;
      position: relative;
      img {
        width: 140px;
        height: 140px;
      }
      a {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url(${require('@/assets/img/sprite_cover.png').default})
          no-repeat;
        background-position: 0 0;
        text-indent: 9999px;
        overflow: hidden;
      }
      .buttom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background: url(${require('@/assets/img/sprite_cover.png').default})
          no-repeat;
        background-position: 0 -537px;
        color: #ccc;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hear {
          display: flex;
          min-width: 43px;
          align-items: center;
          .hearIcon {
            width: 14px;
            height: 11px;
            background: url(${require('@/assets/img/sprite_icon.png').default})
              no-repeat;
            background-position: 0 -24px;
            margin-right: 6px;
          }
        }
        .PlayIng {
          width: 16px;
          height: 17px;
          background: url(${require('@/assets/img/sprite_icon.png').default})
            no-repeat;
          background-position: 0 0;
          cursor: pointer;
          :hover {
            background-position: 0 -60px;
          }
        }
      }
    }
    .TilteLInk {
      margin-top: 8px;
      a {
        color: #000;
        font-size: 14px;
        line-height: 1.4;
        :hover {
          text-decoration: underline;
        }
      }
    }
    .cover-source {
      display: flex;
      align-items: center;
      i {
        color: #999;
        margin-right: 3px;
      }
      a {
        display: inline-block;
        max-width: 76%;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
      img {
        width: 13px;
        height: 13px;
        margin-left: 4px;
        margin-bottom: 2px;
      }
    }
  }
`
