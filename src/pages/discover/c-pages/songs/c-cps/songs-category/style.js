import styled from 'styled-components'

export const SongCategoryWrapper = styled.div`
  position: absolute;
  top: 45px;
  left: -88px;
  width: 700px;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: none;
  &.active {
    display: block;
  }
  &:before {
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -20px;
    left: 123px;
    padding: 0;
    border-bottom: 10px solid #ffffff;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    display: block;
    content: '';
    z-index: 12;
  }
  &:after {
    box-sizing: content-box;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -22px;
    left: 122px;
    padding: 0;
    border-bottom: 11px solid #d3d3d3;
    border-top: 11px solid transparent;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    display: block;
    content: '';
    z-index: 10;
  }
  .Manner {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding-left: 25px;
    padding-bottom: 12px;
    border-bottom: 1px solid #d3d3d3;
    a {
      width: 75px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-position: 0 -64px;
    }
  }
  .AllSelector {
    .classify {
      ul {
        position: relative;
        color: #333;
        padding: 0 20px 0 30px;
        li {
          display: flex;
          padding-top: 15px;
          dl {
            width: 72px;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: bold;
            padding-top: 18px;
            i {
              display: flex;
              width: 24px;
              height: 24px;
              margin-right: 6px;
            }
            .item1 {
              background-position: -20px -735px;
            }
            .item2 {
              background-position: 0 -62px;
            }
            .item3 {
              background-position: 0 -89px;
            }
            .item4 {
              background-position: 0 -117px;
            }
            .item5 {
              background-position: 0 -141px;
            }
          }
          dd {
            display: flex;
            width: 602px;
            flex-wrap: wrap;
            line-height: 24px;
            padding-top: 18px;
            margin-left: 15px;
            .line {
              margin: 0 10px;
              color: #d8d8d8;
            }
            .link {
              color: #333;
              cursor: pointer;
              :hover {
                color: #000;
                text-decoration: underline;
              }
            }
          }
          &:nth-child(5) {
            padding-bottom: 25px;
          }
        }
        .Line {
          width: 1px;
          background: #d3d3d3;
          height: 100%;
          position: absolute;
          left: 100px;
          top: 0;
          transform: scale(0.5, 1);
        }
      }
    }
  }
`
