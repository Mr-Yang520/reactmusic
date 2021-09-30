import styled from 'styled-components'

export const PaginNationWrapper = styled.div`
  margin: 25px 0;
  .control {
    width: 68px;
    height: 26px;
    background: url(${require('@/assets/img/sprite_button2.png').default})
      no-repeat;
    color: #333;
    border: 1px solid #ccc !important;
    margin: 0 4px;
  }
  .next {
    background-position: -75px -560px;
    text-align: left;
    padding-left: 12px;
    :hover {
      background-position: -75px -590px;
    }
  }
  .prev {
    padding-right: 12px;
    text-align: right;
    background-position: -3px -560px;
    :hover {
      background-position: -3px -590px;
    }
  }
  .ant-pagination.mini .ant-pagination-item {
    margin: 4px;
    border: 1px solid #ccc;
    border-radius: 2px;
    a {
      color: #333;
    }
    :hover {
      border-color: #666;
    }

    &.ant-pagination-item-active {
      background: #cf0f13;
      background-position: 0 -650px;
      border-color: #a2161b;
      a {
        color: #fff;
      }
    }
  }
`
