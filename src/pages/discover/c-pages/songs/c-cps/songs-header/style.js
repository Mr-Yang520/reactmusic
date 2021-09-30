import styled from 'styled-components'

export const SongsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  .AllCategories {
    display: flex;
    align-items: center;
    color: #333;
    h4 {
      font-size: 24px;
    }
    .Chose {
      display: flex;
      width: 91px;
      height: 31px;
      padding-right: 3px;
      justify-content: center;
      align-items: center;
      margin-left: 12px;
      position: relative;
      background-position: right -100px;
      &:hover {
        background-position: right -182px;
      }
      :hover .CaClassify {
        background-position: 0 -141px;
      }
      .CaClassify {
        width: 100%;
        height: 100%;
        background-position: 0 -59px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0c73c2;
        cursor: pointer;
        em {
          width: 8px;
          height: 5px;
          background-position: -70px -543px;
          margin-left: 3px;
        }
      }
    }
  }
  .Hot {
    a {
      display: flex;
      width: 46px;
      height: 29px;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-position: 0 0;
    }
  }
`
