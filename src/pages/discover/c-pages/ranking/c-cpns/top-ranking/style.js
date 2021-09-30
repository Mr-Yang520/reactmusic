import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 100%;
  .Monthly {
    .rankTitle {
      color: #000;
      font-size: 15px;
      font-weight: 550;
      padding: 20px 0 12px 15px;
    }
    .RankContent {
      .ranklist {
        display: flex;
        align-items: center;
        padding: 10px 0;
        padding-left: 20px;
        cursor: pointer;
        .info {
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 10px;
          p {
            height: 16px;
          }
          p:nth-child(2) {
            color: #999;
          }
        }
        &:hover, &.active {
          background: #e6e6e6;
        }
      }
    }
  }
`
