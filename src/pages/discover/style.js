import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  width: 100%;
  .top {
    height: 29px;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
  }
`

export const TopMenum = styled.div`
  display: flex;
  height: 100%;
  padding-left: 122px;
  padding-top: 3px;
  box-sizing: border-box;
  .ChoseLink {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 0 13px;
    margin: 0 17px;
    border-radius: 20px;
    color: #fff;
  }
  .active > .ChoseLink {
    background: #9b0909;
  }
  a {
    text-decoration: none;
    &:hover em {
      background: #9b0909;
    }
  }
`
