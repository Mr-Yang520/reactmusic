import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  width: 100%;
  height: 126px;
  background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat;
  background-position: 0 0;
  border-right: 1px solid #d3d3d3;
  box-sizing:border-box;
  .content {
    display: flex;
    align-items: center;
    width: 205px;
    height: 75px;
    line-height: 22px;
    margin: 0 auto;
    color: #666;
  }
  button {
    width: 100px;
    height: 31px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    background: url(${require('@/assets/img/sprite_02.png').default}) no-repeat;
    background-position: 0 -195px;
    :hover {
      background-position: -110px -195px;
    }
  }
`
